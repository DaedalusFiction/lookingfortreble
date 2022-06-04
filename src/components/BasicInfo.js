import {
    Box,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    TextField,
} from "@mui/material";

import React, { useState } from "react";

const BasicInfo = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            // sx={{
            //     display: "flex",
            //     paddingTop: "8rem",
            // }}
        >
            <TextField label="Name" />
            <TextField label="Pronouns" />
        </Box>
    );
};

export default BasicInfo;
