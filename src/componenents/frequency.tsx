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

const Frequency = (prop) => {
    return (
        <Box className="div-con-content">
            <Box className="div-con-content-child">
                <Box className="div-con-h">
                    Fre
                </Box>
                <Box className="div-con" sx={{ display: "flex" }}>
                    <Box className="div-container-content">
                        <Box className="div-container">
                            <Box>
                                Schedule
                            </Box>
                            <Box className="div-container-input">
                                <Box className="bold">
                                    08:00
                                </Box>
                                <Box className="OUTC">
                                    (00:00 UTC)
                                </Box>
                                <Box className="bold">
                                    -
                                </Box>
                                <Box className="timer bold">
                                    <Box className="container-arrow">^</Box>
                                    <Box>
                                        19:00
                                    </Box>
                                    <Box className="container-arrow">v</Box>
                                </Box>
                                <Box className="OUTC">
                                    (11:00 UTC)
                                </Box>
                            </Box>
                            <Box className="div-container-input">
                                <Box className="timer bold">
                                    <Box className="container-arrow">^</Box>
                                    <Box>
                                        19:00
                                    </Box>
                                    <Box className="container-arrow">v</Box>
                                </Box>
                                <Box className="OUTC">
                                    (00:00 UTC)
                                </Box>
                                <Box className="bold">
                                    -
                                </Box>
                                <Box className="bold">
                                    08:00
                                </Box>
                                <Box className="bold">
                                    Next Day
                                </Box>
                                <Box className="OUTC">
                                    (24:00 UTC)
                                </Box>
                            </Box>
                        </Box>
                        <Box className="withdraw">
                            <Box className="withdraw-container">
                                <Box className="withdraw-container-child">
                                    <Box className="withdraw-heading">
                                        Total Withdraw amount limit
                                    </Box>
                                    <input placeholder="1000" className="Input-heading"></input>
                                    <p className="div-con-p">Set 0 or blank to dissable</p>
                                </Box>
                                <Box className="withdraw-container-child">
                                    <Box className="withdraw-heading">
                                        Pre-user Withdraw amount limit
                                    </Box>
                                    <input placeholder="50" className="Input-heading"></input>
                                    <p className="div-con-p">Set 0 or blank to dissable</p>
                                </Box>
                            </Box>
                            <Box className="withdraw-container">
                                <Box className="withdraw-container-child">
                                    <input placeholder="1000" className="Input-heading"></input>
                                    <p className="div-con-p">Set 0 or blank to dissable</p>
                                </Box>
                                <Box className="withdraw-container-child">
                                    <input placeholder="50" className="Input-heading"></input>
                                    <p className="div-con-p">Set 0 or blank to dissable</p>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <SaveCancel />
                </Box>
            </Box>
        </Box>
    );
};

export default Frequency;


