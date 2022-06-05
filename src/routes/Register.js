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
    const steps = [<SonglistCreator />, <BasicInfo />, <Login />];

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
                }}
            >
                {steps[currentStep]}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "2rem",
                    gap: "1em",
                }}
            >
                <Button onClick={handleBack}>Back</Button>
                <Button onClick={handleNext}>Next</Button>
            </Box>
        </Container>
    );
};

export default Register;
