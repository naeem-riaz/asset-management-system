import { Box, Typography } from '@mui/material';
import React from 'react';
import OverviewStorageCardsGrid from './OverviewStorageCardsLayout';
import OverviewStoragetImgs from './OverviewStoragetImgsLayout';

const DashBoard: React.FC = () => {
    return (
        <Box
            sx={{
                paddingX: {
                    xs: '10px',
                    sm: '20px',
                    md: '30px'
                }
            }}
        >
            <Typography
                fontSize="20px"
                fontWeight="500"
                paddingTop="20px"
            >
                Overview
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                }}
            >
                <Typography variant='h2'>
                    Overview Storage
                </Typography>
                <OverviewStorageCardsGrid />

                <Typography variant='h2'>
                    Overview Images
                </Typography>
                <OverviewStoragetImgs />

                <Typography variant='h2'>
                    Additional Overview
                </Typography>
            </Box>
        </Box>
    );
};

export default DashBoard;
