import CloseIcon from '@mui/icons-material/Close';
import { Avatar, Box, Button, Dialog, DialogContent, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import React from 'react';
import bgImage from '../../../../public/Imgs/ProfileModalBg.png';

interface ProfileEditModalProps {
    open: boolean;
    onClose: () => void;
}

// Create the ProfileEditModal component
const ProfileEditModal: React.FC<ProfileEditModalProps> = ({ open, onClose }) => {

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth sx={{ borderRadius: "10px" }}>
            <DialogContent sx={{ padding: 0, position: 'relative', borderRadius: "4px" }}>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        color: 'white',
                        zIndex: 1,
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <Box
                    sx={{
                        height: '130px',
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                    }}
                />
                <Avatar
                    alt="User"
                    src="https://via.placeholder.com/150"
                    sx={{
                        width: 80,
                        height: 80,
                        position: 'absolute',
                        top: '90px',
                        left: '30px',
                        border: '1px solid white',
                        borderRadius: "6px",
                    }}
                />
                <Box
                    sx={{
                        marginTop: '20px',
                        backgroundColor: 'white',
                        padding: '30px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '16px',
                        }}
                    >
                        <TextField
                            fullWidth
                            label="First Name"
                            variant="outlined"
                            sx={{ marginBottom: '20px' }}
                        />
                        <TextField
                            fullWidth
                            label="Last Name"
                            variant="outlined"
                            sx={{ marginBottom: '20px' }}
                        />
                    </Box>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="change email"
                                        edge="end"
                                        sx={{
                                            fontSize: '16px',
                                            color: '#0071EB'
                                        }}
                                    >
                                        Change
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Email"
                        />
                    </FormControl>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '16px',
                            paddingTop: '30px'
                        }}
                    >
                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{
                                borderColor: '#D8DBDD',
                                color: '#03111E',
                                paddingY: '12px'
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth

                        >
                            Save
                        </Button>

                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default ProfileEditModal;
