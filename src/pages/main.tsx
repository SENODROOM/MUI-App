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

const Home = () => {
    return (
        <Container className="main-page">

            {/* ---- PAGE TITLE ---- */}
            <Typography variant="h5" fontWeight={600} sx={{ mb: 3, color: "#212121" }}>
                Wallet Details
            </Typography>

            {/* ---- NAV TABS ---- */}
            <Box
                className="main-page-nav"
                sx={{
                    gap: 2,
                    mb: 3,
                }}
            >
                {[
                    "Wallet Policy",
                    "Withdrawal Policy",
                    "Withdrawal State",
                    "Withdrawal Callback",
                    "Deposit Withdraw Record",
                    "Risk Control",
                    "Callback Settings",
                    "Security Settings",
                ].map((tab) => (
                    <Typography
                        className={`main-page-nav-tab ${tab === "Risk Control" ? "active" : ""}`}
                        sx={{
                            gap: 2,
                            fontSize: 13
                        }}
                    >
                        {tab}
                    </Typography>

                ))}
            </Box>

            {/* ---- WALLET DETAILS CARD ---- */}
            <Card sx={{ borderRadius: "10px", mb: 4 }}>
                <Box
                    className="wallet-title"
                    sx={{
                        backgroundColor: "#0C2D57",
                        p: 1.5,
                        color: "#fff",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                    }}
                >
                    <Typography fontWeight={600}>Wallet Details</Typography>
                </Box>

                <Box className="wallet-card">
                    <Box className="wallet-row">
                        <Box className="wallet-heading" sx={{ fontWeight: "bold" }}>
                            Name
                        </Box>
                        <Box className="wallet-p" sx={{ fontWeight: "100" }}>
                            TRX Incoming
                        </Box>
                    </Box>
                    <Box className="wallet-row">
                        <Box className="wallet-heading" sx={{ fontWeight: "bold" }}>
                            Currency
                        </Box>
                        <Box className="wallet-p" sx={{ fontWeight: "100" }}>
                            TRX
                        </Box>
                    </Box>
                    <Box className="wallet-row">
                        <Box className="wallet-heading" sx={{ fontWeight: "bold" }}>
                            Address
                        </Box>
                        <Box className="wallet-p" sx={{ fontWeight: "100" }}>
                            TGdSezcBdswwtryd352sadfkomWBewrwerweew323232
                        </Box>
                    </Box>
                    <Box className="wallet-row">
                        <Box className="wallet-heading" sx={{ fontWeight: "bold" }}>
                            Type
                        </Box>
                        <Box className="wallet-p" sx={{ fontWeight: "100" }}>
                            Vault
                        </Box>
                    </Box>
                    <Box className="wallet-row">
                        <Box className="wallet-heading" sx={{ fontWeight: "bold" }}>
                            Wallet ID
                        </Box>
                        <Box className="wallet-p" sx={{ fontWeight: "100" }}>
                            166935
                        </Box>
                    </Box>
                    <Box className="wallet-row">
                        <Box className="wallet-heading" sx={{ fontWeight: "bold" }}>
                            Balance
                        </Box>
                        <Box className="wallet-p" sx={{ fontWeight: "100" }}>
                            34
                        </Box>
                    </Box>
                    <Box className="wallet-lrow">
                        <Box className="wallet-heading" sx={{ fontWeight: "bold" }}>
                            Resources
                        </Box>
                        <Box className="wallet-heading" sx={{ fontWeight: "bold", pl: 0 }}>
                            Last fronzen time
                        </Box>
                        <Box className="wallet-p" sx={{ fontWeight: "100" }}>
                            Recieving Time
                        </Box>
                        <Box className="wallet-heading" sx={{ fontWeight: "bold" }}>
                            Amount Time
                        </Box>
                    </Box>
                    <Box className="wallet-lrow graycolor">
                        <Box className="wallet-heading" sx={{ fontWeight: "bold" }}>
                        </Box>
                        <Box className="wallet-heading" sx={{ fontWeight: "100", pl: 0 }}>
                            2022-07-08
                        </Box>
                        <Box className="wallet-p" sx={{ fontWeight: "100" }}>
                            34534httnggnv5tn5t45t45tj5
                        </Box>
                        <Box className="wallet-heading" sx={{ fontWeight: "100" }}>
                            10
                        </Box>
                    </Box>
                    <Box className="wallet-row">
                        <Box className="wallet-heading" sx={{ fontWeight: "bold" }}>
                            Description
                        </Box>
                        <Box className="wallet-p" sx={{ fontWeight: "100" }}>

                        </Box>
                    </Box>
                    <Box className="wallet-row">
                        <Box className="wallet-heading" sx={{ fontWeight: "bold" }}>
                            API Token
                        </Box>
                        <Box className="wallet-p" sx={{ fontWeight: "100" }}>
                            ert45tj5444v5jt35j4454
                        </Box>
                    </Box>
                    <Box className="wallet-row">
                        <Box className="wallet-heading" sx={{ fontWeight: "bold" }}>
                            Transaction Category
                        </Box>
                        <Box className="wallet-p" sx={{ fontWeight: "100" }}>

                        </Box>
                    </Box>
                </Box>
            </Card>

            {/* ---- RISK CONTROL CONFIG CARD ---- */}
            <Card sx={{ borderRadius: "10px", mb: 4 }}>
                <Box
                    className="wallet-title"
                    sx={{
                        backgroundColor: "#0C2D57",
                        p: 1.5,
                        color: "#fff",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                    }}
                >
                    <Typography fontWeight={600}>Wallet Details</Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                    <Box className="div-container">
                        <Box className="div-con-h">
                            Withdraw amount limitation
                        </Box>
                        <Box className="div-con-con">
                            <Box className="div-con-con-h">
                                Schedule
                            </Box>
                            <Box className="div-con-con-input">
                                <TextField label="Email" variant="outlined" />
                                <TextField label="Password" type="password" variant="outlined" />
                            </Box>
                        </Box>
                    </Box>
                    <Box className="withdraw">
                        <Box className="withdraw-container">
                            <Typography variant="h2" className="withdraw-heading" fontWeight={"bold"} sx={{ color: "#212121" }}>
                                Total Withdraw amount limit
                            </Typography>
                            <input placeholder="1000"></input>
                        </Box>
                    </Box>
                </Box>
            </Card>
        </Container >
    );
};

export default Home;
