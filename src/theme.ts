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
            main: '#ed6c02',
        },
        info: {
            main: '#0288d1',
        },
    },
    typography: {
        fontFamily: 'Poppins, sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 600,
            color: '#FF0000',
        },
        h2: {
            fontSize: '24px',
            fontWeight: 600,
        },
        h3: {
            fontSize: '20px',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
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
            sm: 640,      // 'tablet' breakpoint
            md: 1024,     // 'laptop' breakpoint
            lg: 1200,     // 'desktop' breakpoint
            xl: 1536,
        },
    },
});
export default theme;