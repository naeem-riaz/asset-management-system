import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0071EB',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#f50057',
            contrastText: '#ffffff',
        },
        background: {
            default: '#f5f5f5',
            paper: '#ffffff',
        },
        error: {
            main: '#d32f2f',
        },
        success: {
            main: '#2e7d32',

        },
        warning: {
            main: '#FF6B50',
        },
        info: {
            main: '#03111E',

        },
    },
    typography: {
        fontFamily: 'Poppins, sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 600,
            // color: '#FF0000',
        },
        h2: {
            fontSize: '24px',
            fontWeight: 600,
        },
        h3: {
            fontSize: '20px',
            fontWeight: 500,
        },
        h4: {
            fontSize: '18px',
            fontWeight: 600,
        },
        h5: {
            fontSize: '16px',
            fontWeight: 400,
        },
        body1: {
            fontSize: '16px',
            fontWeight: 400,
        },
        body2: {
            fontSize: '12px',
            fontWeight: 400,
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },
    breakpoints: {
        values: {
            xs: 0,        // 'mobile' breakpoint
            sm: 500,      // 'tablet' breakpoint
            md: 1020,     // 'laptop' breakpoint
            lg: 1200,     // 'desktop' breakpoint
            xl: 1536,
        },
    },
});
export default theme;