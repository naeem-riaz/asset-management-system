import React, { useState } from 'react';
import { TextField, IconButton } from "@mui/material";
import AuthenticationModal from "./AuthenticationModal";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface UpdatePasswordModalProps {
    open: boolean;
    handleCloseUpdatePasswordModal: () => void;
}

const UpdatePasswordModal: React.FC<UpdatePasswordModalProps> = ({
    open,
    handleCloseUpdatePasswordModal
}) => {
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleToggleNewPasswordVisibility = () => {
        setShowNewPassword(prev => !prev);
    };

    const handleToggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(prev => !prev);
    };

    return (
        <AuthenticationModal
            open={open}
            onClose={handleCloseUpdatePasswordModal}
            imageSrc="../../../public/Imgs/newpasswordimg.png"
            heading="Update Password"
            title="Please enter and confirm your new password."
            buttonText="Update"
            onButtonClick={() => { }}
        >
            <TextField
                label="New Password"
                type={showNewPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                sx={{ backgroundColor: "white", borderRadius: '8px', mb: 2 }}
                InputProps={{
                    endAdornment: (
                        <IconButton
                            onClick={handleToggleNewPasswordVisibility}
                            edge="end"
                        >
                            {showNewPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    ),
                }}
            />
            <TextField
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                sx={{ backgroundColor: "white", borderRadius: '8px', mb: 2 }}
                InputProps={{
                    endAdornment: (
                        <IconButton
                            onClick={handleToggleConfirmPasswordVisibility}
                            edge="end"
                        >
                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    ),
                }}
            />
        </AuthenticationModal>
    );
}

export default UpdatePasswordModal;
