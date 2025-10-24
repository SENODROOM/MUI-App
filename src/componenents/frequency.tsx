import React from "react";
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Divider,
    TextField,
    Button,
    FormControlLabel,
    Checkbox,
    Select,
    MenuItem,
    Container,
    Input,
} from "@mui/material";
import SaveCancel from "./savecancel";

interface FrequencyProps {
  body: string; // or whatever type it actually is
}

export default function Frequency(props: FrequencyProps){
    console.log(props)
    return (

        <Box className="div-con-content">
            <Box className="div-con-content-child">
                <Box className="div-con-h">
                    Frequency per {props.body}
                </Box>
                <Box className="div-con" sx={{ display: "flex" }}>
                    <Box className="div-container-content">
                        
                    </Box>
                    <SaveCancel />
                </Box>
            </Box>
        </Box>
    );
};


