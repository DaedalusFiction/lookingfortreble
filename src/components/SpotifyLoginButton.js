import { Box, Button } from "@mui/material";
import axios from "axios";
import React from "react";

const SpotifyLoginButton = () => {
    const CLIENT_ID = "a3df4f16b2134c0dbea45f497ed4e49a";
    const REDIRECT_URI = "http://localhost:3000";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";

    const handleSpotifyLogin = (e) => {
        e.preventDefault();
        console.log("login Button");
        // axios
        //     .get(AUTH_ENDPOINT, {
        //         client_id: CLIENT_ID,
        //         redirect_uri: REDIRECT_URI,
        //         response_type: RESPONSE_TYPE,
        //     })
        //     .then((res) => {
        //         console.log(res);
        //     });
    };

    const logout = () => {
        window.localStorage.removeItem("token");
    };
    return (
        <Box>
            <a
                href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            >
                Log In to Spotify
            </a>
            <Button onClick={logout}>logout</Button>
        </Box>
    );
};

export default SpotifyLoginButton;
