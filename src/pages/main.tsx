import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
  Button,
  TextField,
  Chip,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
  Alert,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  FormControlLabel,
  Rating,
  Avatar,
  Badge,
  Divider,
  Stack,
  Fab,
  Tooltip,
  LinearProgress,
  CircularProgress,
  Slider,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import {
  ExpandMore,
  Menu as MenuIcon,
  Home,
  Code,
  Architecture,
  Speed,
  CheckCircle,
  Star,
  Lightbulb,
  Rocket,
  Build,
  TrendingUp,
  Security,
  Devices,
  Palette,
  Layers,
  Widgets,
  ViewQuilt,
  DesignServices,
  IntegrationInstructions,
  AutoAwesome,
  Bolt,
  Cloud,
  Storage,
  Sync,
  Settings,
  Help,
  Info,
  Warning,
  Error,
  Add,
  Delete,
} from "@mui/icons-material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const HomePage = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [tabValue, setTabValue] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [rating, setRating] = useState(4);
  const [switchState, setSwitchState] = useState(true);
  const [sliderValue, setSliderValue] = useState(30);
  const [selectValue, setSelectValue] = useState('');

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navigation Bar */}
      <AppBar position="static" sx={{ bgcolor: '#1976d2' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MUI Documentation & Examples
          </Typography>
          <Button color="inherit">Get Started</Button>
        </Toolbar>
      </AppBar>

      {/* Navigation Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Code />
          </ListItemIcon>
          <ListItemText>Components</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Architecture />
          </ListItemIcon>
          <ListItemText>Architecture</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
      </Menu>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
            Material-UI (MUI)
          </Typography>
          <Typography variant="h5" paragraph sx={{ mb: 4, opacity: 0.9 }}>
            The React UI library you always wanted. Build beautiful, accessible, and performant user interfaces with ease.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="contained" size="large" sx={{ bgcolor: 'white', color: '#1976d2' }}>
              Get Started
            </Button>
            <Button variant="outlined" size="large" sx={{ borderColor: 'white', color: 'white' }}>
              View Documentation
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Introduction Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" gutterBottom fontWeight="bold" textAlign="center">
            What is MUI?
          </Typography>
          <Typography variant="body1" paragraph textAlign="center" sx={{ fontSize: '1.2rem', maxWidth: '800px', mx: 'auto' }}>
            Material-UI (MUI) is a comprehensive React component library that implements Google's Material Design. 
            It provides a wide range of pre-built, customizable components that help developers create professional 
            and responsive user interfaces quickly and efficiently.
          </Typography>
        </Box>

        {/* Key Features */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: '#1976d2', mx: 'auto', mb: 2, width: 56, height: 56 }}>
                  <Widgets />
                </Avatar>
                <Typography variant="h5" component="h2" gutterBottom>
                  Rich Component Library
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Over 50 pre-built components including buttons, forms, navigation, data display, and more.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: '#388e3c', mx: 'auto', mb: 2, width: 56, height: 56 }}>
                  <Palette />
                </Avatar>
                <Typography variant="h5" component="h2" gutterBottom>
                  Customizable Design
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Easily customize colors, typography, spacing, and more with powerful theming system.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: '#f57c00', mx: 'auto', mb: 2, width: 56, height: 56 }}>
                  <Devices />
                </Avatar>
                <Typography variant="h5" component="h2" gutterBottom>
                  Responsive Design
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Built-in responsive grid system and components that work seamlessly across all devices.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Component Examples */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" gutterBottom fontWeight="bold" textAlign="center" mb={4}>
            Interactive Component Examples
          </Typography>
          
          <Tabs value={tabValue} onChange={handleTabChange} centered sx={{ mb: 4 }}>
            <Tab label="Basic Components" />
            <Tab label="Forms & Input" />
            <Tab label="Feedback & Navigation" />
            <Tab label="Advanced Components" />
          </Tabs>

          <TabPanel value={tabValue} index={0}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>Buttons</Typography>
                  <Stack direction="row" spacing={2} flexWrap="wrap">
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                    <Button variant="text">Text</Button>
                    <Button variant="contained" disabled>Disabled</Button>
                    <Button variant="contained" startIcon={<Star />}>With Icon</Button>
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>Chips</Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    <Chip label="Default" />
                    <Chip label="Primary" color="primary" />
                    <Chip label="Secondary" color="secondary" />
                    <Chip label="Success" color="success" />
                    <Chip label="Error" color="error" />
                    <Chip label="Deletable" onDelete={() => {}} />
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>Avatars & Badges</Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar>U</Avatar>
                    <Avatar sx={{ bgcolor: '#1976d2' }}>JD</Avatar>
                    <Avatar src="/static/images/avatar/1.jpg" />
                    <Badge badgeContent={4} color="primary">
                      <Avatar sx={{ bgcolor: '#ff5722' }}>N</Avatar>
                    </Badge>
                    <Badge badgeContent={99} color="error">
                      <Avatar sx={{ bgcolor: '#4caf50' }}>M</Avatar>
                    </Badge>
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>Rating</Typography>
                  <Stack spacing={2}>
                    <Rating name="simple-controlled" value={rating} onChange={(event, newValue) => {
                      if (newValue !== null) {
                        setRating(newValue);
                      }
                    }} />
                    <Rating name="read-only" value={3} readOnly />
                    <Rating name="disabled" value={2} disabled />
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>Text Fields</Typography>
                  <Stack spacing={2}>
                    <TextField label="Standard" variant="standard" />
                    <TextField label="Outlined" variant="outlined" />
                    <TextField label="Filled" variant="filled" />
                    <TextField label="Disabled" disabled />
                    <TextField label="With Helper Text" helperText="This is helper text" />
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>Select & Switch</Typography>
                  <Stack spacing={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectValue}
                        label="Age"
                        onChange={(e) => setSelectValue(e.target.value)}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControlLabel
                      control={<Switch checked={switchState} onChange={(e) => setSwitchState(e.target.checked)} />}
                      label="Toggle Switch"
                    />
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Default Checked"
                    />
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={tabValue} index={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>Progress Indicators</Typography>
                  <Stack spacing={2}>
                    <LinearProgress />
                    <LinearProgress variant="determinate" value={60} />
                    <CircularProgress />
                    <CircularProgress variant="determinate" value={75} />
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>Alerts</Typography>
                  <Stack spacing={2}>
                    <Alert severity="success">This is a success alert!</Alert>
                    <Alert severity="info">This is an info alert!</Alert>
                    <Alert severity="warning">This is a warning alert!</Alert>
                    <Alert severity="error">This is an error alert!</Alert>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={tabValue} index={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>Slider</Typography>
                  <Stack spacing={2}>
                    <Typography>Value: {sliderValue}</Typography>
                    <Slider
                      value={sliderValue}
                      onChange={(e, newValue) => setSliderValue(newValue as number)}
                      valueLabelDisplay="auto"
                      min={0}
                      max={100}
                    />
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>Floating Action Button</Typography>
                  <Box sx={{ position: 'relative', height: 100 }}>
                    <Fab color="primary" aria-label="add">
                      <Add />
                    </Fab>
                    <Tooltip title="Delete" placement="right">
                      <Fab color="secondary" sx={{ ml: 2 }}>
                        <Delete />
                      </Fab>
                    </Tooltip>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </TabPanel>
        </Box>

        {/* Modular Approach Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" gutterBottom fontWeight="bold" textAlign="center" mb={4}>
            Modular & Scalable Approach
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography variant="h6">Component-Based Architecture</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    MUI follows a component-based architecture that allows you to build reusable UI elements. 
                    Each component is self-contained, maintainable, and can be easily composed to create complex interfaces.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography variant="h6">Theme Customization</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Create consistent designs across your application with MUI's powerful theming system. 
                    Customize colors, typography, spacing, and more to match your brand identity.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography variant="h6">Responsive Grid System</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Build responsive layouts with MUI's 12-column grid system. Create mobile-first designs 
                    that automatically adapt to different screen sizes and devices.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography variant="h6">Tree Shaking Support</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Only include the components you use in your bundle. MUI supports tree shaking, 
                    ensuring your application stays lean and performant.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography variant="h6">Accessibility First</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    All MUI components are built with accessibility in mind, following WAI-ARIA standards 
                    and providing excellent keyboard navigation and screen reader support.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography variant="h6">TypeScript Support</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Full TypeScript support with comprehensive type definitions. Get autocompletion, 
                    type checking, and better developer experience in your IDE.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Box>

        {/* Best Practices */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" gutterBottom fontWeight="bold" textAlign="center" mb={4}>
            Best Practices
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <ListItemIcon sx={{ mb: 2 }}>
                    <Architecture sx={{ fontSize: 40, color: '#1976d2' }} />
                  </ListItemIcon>
                  <Typography variant="h6" gutterBottom>
                    Consistent Design System
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Use MUI's theme system to maintain consistency across your application. 
                    Define your design tokens once and reuse them throughout.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <ListItemIcon sx={{ mb: 2 }}>
                    <Speed sx={{ fontSize: 40, color: '#388e3c' }} />
                  </ListItemIcon>
                  <Typography variant="h6" gutterBottom>
                    Performance Optimization
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Leverage lazy loading, code splitting, and tree shaking to keep your application 
                    fast and efficient, even as it grows.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <ListItemIcon sx={{ mb: 2 }}>
                    <Security sx={{ fontSize: 40, color: '#f57c00' }} />
                  </ListItemIcon>
                  <Typography variant="h6" gutterBottom>
                    Accessibility & SEO
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Ensure your application is accessible to all users and follows SEO best practices 
                    with MUI's built-in accessibility features.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', py: 6, bgcolor: '#f5f5f5', borderRadius: 2 }}>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Ready to Build Amazing UIs?
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 4 }}>
            Start using MUI today and create beautiful, responsive, and accessible user interfaces with ease.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="contained" size="large" onClick={() => setDialogOpen(true)}>
              View Documentation
            </Button>
            <Button variant="outlined" size="large" onClick={() => setSnackbarOpen(true)}>
              Show Examples
            </Button>
          </Stack>
        </Box>
      </Container>

      {/* Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>MUI Documentation</DialogTitle>
        <DialogContent>
          <Typography>
            Visit the official MUI documentation for comprehensive guides, API references, 
            and examples to help you build amazing user interfaces.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Close</Button>
          <Button variant="contained" onClick={() => window.open('https://mui.com/', '_blank')}>
            Visit MUI.com
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message="More examples available in the documentation!"
        action={
          <Button color="secondary" size="small" onClick={() => setSnackbarOpen(false)}>
            Dismiss
          </Button>
        }
      />
    </Box>
  );
};

export default HomePage;
