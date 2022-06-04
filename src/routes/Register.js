import {
    Box,
    Button,
    Container,
    Fade,
    Slide,
    TextField,
    Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import BasicInfo from "../components/BasicInfo";
import HorizontalLinearStepper from "../components/HorizontalLineStepper";
import SonglistCreator from "../components/SonglistCreator";
import Login from "../components/Login";

const Register = () => {
    const containerRef = useRef();
    const [currentStep, setCurrentStep] = useState(0);
    const steps = 3;

    const handleNext = () => {
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);
    };
    const handleBack = () => {
        const nextStep = currentStep - 1;
        setCurrentStep(nextStep);
    };
    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    padding: "3rem 0",
                    position: "relative",
                    height: "40rem",
                }}
            >
                <Fade
                    in={currentStep === 0}
                    mountOnEnter
                    unmountOnExit
                    // timeout={{ enter: 200, exit: 100 }}
                    style={{
                        position: "absolute",
                        top: "0",
                    }}
                >
                    <Box>
                        <SonglistCreator />
                    </Box>
                </Fade>
                <Fade
                    in={currentStep === 1}
                    mountOnEnter
                    unmountOnExit
                    style={{
                        position: "absolute",
                        top: "0",
                    }}
                >
                    <Box>
                        {/* <SonglistCreator /> */}
                        <BasicInfo />
                    </Box>
                </Fade>
                {/* <Login /> */}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "2rem",
                }}
            >
                <Button onClick={handleBack}>Back</Button>
                <Button onClick={handleNext}>Next</Button>
            </Box>
        </Container>
    );
};

export default Register;
