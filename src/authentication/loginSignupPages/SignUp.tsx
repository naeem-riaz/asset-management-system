
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Checkbox, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField } from '@mui/material';
import React, { useState } from 'react';
import LayoutLoginSignUp from './LayoutLoginSignUp';

const SignUp: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    return (
        <LayoutLoginSignUp
            heading="Welcome Back to Your Cloud Hub!"
            subtitle="Create your account to revolutionize the way you manage your digital assets."
            buttonText="Log In"
            signInWithText="Sign in with Google"
            signUpLinkText="Sign Up"
            signUpLinkHref="/signup"
        >
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box display='flex' gap={2}>
                    <TextField
                        label="First Name"
                        type="text"
                        variant="outlined"
                        fullWidth
                        style={{
                            backgroundColor: "white",
                            borderRadius: '8px',
                            marginBottom: '8px'
                        }}
                    />
                    <TextField
                        label="Last Name"
                        type="text"
                        variant="outlined"
                        fullWidth
                        style={{
                            backgroundColor: "white",
                            borderRadius: '8px',
                            marginBottom: '8px'
                        }}
                    />
                </Box>
                <TextField
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    fullWidth
                    style={{
                        backgroundColor: "white",
                        borderRadius: '8px',
                        marginBottom: '8px'
                    }}
                />
                <FormControl
                    fullWidth
                    variant="outlined"
                    style={{
                        backgroundColor: "white",
                        borderRadius: '8px',
                    }}
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
                        href="#"
                        style={{
                            color: "#0071EB",
                            fontSize: "14px",
                            fontWeight: '600'
                        }}
                    >
                        Forgot Password
                    </Link>
                </Box>
            </Box>
        </LayoutLoginSignUp>
    );
};

export default SignUp;
