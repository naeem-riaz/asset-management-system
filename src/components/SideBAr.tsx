
import {
    Delete,
    ExpandLess,
    ExpandMore,
    FavoriteBorderOutlined,
    FolderOutlined,
    LocalOfferOutlined,
    RestoreOutlined,
    SettingsOutlined,
    Add as AddIcon,
    GridViewOutlined as GridViewOutlinedIcon,
    Menu as MenuIcon,
    Link as LinkSharpIcon,
} from '@mui/icons-material';
import {
    Button,
    IconButton,
    Box,
    Divider,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material';
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const drawerWidth = 240; // Define the drawer width

export default function Sidebar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);
    const [activePath, setActivePath] = React.useState<string>(''); // Track the active path
    const location = useLocation();

    // Set active path based on the current location
    React.useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname]);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleSettingsClick = () => {
        setIsSettingsOpen((prev) => !prev);
    };

    const handleLinkClick = (path: string) => {
        setActivePath(path); // Update the active path on link click
    };

    const listItemStyles = (active: boolean) => ({

        backgroundColor: active ? '#0071EB' : 'transparent',
        borderRadius: '10px',
        color: active ? 'white' : 'inherit',
        '&:hover': {
            backgroundColor: active ? '#0071EB' : 'rgba(0, 113, 235, 0.2)',
        },
    });

    const iconStyles = (active: boolean) => ({
        color: active ? 'white' : 'inherit',
    });

    const drawer = (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingY: '18px',
                }}
            >
                <img src="/Imgs/logo.png" height="34px" width="150px" alt="Logo" />
            </Box>
            <Divider />
            <Button
                component={Link}
                to="/add-new"
                variant="outlined"
                startIcon={<AddIcon />}
                sx={{
                    borderColor: '#EFF7FF',
                    color: '#03111E',
                    background: '#C5E2FF',
                    padding: '4px 12px',
                    margin: '16px',
                    fontSize: '16px',
                    fontWeight: '500',
                    width: 'calc(100% - 32px)',
                }}
            >
                Add New
            </Button>
            <Divider />

            <Box sx={{ display: 'flex', flexDirection: 'column', margin: '16px', gap: '12px' }}>
                <Typography variant="h5">Overview</Typography>
                <ListItemButton
                    component={Link}
                    to="/"
                    sx={{ alignItems: 'center', padding: '8px 12px', gap: '12px', ...listItemStyles(activePath === '/') }}
                    onClick={() => handleLinkClick('/')}
                >
                    <ListItemIcon sx={{ minWidth: 0, ...iconStyles(activePath === '/') }}>
                        <GridViewOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
            </Box>
            <Divider />

            <List sx={{ margin: '16px', padding: 0 }}>
                <Typography variant="h5" sx={{ paddingBottom: '12px' }}>File Manager</Typography>

                {[
                    { to: '/recent', text: 'Recent', icon: <RestoreOutlined /> },
                    { to: '/tags', text: 'Tags', icon: <LocalOfferOutlined /> },
                    { to: '/folders', text: 'Folders', icon: <FolderOutlined /> },
                    { to: '/favorites', text: 'Favorites', icon: <FavoriteBorderOutlined /> },
                    { to: '/trash', text: 'Trash', icon: <Delete /> },
                ].map((item) => (
                    <ListItemButton
                        key={item.to}
                        component={Link}
                        to={item.to}
                        sx={{ alignItems: 'center', padding: '8px 12px', gap: '12px', ...listItemStyles(activePath === item.to) }}
                        onClick={() => handleLinkClick(item.to)}
                    >
                        <ListItemIcon sx={{ minWidth: 0, ...iconStyles(activePath === item.to) }}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItemButton>
                ))}
            </List>

            <Divider />

            {/* Settings Section */}
            <Box sx={{ margin: '16px', padding: 0 }}>
                <Typography variant="h5">Settings</Typography>

                {/* Settings Button */}
                <ListItemButton
                    onClick={handleSettingsClick}
                    sx={{ alignItems: 'center', borderRadius: '4px', padding: '8px 12px', gap: '12px' }}
                >
                    <ListItemIcon sx={{ minWidth: 0 }}>
                        <SettingsOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                    {isSettingsOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                {/* Settings Dropdown List */}
                {isSettingsOpen && (
                    <List component="div" disablePadding>
                        <ListItemButton
                            component={Link}
                            to="/profile"
                            sx={{
                                alignItems: 'center',
                                padding: '8px 12px',
                                gap: '12px',
                                ...listItemStyles(activePath === '/profile'),
                            }}
                            onClick={() => handleLinkClick('/profile')}
                        >
                            <ListItemIcon sx={{ minWidth: 0 }}>
                                <SettingsOutlined sx={{ ...iconStyles(activePath === '/profile') }} />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                        <ListItemButton
                            component={Link}
                            to="/document-links"
                            sx={{
                                alignItems: 'center',
                                padding: '8px 12px',
                                gap: '12px',
                                ...listItemStyles(activePath === '/document-links'),
                            }}
                            onClick={() => handleLinkClick('/document-links')}
                        >
                            <ListItemIcon sx={{ minWidth: 0 }}>
                                <LinkSharpIcon sx={{ ...iconStyles(activePath === '/document-links') }} />
                            </ListItemIcon>
                            <ListItemText primary="Document Links" />
                        </ListItemButton>
                    </List>
                )}
            </Box>
        </div>
    );

    return (
        <Box sx={{ display: 'flex', width: '100%', height: '100vh', }}>
            <Box component="nav" sx={{ flexShrink: { sm: 0 } }} aria-label="mailbox folders">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', sm: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'none', md: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    flexDirection: 'column',
                    padding: '10px',
                    width: {
                        xs: '100%',
                        sm: '100%',
                        md: `calc(100% - ${drawerWidth}px)`,
                    },
                    marginLeft: { md: `${drawerWidth}px` },
                    height: '100vh',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        padding: '12px 16px',
                        position: 'relative',
                        border: '1px solid #D8DBDD',
                        backgroundColor: 'white',
                        borderRadius: '10px',
                    }}
                >
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            display: { sm: 'block', md: 'none' },
                            position: 'absolute',
                            color: '#141B34',
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Navbar />
                </Box>
                <Box
                    sx={{
                        border: '1px solid #D8DBDD',
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        // padding: '12px 16px',
                        height: '86vh',
                        marginTop: '10px'
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}
