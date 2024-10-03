import { Box, Typography } from '@mui/material';
import React from 'react';
import OverviewStorageCardsGrid from './OverviewStorageCardsLayout';
import OverviewStoragetImgs from './OverviewStoragetImgsLayout';
import ResponsiveTable from '../CustomTable';

const DashBoard: React.FC = () => {
    // Define headers for the table
    const headers = ['Name', 'Last Modified', 'Link', 'File Size'];

    // Define paginated items (mock data)
    const paginatedItems = [
        {
            id: 1,
            name: 'Document 1',
            lastModified: '2024-09-25',
            link: 'http://example.com/doc1',
            fileSize: '1.2 MB',
        },
        {
            id: 2,
            name: 'Document 2',
            lastModified: '2024-09-26',
            link: 'http://example.com/doc2',
            fileSize: '2.3 MB',
        },
        {
            id: 3,
            name: 'Document 1',
            lastModified: '2024-09-25',
            link: 'http://example.com/doc1',
            fileSize: '1.2 MB',
        },
        {
            id: 4,
            name: 'Document 2',
            lastModified: '2024-09-26',
            link: 'http://example.com/doc2',
            fileSize: '2.3 MB',
        },


    ];

    return (
        <>
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
            <ResponsiveTable headers={headers} paginatedItems={paginatedItems} />
        </>
    );
};

export default DashBoard;
