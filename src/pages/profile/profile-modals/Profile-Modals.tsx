import CloseIcon from '@mui/icons-material/Close';
import { Avatar, Box, Button, Dialog, DialogContent, Divider, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ProfileEditModal from './ProfileEditModal';
import bgImage from '../../../../public/Imgs/ProfileModalBg.png';
import ChangePasswordModal from './Confirm-Password';

interface ProfileModalProps {
    open: boolean;
    onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ open, onClose }) => {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isChangePasswordModalOpen, setChangePasswordModalOpen] = useState(false);

    const handleOpenEditModal = () => {
        setEditModalOpen(true);
        onClose();
    };

    const handleCloseEditModal = () => {
        setEditModalOpen(false);
    };

    const handleOpenChangePasswordModal = () => {
        setChangePasswordModalOpen(true);
        onClose();
    };

    const handleCloseChangePasswordModal = () => {
        setChangePasswordModalOpen(false);
    };

    return (
        <>
            {/* Main Profile Modal */}
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
                        }}>
                        <Box width='100%'>
                            <Typography variant="h4">Jenny Wilson</Typography>
                            <Typography variant="body2" color='#9EA6A9'>Admin</Typography>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                sx={{
                                    marginTop: '16px',
                                    flexDirection: { xs: 'column', sm: 'row' }
                                }}
                            >
                                <Box display="flex" alignItems="center">
                                    <EmailOutlinedIcon sx={{ marginRight: '8px' }} />
                                    <Typography variant="h5">Email</Typography>
                                </Box>
                                <Typography variant="h5">jenny.wilson@mail.com</Typography>
                            </Box>
                            <Divider sx={{ marginY: '30px' }} />
                            <Box display="flex" flexDirection="column" gap={2}>
                                <Button
                                    variant="text"
                                    startIcon={<EditOutlinedIcon />}
                                    onClick={handleOpenEditModal}
                                    sx={{
                                        justifyContent: 'flex-start',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                >
                                    <Typography variant="h5">Edit Profile</Typography>
                                </Button>
                                <Button
                                    variant="text"
                                    startIcon={<HttpsOutlinedIcon />}
                                    onClick={handleOpenChangePasswordModal}
                                    sx={{
                                        justifyContent: 'flex-start',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                >
                                    <Typography variant="h5">Change Password</Typography>
                                </Button>
                                <Button
                                    variant="text"
                                    startIcon={<LogoutOutlinedIcon sx={{ color: 'red' }} />}
                                    sx={{
                                        justifyContent: 'flex-start',
                                        color: 'red',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                    onClick={() => {
                                        // Handle logout functionality here
                                    }}
                                >
                                    <Typography variant="h5">Logout</Typography>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>

            {/* Edit Profile Modal */}
            <ProfileEditModal open={isEditModalOpen} onClose={handleCloseEditModal} />

            {/* Change Password Modal */}
            <ChangePasswordModal open={isChangePasswordModalOpen} onClose={handleCloseChangePasswordModal} />
        </>
    );
};

export default ProfileModal;
