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
    const [songs, setSongs] = useState(new Array(10).fill("hi"));
    return (
        <>
            <Grid container>
                <Grid item xs={12} md={6} className="centered">
                    <Box>
                        <Typography>Add a Song</Typography>
                        <TextField />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} className="centered">
                    <Paper elevation={2} sx={{ minWidth: "25rem" }}>
                        <List>
                            {songs.map((song, index) => {
                                return (
                                    <>
                                        <ListItem>
                                            {index + 1}. {song}
                                        </ListItem>
                                        {index !== songs.length - 1 && (
                                            <Divider />
                                        )}
                                    </>
                                );
                            })}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

export default SonglistCreator;
