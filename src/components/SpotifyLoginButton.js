import { Button } from "@mui/material";
import axios from "axios";
import React from "react";

const SpotifyLoginButton = () => {
    const handleSpotifyLogin = (e) => {
        e.preventDefault();
        axios
            .get("http://localhost:4000/spotify/login", { mode: "cors" })
            .then((res) => {
                window.location.href = res.url;
                // console.log(res);
            });
    };
    return (
        <Button variant="contained" onClick={handleSpotifyLogin}>
            Log In to Spotify
        </Button>
    );
};

export default SpotifyLoginButton;
