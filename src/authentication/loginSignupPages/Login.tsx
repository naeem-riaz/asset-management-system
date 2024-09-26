import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Checkbox, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField } from '@mui/material';
import React, { useState } from 'react';

import LayoutLoginSignUp from '../loginSignupPages/LayoutLoginSignUp';
import ForgotPassword from '../AuthenticationModals/ForgotPassword';
import OtpVerification from '../AuthenticationModals/OtpVerification';
import UpdatePasswordModal from '../AuthenticationModals/UpdatePassword';
// import AuthenticationModal from '../AuthenticationModals/AuthenticationModal';

const LoginPage: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = React.useState(true);
    const [openForgotPasswordModal, setOpenForgotPasswordModal] = useState(false);
    const [openOtpVerificationModal, setOpenOtpVerificationModal] = useState(false);
    const [openUpdatePasswordModal, setOpenUpdatePasswordModal] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const handleOpenForgotPasswordModal = () => {
        setOpenForgotPasswordModal(true);
    };

    const handleCloseForgotPasswordModal = () => {
        setOpenForgotPasswordModal(false);
    };

    const handleOpenOtpVerificationModal = () => {
        setOpenForgotPasswordModal(false);
        setOpenOtpVerificationModal(true);
    };

    const handleCloseOtpVerificationModal = () => {
        setOpenOtpVerificationModal(false);
    };

    const handleOpenUpdatePasswordModal = () => {
        setOpenOtpVerificationModal(false);
        setOpenUpdatePasswordModal(true);
    };

    const handleCloseUpdatePasswordModal = () => {
        setOpenUpdatePasswordModal(false);
    };
    return (
        <LayoutLoginSignUp
            heading="Welcome Back to Your Cloud Hub!"
            subtitle="Sign in to access your cloud storage and collaborate seamlessly."
            buttonText="Log In"
            signInWithText="Sign in with Google"
            signUpLinkText="Sign Up"
            signUpLinkHref="/signup"
        >
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column' }}>
                <TextField
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    fullWidth
                    sx={{ backgroundColor: "white", borderRadius: '8px', mb: 2 }}
                />
                <FormControl
                    fullWidth
                    variant="outlined"
                    sx={{ backgroundColor: "white", borderRadius: '8px' }}
                >
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <Box justifyContent="space-between" alignItems={"center"} display={"flex"}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        }
                        label="Remember Me"
                    />
                    <Link
                        onClick={handleOpenForgotPasswordModal}
                        href="#"
                        sx={{ color: "#0071EB", fontSize: "14px", fontWeight: '600' }}
                    >
                        Forgot Password
                    </Link>
                </Box>
            </Box>

            <ForgotPassword
                open={openForgotPasswordModal}
                handleCloseForgotPasswordModal={handleCloseForgotPasswordModal}
                handleOpenOtpVerificationModal={handleOpenOtpVerificationModal}
            />
            <OtpVerification
                open={openOtpVerificationModal}
                handleCloseOptModal={handleCloseOtpVerificationModal}
                handleOpenUpdatePasswordModal={handleOpenUpdatePasswordModal}
            />
            <UpdatePasswordModal
                open={openUpdatePasswordModal}
                handleCloseUpdatePasswordModal={handleCloseUpdatePasswordModal}
            />

        </LayoutLoginSignUp>
    );
};

export default LoginPage;
