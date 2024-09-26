import React from 'react';
import { Box, Button, Modal, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface AuthenticationModalProps {
    open: boolean;
    onClose: () => void;
    imageSrc: string;
    heading: string;
    title: string;
    children?: React.ReactNode;
    buttonText: string;
    onButtonClick?: () => void;
}

const AuthenticationModal: React.FC<AuthenticationModalProps> = ({
    open,
    onClose,
    imageSrc,
    heading,
    title,
    children,
    buttonText,
    onButtonClick,
}) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    borderRadius: '10px',
                    boxShadow: 24,
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <IconButton
                    sx={{ position: 'absolute', top: 8, right: 8 }}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
                <Box sx={{ mb: 2 }}>
                    <img src={imageSrc} alt="Authentication" width="100" />
                </Box>
                <Box width={"100%"}>
                    <Typography variant="h4" sx={{ mb: 1 }}>
                        {heading}
                    </Typography>

                    <Typography variant="subtitle1" sx={{ mb: 2 }}>
                        {title}
                    </Typography>
                    <Box >
                        {children}
                    </Box>

                    <Button
                        variant="contained"
                        fullWidth
                        style={{ padding: "10px 0" }}
                        onClick={onButtonClick}
                    >
                        {buttonText}
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default AuthenticationModal;
