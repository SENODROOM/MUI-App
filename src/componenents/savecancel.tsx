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

const SaveCancel = () => {
    return (
        <>
            <Box className="SaveCancel">
                <Box className="Cancel SaveCancel-button">
                    Cancel
                </Box>
                <Box className="Save SaveCancel-button" sx={{
                    backgroundColor: '#0C2057',
                    color: 'white',
                }}>
                    Save
                </Box>
            </Box>
        </>
    );
};

export default SaveCancel;