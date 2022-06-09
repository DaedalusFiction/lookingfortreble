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

const SonglistCreator = () => {
    const [searchValue, setSearchValue] = useState("");
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

    const handleSearchChange = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value);
    };
    const handleSearch = (e) => {
        console.log(searchValue);
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
                        {songs.map((song, index) => {
                            return (
                                <Box key={index}>
                                    <ListItem>
                                        {index + 1}. {song.title}
                                    </ListItem>
                                    {index !== songs.length - 1 && <Divider />}
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
