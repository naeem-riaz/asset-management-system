import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Badge, Box, IconButton, InputBase, Paper } from '@mui/material';
import React from 'react';


const Navbar: React.FC = () => {

    return (
        <>

            <Box
                sx={{
                    display: 'flex',
                    gap: '16px',
                    width: '100%',
                    flexDirection:
                    {
                        xs: 'column',
                        sm: 'row-reverse'
                    }


                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: "4px",
                        alignItems: 'center',
                        justifyContent: {
                            xs: 'flex-end'
                        }
                    }}
                >
                    <Avatar
                        sx={{
                            bgcolor: '#FFBB00',
                            fontSize: "14px",
                            fontWeight: '600',

                        }}
                    >
                        PW
                    </Avatar>
                    <KeyboardArrowDownIcon
                        fontSize='medium'

                        sx={{
                            color: '#9EA6A9',
                            display: {
                                xs: 'none',
                                sm: 'block'
                            }
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        gap: '16px',
                    }}
                >
                    <Paper
                        component="form"
                        sx={{
                            p: '2px 4px',
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid #D8DBDD',
                            borderRadius: "10px",
                            width: {
                                xs: '100%',
                                sm: 300,
                            }
                        }}
                    >
                        <IconButton type="button" sx={{ p: '6px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Paper>

                    <Box
                        sx={{
                            color: '#9EA6A9',
                            border: '1px solid #D8DBDD',
                            borderRadius: "10px"
                        }}
                    >
                        <IconButton size="medium">
                            <Badge>
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                </Box>


            </Box>


        </>
    );
};

export default Navbar;
