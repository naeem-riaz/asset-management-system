import CloseIcon from '@mui/icons-material/Close';
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    IconButton,
    Typography
} from '@mui/material';
import React from 'react';

interface SuccessfullModaProps {
    open: boolean;
    onClose: () => void;
}

const SuccessfullModa: React.FC<SuccessfullModaProps> = ({ open, onClose }) => {

    return (
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
                <Typography sx={{ marginTop: 2, fontSize: '24px', fontWeight: '700', textAlign: 'center' }}>
                    Your password has been changed Successfully.
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 3, textAlign: 'center', maxWidth: '360px', mx: 'auto' }}>
                    Please confirm your current password and create a new password.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Login
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default SuccessfullModa;
