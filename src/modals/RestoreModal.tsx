

import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import React from 'react';

interface RestoreModalProps {
    open: boolean;       // Type for open prop
    onClose: () => void; // Type for onClose prop
}

const RestoreModal: React.FC<RestoreModalProps> = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            {/* Header with title and close icon */}
            <DialogTitle>
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
            </DialogTitle>

            {/* Image, Main Heading, and Subtitle */}
            <DialogContent sx={{ textAlign: 'center' }}>
                <Box
                    component="img"
                    src="../../public/Imgs/Restore.png"
                    alt="Change Password"
                    sx={{
                        width: '260px',
                        height: '170px',
                        margin: '0 auto',
                    }}
                />

                <Typography sx={{ marginTop: 2, fontSize: '24px', fontWeight: '700' }}>
                    Restore File?
                </Typography>

                <Typography variant="body1" sx={{ marginBottom: 3, maxWidth: '360px', mx: 'auto' }}>
                    Are you sure you want to restore the following file?
                </Typography>
            </DialogContent>

            {/* Action Buttons */}
            <Box
                sx={{
                    display: 'flex',
                    gap: '16px',
                    paddingX: '20px',
                    paddingBottom: '20px'
                }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Restore
                </Button>
                <Button
                    variant="outlined"
                    fullWidth
                    onClick={onClose}
                    sx={{
                        borderColor: '#D8DBDD',
                        color: '#03111E',
                        paddingY: '12px'
                    }}
                >
                    Cancel
                </Button>
            </Box>
        </Dialog>
    );
};

export default RestoreModal;
