const express = require("express");
const router = express.Router();
const axios = require("../axios.js");
const cors = require("cors");

var querystring = require("querystring");

const client_id = "a3df4f16b2134c0dbea45f497ed4e49a";
const client_secret = "cbb23f99f1e14caab4ff8e63e4441d89";
// const redirect_uri = "https://lookingfortreble.com/spotify/callback";
const redirect_uri = "localhost:3000";

var request = require("request"); // "Request" library

var stateKey = "spotify_auth_state";

const config = {
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization:
            "Bearer BQCoIIEKAymFO5Xoj1TSNq--IDxVyqm0x876Vh_XO_dTYjDfEBit4lrmpOMrulJO13nB6PNOIh1mT5M3WJAHG8R1kLV1bXxeUyNMD3FaHMey86Fc0LC5FznSjxOKwCvtRwTj51uqd1j_ejvK6-eaAlOmE33MKbs",
    },
};

router.use(cors());

router.get("/userInfo", (req, res) => {
    axios
        .get(
            "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks?market=ES&limit=10&offset=5",
            config
        )
        .then((res) => {
            console.log(res);
        });
    res.json({ message: "userInfo" });
});

router.get("/songPreview", async (req, res) => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/todos");
    res.json({ message: data.data });
});

router.get("/topTen", (req, res) => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
        console.log("testing topTen!");
    });
    res.json({ message: "Top Ten!" });
});

var generateRandomString = function (length) {
    var text = "";
    var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

router.get("/login", (req, res) => {
    var state = generateRandomString(16);
    res.cookie(stateKey, state);
    console.log("testing");
    // your application requests authorization
    var scope = "user-read-private user-read-email";
    const redirectUrl =
        "https://accounts.spotify.com/authorize?" +
        querystring.stringify({
            response_type: "code",
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state,
        });
    res.json({ url: redirectUrl });
});

router.get("/callback", function (req, res) {
    // your application requests refresh and access tokens
    // after checking the state parameter

    var code = req.query.code || null;
    var state = req.query.state || null;
    var storedState = req.cookies ? req.cookies[stateKey] : null;

    if (state === null || state !== storedState) {
        res.redirect(
            "/#" +
                querystring.stringify({
                    error: "state_mismatch",
                })
        );
    } else {
        res.clearCookie(stateKey);
        var authOptions = {
            url: "https://accounts.spotify.com/api/token",
            form: {
                code: code,
                redirect_uri: redirect_uri,
                grant_type: "authorization_code",
            },
            headers: {
                Authorization:
                    "Basic " +
                    new Buffer(client_id + ":" + client_secret).toString(
                        "base64"
                    ),
            },
            json: true,
        };

        request.post(authOptions, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                var access_token = body.access_token,
                    refresh_token = body.refresh_token;

                var options = {
                    url: "https://api.spotify.com/v1/me",
                    headers: { Authorization: "Bearer " + access_token },
                    json: true,
                };

                // use the access token to access the Spotify Web API
                request.get(options, function (error, response, body) {
                    console.log(body);
                });

                // we can also pass the token to the browser to make requests from there
                res.redirect(
                    "/#" +
                        querystring.stringify({
                            access_token: access_token,
                            refresh_token: refresh_token,
                        })
                );
            } else {
                res.redirect(
                    "/#" +
                        querystring.stringify({
                            error: "invalid_token",
                        })
                );
            }
        });
    }
});

router.get("/refresh_token", function (req, res) {
    // requesting access token from refresh token
    var refresh_token = req.query.refresh_token;
    var authOptions = {
        url: "https://accounts.spotify.com/api/token",
        headers: {
            Authorization:
                "Basic " +
                new Buffer(client_id + ":" + client_secret).toString("base64"),
        },
        form: {
            grant_type: "refresh_token",
            refresh_token: refresh_token,
        },
        json: true,
    };

    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var access_token = body.access_token;
            res.send({
                access_token: access_token,
            });
        }
    });
});

module.exports = router;
