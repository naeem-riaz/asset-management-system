import { Box, Button, Divider, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface LayoutLoginSignUpProps {
    heading: string;
    subtitle: string;
    buttonText: string;
    signInWithText: string;
    signUpLinkText: string;
    signUpLinkHref: string;
    children?: React.ReactNode;
}

const LayoutLoginSignUp: React.FC<LayoutLoginSignUpProps> = ({
    heading,
    subtitle,
    buttonText,
    signInWithText,
    children
}) => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/signup');
    };
    return (
        <Grid
            container
            display='flex'
            sx={{ minHeight: '100vh', paddingX: '150px' }}
        >
            <img
                src='/Imgs/logo.png'
                alt='Logo'
                width='200px'
                height='45px'
                style={{ marginTop: '20px' }}
            />
            <Box display='flex' alignItems={"center"}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', }}>
                    <Box>
                        <Typography
                            gutterBottom
                            style={{
                                fontSize: '24px',
                                fontWeight: '700'
                            }}
                        >
                            {heading}
                        </Typography>
                        <Typography
                            gutterBottom
                            style={{
                                fontSize: '20px',
                                fontWeight: '500'
                            }}
                        >
                            {subtitle}
                        </Typography>
                        <Typography
                            gutterBottom
                            style={{
                                fontSize: '16px',
                                fontWeight: '400',
                                marginTop: "20px"
                            }}
                        >
                            Please enter your login details below!
                        </Typography>

                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{
                                marginTop: "5px",
                                border: '1px solid #D8DBDD',
                                backgroundColor: 'white',
                                color: '#03111E',
                                fontSize: '16px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 1,
                            }}
                        >
                            <img src='../../../public/Imgs/google.png' style={{ height: "24px" }} />
                            {signInWithText}
                        </Button>
                        <Divider sx={{ my: 1 }}>or</Divider>
                        {children}
                        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                            {buttonText}
                        </Button>
                        <Typography
                            variant="body2"
                            sx={{ mt: 1, color: '#9EA6A9' }}
                        >
                            Don’t have an account?
                            <Link
                                onClick={handleNavigation}
                                style={{ color: "#0071EB", marginLeft: "8px", cursor: 'pointer' }}
                            >
                                Sign Up
                            </Link>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        src='/Imgs/LogingSignupImg.png'
                        alt='Login Signup'
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </Grid>
            </Box>
        </Grid>
    );
};

export default LayoutLoginSignUp;
