const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "build");
const port = process.env.PORT || 4000;

var querystring = require("querystring");

const spotifyRouter = require("./routes/spotify.js");

var cors = require("cors");
var cookieParser = require("cookie-parser");

const client_id = "a3df4f16b2134c0dbea45f497ed4e49a";
const client_secret = "cbb23f99f1e14caab4ff8e63e4441d89";
// const redirect_uri = "https://lookingfortreble.com/spotify/callback";
const redirect_uri = "http://localhost:4000/callback";

var request = require("request"); // "Request" library

var stateKey = "spotify_auth_state";

app.use(express.static(publicPath));
app.use("/spotify", spotifyRouter);
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested With, Content-Type, Accept"
    );
    next();
});

//start test
var generateRandomString = function (length) {
    var text = "";
    var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

app.get("/login", (req, res) => {
    console.log("login");
    var state = generateRandomString(16);
    res.cookie(stateKey, state);

    // your application requests authorization
    var scope = "user-read-private user-read-email";
    res.header("Access-Control-Allow-Origin", "*");
    res.redirect(
        "https://accounts.spotify.com/authorize?" +
            querystring.stringify({
                response_type: "code",
                client_id: client_id,
                scope: scope,
                redirect_uri: redirect_uri,
                state: state,
            })
    );
});

app.get("/callback", function (req, res) {
    console.log("callback");
    // your application requests refresh and access tokens
    // after checking the state parameter

    var code = req.query.code || null;
    var state = req.query.state || null;
    var storedState = req.cookies ? req.cookies[stateKey] : null;

    if (state === null || state !== storedState) {
        console.log("state one");
        res.header("Access-Control-Allow-Origin", "*");
        res.redirect(
            "/#" +
                querystring.stringify({
                    error: "state_mismatch",
                })
        );
    } else {
        console.log("state two");
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
        console.log("posting");
        request.post(authOptions, function (error, response, body) {
            console.log("posting...");
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
                res.header("Access-Control-Allow-Origin", "*");
                res.redirect(
                    "/#" +
                        querystring.stringify({
                            access_token: access_token,
                            refresh_token: refresh_token,
                        })
                );
            } else {
                res.header("Access-Control-Allow-Origin", "*");
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

app.get("/refresh_token", function (req, res) {
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
            res.header("Access-Control-Allow-Origin", "*");
            res.send({
                access_token: access_token,
            });
        }
    });
});

//end test

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
    console.log("Server is up on " + port);
});
