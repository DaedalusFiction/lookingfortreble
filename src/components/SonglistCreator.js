import {
    Box,
    Container,
    Divider,
    List,
    ListItem,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";

const SonglistCreator = () => {
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
                    <TextField sx={{ marginTop: "1em" }} />
                </Box>
                <Paper elevation={2} sx={{ minWidth: "25rem" }}>
                    <List>
                        {songs.map((song, index) => {
                            return (
                                <>
                                    <ListItem>
                                        {index + 1}. {song.title}
                                    </ListItem>
                                    {index !== songs.length - 1 && <Divider />}
                                </>
                            );
                        })}
                    </List>
                </Paper>
            </Box>
        </Container>
    );
};

export default SonglistCreator;
