import { Box, Button, Container, Slide, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import BasicInfo from "../components/BasicInfo";
import HorizontalLinearStepper from "../components/HorizontalLineStepper";
import SonglistCreator from "../components/SonglistCreator";

const Register = () => {
    const containerRef = useRef();
    const steps = ["songlist", "info", "login"];
    const [currentStep, setCurrentStep] = useState("songlist");

    const handleNext = () => {
        const nextStep = steps.indexOf(currentStep) + 1;
        console.log(nextStep);
        setCurrentStep(steps[nextStep]);
    };
    const handleBack = () => {
        const nextStep = steps.indexOf(currentStep) - 1;
        console.log(nextStep);
        setCurrentStep(steps[nextStep]);
    };
    return (
        <Container
            maxWidth="md"
            sx={{
                display: "flex",
                justifyContent: "center",
                height: "90vh",
                position: "relative",
                overflowX: "hidden",
            }}
        >
            <Slide
                direction={currentStep === "songlist" ? "left" : "right"}
                in={currentStep === "songlist"}
            >
                <Box
                    sx={{
                        position: "absolute",
                        left: "0",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography variant="h1" sx={{ textAlign: "center" }}>
                        Create the Perfect Playlist
                    </Typography>
                    <Typography sx={{ textAlign: "center" }}>
                        (Hint: It doesn't have to be perfect. You can change it
                        later)
                    </Typography>
                    <SonglistCreator />
                    <Button onClick={handleNext}>Next</Button>
                </Box>
            </Slide>
            <Slide
                direction={currentStep === "info" ? "left" : "right"}
                in={currentStep === "info"}
            >
                <Box
                    sx={{
                        position: "absolute",
                        left: "0",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <BasicInfo />
                    <Box>
                        <Button onClick={handleBack}>Back</Button>
                        <Button onClick={handleNext}>Next</Button>
                    </Box>
                </Box>
            </Slide>
        </Container>
    );
};

export default Register;
