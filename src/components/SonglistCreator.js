import {
    Box,
    Button,
    Container,
    Divider,
    List,
    ListItem,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import SpotifyLoginButton from "./SpotifyLoginButton";
import axios from "axios";
import { useEffect } from "react";

const SonglistCreator = () => {
    const [searchValue, setSearchValue] = useState("");

    const [artists, setArtists] = useState([]);
    const [songs, setSongs] = useState([
        { artist: "The white Stripes", title: "Hotel Yorba" },
        { artist: "The white Stripes", title: "Hotel Yorba" },
        { artist: "The white Stripes", title: "Hotel Yorba" },
        { artist: "The white Stripes", title: "Hotel Yorba" },
        { artist: "The white Stripes", title: "Hotel Yorba" },
        { artist: "The white Stripes", title: "Hotel Yorba" },
        { artist: "The white Stripes", title: "Hotel Yorba" },
        { artist: "The white Stripes", title: "Hotel Yorba" },
        { artist: "The white Stripes", title: "Hotel Yorba" },
        { artist: "The white Stripes", title: "Hotel Yorba" },
    ]);
    const CLIENT_ID = "+++++++++++++++++++++++++++++";
    const REDIRECT_URI = "http://localhost:3000/register";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";

    const [token, setToken] = useState("");
    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem("token");

        if (!token && hash) {
            token = hash
                .substring(1)
                .split("&")
                .find((elem) => elem.startsWith("access_token"))
                .split("=")[1];

            window.location.hash = "";
            window.localStorage.setItem("token", token);
        }

        setToken(token);
    }, []);

    const handleSearchChange = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value);
    };
    const handleSearch = async (e) => {
        console.log(token);
        const { data } = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                q: searchValue,
                type: "artist",
            },
        });
        setArtists(data.artists.items);
    };
    return (
        <Container sx={{ padding: "3em 0" }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: { xs: "wrap", md: "nowrap" },
                    gap: "2em",
                    marginTop: "2em",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{ textAlign: "center", marginBottom: ".5em" }}
                    >
                        Create the Perfect Playlist
                    </Typography>
                    <Typography sx={{ textAlign: "center" }}>
                        (Hint: It doesn't have to be perfect. You can change it
                        later)
                    </Typography>
                    <TextField
                        sx={{ margin: "1em 0" }}
                        onChange={handleSearchChange}
                    />
                    <Button variant="contained" onClick={handleSearch}>
                        Search
                    </Button>
                    <SpotifyLoginButton />
                </Box>
                <Paper elevation={2} sx={{ minWidth: "25rem" }}>
                    <List>
                        {artists.map((artist, index) => {
                            return (
                                <Box key={index}>
                                    <ListItem>
                                        {index + 1}. {artist.name}
                                    </ListItem>
                                    {index !== artists.length - 1 && (
                                        <Divider />
                                    )}
                                </Box>
                            );
                        })}
                    </List>
                </Paper>
            </Box>
        </Container>
    );
};

export default SonglistCreator;
