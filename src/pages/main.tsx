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

                <Container>
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
                            Balance
                        </Box>
                        <Box className="wallet-p" sx={{ fontWeight: "100" }}>
                            34
                        </Box>
                    </Box>
                </Container>
            </Card>

            {/* ---- RISK CONTROL CONFIG CARD ---- */}
            <Card sx={{ borderRadius: "10px" }}>
                <Box
                    sx={{
                        backgroundColor: "#0C2D57",
                        p: 2,
                        color: "#fff",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                    }}
                >
                    <Typography fontWeight={600}>Edit Risk Control Config</Typography>
                </Box>

                <CardContent sx={{ backgroundColor: "#fff" }}>
                    {/* --- Withdraw amount limitation --- */}
                    <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        sx={{ mb: 2, color: "#222" }}
                    >
                        Withdraw amount limitation
                    </Typography>

                    <Grid container spacing={2} sx={{ mb: 4 }}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography fontSize={13} sx={{ mb: 0.5 }}>
                                Schedule
                            </Typography>
                            <TextField
                                fullWidth
                                size="small"
                                value="08:00 (00:00 UTC) - 19:00 (11:00 UTC)"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography fontSize={13} sx={{ mb: 0.5 }}>
                                Total Withdraw amount limit
                            </Typography>
                            <TextField fullWidth size="small" value="1000" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography fontSize={13} sx={{ mb: 0.5 }}>
                                Pre-user Withdraw amount limit
                            </Typography>
                            <TextField fullWidth size="small" value="50" />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            sx={{ display: "flex", alignItems: "flex-end" }}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#0C2D57",
                                    "&:hover": { backgroundColor: "#0a2342" },
                                    textTransform: "none",
                                }}
                            >
                                Save
                            </Button>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    {/* --- Frequency per Address / Frequency per User --- */}
                    <Grid container spacing={3}>
                        {/* LEFT */}
                        <Grid item xs={12} md={6}>
                            <Typography fontWeight={600} sx={{ mb: 1 }}>
                                Frequency per address
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Select fullWidth size="small" value="20 TRX">
                                        <MenuItem value="20 TRX">20 TRX withdrawals</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        size="small"
                                        fullWidth
                                        value="20"
                                        label="Minutes"
                                    />
                                </Grid>
                            </Grid>

                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Disable"
                                sx={{ mt: 2 }}
                            />
                            <Typography
                                sx={{
                                    color: "red",
                                    fontSize: 12,
                                    mt: 1,
                                    lineHeight: 1.4,
                                }}
                            >
                                A Risk Control Policy Was Not Enabled. If The Wallet Was Under
                                Risk Controlled, The Deposit Callback Will Still Not Send Back.
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    mt: 2,
                                    backgroundColor: "#0C2D57",
                                    "&:hover": { backgroundColor: "#0a2342" },
                                    textTransform: "none",
                                }}
                            >
                                Save
                            </Button>
                        </Grid>

                        {/* RIGHT */}
                        <Grid item xs={12} md={6}>
                            <Typography fontWeight={600} sx={{ mb: 1 }}>
                                Frequency per user
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Select fullWidth size="small" value="20 TRX">
                                        <MenuItem value="20 TRX">20 TRX withdrawals</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        size="small"
                                        fullWidth
                                        value="20"
                                        label="Minutes"
                                    />
                                </Grid>
                            </Grid>

                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Disable"
                                sx={{ mt: 2 }}
                            />
                            <Typography
                                sx={{
                                    color: "red",
                                    fontSize: 12,
                                    mt: 1,
                                    lineHeight: 1.4,
                                }}
                            >
                                Withdrawals From Same User Within Duration Exceeds Threshold
                                Will Be Risk Controlled. The Withdraw Will Be Suspended.
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    mt: 2,
                                    backgroundColor: "#0C2D57",
                                    "&:hover": { backgroundColor: "#0a2342" },
                                    textTransform: "none",
                                }}
                            >
                                Save
                            </Button>
                        </Grid>
                    </Grid>

                    <Divider sx={{ my: 4 }} />

                    {/* --- Single Withdrawal / User ID Required --- */}
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Typography fontWeight={600} sx={{ mb: 1 }}>
                                Single - withdrawal proportion
                            </Typography>
                            <TextField fullWidth size="small" value="50 %" />
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Disable"
                                sx={{ mt: 2 }}
                            />
                            <Typography
                                sx={{ color: "red", fontSize: 12, mt: 1, lineHeight: 1.4 }}
                            >
                                Wallet Withdrawals Will Be Risk Controlled When Single Withdrawal
                                Exceeds Proportion Of Wallet Balance. All Withdrawals Of This
                                Wallet Will Be Suspended.
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    mt: 2,
                                    backgroundColor: "#0C2D57",
                                    "&:hover": { backgroundColor: "#0a2342" },
                                    textTransform: "none",
                                }}
                            >
                                Save
                            </Button>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography fontWeight={600} sx={{ mb: 1 }}>
                                User ID Required
                            </Typography>
                            <TextField fullWidth size="small" value="User_ID is required" />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Disable"
                                sx={{ mt: 2 }}
                            />
                            <Typography
                                sx={{ color: "red", fontSize: 12, mt: 1, lineHeight: 1.4 }}
                            >
                                Wallet Withdrawals Will Be Risk Controlled When Single Withdrawal
                                Request Doesn’t Contain ‘User_ID’ Field. All Withdrawals Of This
                                Wallet Will Be Suspended.
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    mt: 2,
                                    backgroundColor: "#0C2D57",
                                    "&:hover": { backgroundColor: "#0a2342" },
                                    textTransform: "none",
                                }}
                            >
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container >
    );
};

export default Home;
