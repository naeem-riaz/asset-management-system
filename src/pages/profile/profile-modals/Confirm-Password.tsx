import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    IconButton,
    Box,
    Typography,
    TextField,
    Button,
    InputAdornment,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SuccessfullModa from './SuccessfullModa';

interface ChangePasswordModalProps {
    open: boolean;
    onClose: () => void;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({ open, onClose }) => {
    // State to control the open/close of the modal
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    // Function to open the modal
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const [currentPassword, setCurrentPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>(''); // Added confirm password state

    const [showCurrentPassword, setShowCurrentPassword] = useState<boolean>(false);
    const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false); // Added confirm password visibility toggle

    return (
        <>
            <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
                <DialogContent sx={{ padding: 3, textAlign: 'center' }}>
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            color: '#000',
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Box
                        component="img"
                        src="../../../../public/Imgs/Change-password-modal-pic.png"
                        alt="Change Password"
                        sx={{
                            width: '260px',
                            height: '170px',
                            margin: '0 auto',
                            display: 'block',
                        }}
                    />
                    {/* Main Heading */}
                    <Typography sx={{ marginTop: 2, fontSize: '24px', fontWeight: '700', textAlign: 'center' }}>
                        Change Password
                    </Typography>

                    {/* Subtitle */}
                    <Typography variant="body1" sx={{ marginBottom: 3, textAlign: 'center', maxWidth: '360px', mx: 'auto' }}>
                        Please confirm your current password and create a new password.
                    </Typography>

                    {/* Current Password Input */}
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            label="Current Password"
                            variant="outlined"
                            type={showCurrentPassword ? 'text' : 'password'}
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowCurrentPassword((prev) => !prev)}
                                            edge="end"
                                        >
                                            {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>

                    {/* New Password Input */}
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            label="New Password"
                            variant="outlined"
                            type={showNewPassword ? 'text' : 'password'}
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowNewPassword((prev) => !prev)}
                                            edge="end"
                                        >
                                            {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>

                    {/* Confirm Password Input */}
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            label="Confirm Password"
                            variant="outlined"
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                                            edge="end"
                                        >
                                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>

                    {/* Buttons */}
                    <Box display="flex" gap='16px' justifyContent="space-between" mt={3}>
                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{
                                borderColor: '#D8DBDD',
                                color: '#03111E',
                                paddingY: '12px'
                            }}
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleOpenModal}
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Change Password
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
            <SuccessfullModa
                open={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
};

export default ChangePasswordModal;
