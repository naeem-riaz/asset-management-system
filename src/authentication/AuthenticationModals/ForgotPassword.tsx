import React from 'react';
import { TextField } from "@mui/material";
import AuthenticationModal from "./AuthenticationModal";

interface ForgotPasswordProps {
    open: boolean;
    handleCloseForgotPasswordModal: () => void;
    handleOpenOtpVerificationModal: () => void; // Add this line
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({
    open,
    handleCloseForgotPasswordModal,
    handleOpenOtpVerificationModal
}) => {
    return (
        <AuthenticationModal
            open={open}
            onClose={handleCloseForgotPasswordModal}
            imageSrc="../../../public/Imgs/ForgotPassword.png"
            heading="Forgot password"
            title="Please provide the email address linked to your account."
            buttonText="Next"
            onButtonClick={handleOpenOtpVerificationModal}
        >
            <TextField
                label="Email Address"
                type="email"
                variant="outlined"
                fullWidth
                sx={{ backgroundColor: "white", borderRadius: '8px', mb: 2 }}
            />
        </AuthenticationModal>
    );
}

export default ForgotPassword;
