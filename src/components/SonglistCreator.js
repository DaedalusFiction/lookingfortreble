import {
    Box,
    Divider,
    Grid,
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
        <>
            <Typography variant="h1" sx={{ textAlign: "center" }}>
                Create the Perfect Playlist
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
                (Hint: It doesn't have to be perfect. You can change it later)
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2em",
                    padding: "2em 0",
                }}
            >
                <TextField label="Find a Song" />
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
        </>
    );
};

export default SonglistCreator;
