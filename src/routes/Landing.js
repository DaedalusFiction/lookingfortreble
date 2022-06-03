import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import headphones from "../assets/images/headphones3.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <>
            <Box
                sx={{
                    height: "100vh",
                    background: `url(${headphones})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Container>
                    <Box
                        sx={{
                            maxWidth: "30rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "2rem",
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: "clamp(3rem, 6vw, 10.5rem)",
                                textShadow: "2px 2px var(--red-500)",
                            }}
                        >
                            FIND YOUR PARTNER IN TIME
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h2"
                            sx={{ maxWidth: "40ch" }}
                        >
                            Meet new people, make friends, and find your special
                            someone based on what truly matters most in life:
                            Your shared taste in music
                        </Typography>
                        <Link to="register">
                            <Button
                                color="primary"
                                variant="contained"
                                size="large"
                                sx={{ width: "fit-content" }}
                            >
                                Let's Go!
                            </Button>
                        </Link>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default Landing;
