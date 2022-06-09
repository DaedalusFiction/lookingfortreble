import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";

import React, { useState } from "react";

const axios = require("axios");

const BasicInfo = () => {
    const [info, setInfo] = useState({});
    const [pronouns, setPronouns] = useState("She/Her");

    const handleNameChange = (e) => {
        const newInfo = { ...info, name: e.target.value };
        setInfo(newInfo);
        console.log(newInfo);
    };
    const handlePronounsChange = (e) => {
        const newInfo = { ...info, pronouns: e.target.value };
        setInfo(newInfo);
        setPronouns(e.target.value);
        console.log(newInfo);
    };
    const handleDateChange = (e) => {
        const newInfo = { ...info, date: e.target.value };
        setInfo(newInfo);
        console.log(newInfo);
    };

    const handleSubmit = () => {
        axios.get("http://localhost:4000/api").then((res) => {
            console.log(res);
        });
    };
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1em",
                padding: "8em 0",
            }}
        >
            <TextField label="Name" onChange={handleNameChange} />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={pronouns}
                    label="Pronouns"
                    onChange={handlePronounsChange}
                >
                    <MenuItem value="She/Her">She/Her</MenuItem>
                    <MenuItem value="He/Him">He/Him</MenuItem>
                    <MenuItem value="They/Them">They/Them</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                </Select>
            </FormControl>
            <InputLabel id="Birthday">Birthday</InputLabel>
            <Input type="date" onChange={handleDateChange} />
            <Button variant="contained" onClick={handleSubmit}>
                Submit
            </Button>
        </Box>
    );
};

export default BasicInfo;
