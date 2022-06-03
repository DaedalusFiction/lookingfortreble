import { Box, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
    return (
        <Box sx={{ borderTop: "1px solid gray" }}>
            <Container sx={{ marginTop: "5rem", marginBottom: "5rem" }}>
                <Grid container>
                    <Grid
                        item
                        xs={6}
                        sm={4}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5em",
                        }}
                    >
                        <Typography variant="h5">My Websites</Typography>
                        <Link
                            href="https://sicktooth.com"
                            target="_blank"
                            rel="noreferrer"
                            underline="hover"
                        >
                            Sicktooth
                        </Link>
                        <Link
                            href="http://playlist23.herokuapp.com"
                            target="_blank"
                            rel="noreferrer"
                            underline="hover"
                        >
                            Playlist 23
                        </Link>
                        <Link
                            href="https://snackbarband.com"
                            target="_blank"
                            rel="noreferrer"
                            underline="hover"
                        >
                            Snackbar
                        </Link>
                        <Link
                            href="https://thegreatroadtrip.net"
                            target="_blank"
                            rel="noreferrer"
                            underline="hover"
                        >
                            The Great Road Trip
                        </Link>
                        <Link
                            href="https://streamerize.com"
                            target="_blank"
                            rel="noreferrer"
                            underline="hover"
                        >
                            Streamerize
                        </Link>
                        <Link
                            href="https://daedalusediting.com"
                            target="_blank"
                            rel="noreferrer"
                            underline="hover"
                        >
                            Daedalus Editing
                        </Link>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        sm={4}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5em",
                        }}
                    >
                        <Typography variant="h5">Contact</Typography>
                        <Link
                            href="mailto: djs41286@gmail.com"
                            underline="hover"
                        >
                            Email: djs41286@gmail.com
                        </Link>
                        <Link href="tel:+4348255038" underline="hover">
                            Telephone: (434) 825-5038
                        </Link>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        sm={4}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5em",
                            marginTop: { xs: "5rem", sm: "0" },
                        }}
                    >
                        <Typography variant="h5">Links</Typography>
                        <Link
                            href="https://github.com/DaedalusFiction"
                            target="_blank"
                            rel="noreferrer"
                            underline="hover"
                        >
                            Github
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/david-sorensen-21204422b"
                            target="_blank"
                            rel="noreferrer"
                            underline="hover"
                        >
                            LinkedIn
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
