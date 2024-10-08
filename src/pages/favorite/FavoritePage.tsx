
import SwapVertIcon from '@mui/icons-material/SwapVert';
import {
    Box,
    Button,
    Typography
} from '@mui/material';

import GridViewIcon from '@mui/icons-material/GridView';
import ResponsiveTable from '../CustomTable';

const buttonStyle = {
    backgroundColor: '#EFF7FF',
    borderRadius: '4px',
    color: '#03111E',
    fontSize: '14px',
    fontWeight: 400,
    padding: '8px',
};


const FavoritePage: React.FC = () => {
    const headers = ['Name', 'Last Modified', 'Link', 'File Size'];

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
        {
            id: 5,
            name: 'Document 1',
            lastModified: '2024-09-25',
            link: 'http://example.com/doc1',
            fileSize: '1.2 MB',
        },
        {
            id: 6,
            name: 'Document 2',
            lastModified: '2024-09-26',
            link: 'http://example.com/doc2',
            fileSize: '2.3 MB',
        },
        {
            id: 7,
            name: 'Document 1',
            lastModified: '2024-09-25',
            link: 'http://example.com/doc1',
            fileSize: '1.2 MB',
        },
        {
            id: 8,
            name: 'Document 2',
            lastModified: '2024-09-26',
            link: 'http://example.com/doc2',
            fileSize: '2.3 MB',
        },
        {
            id: 9,
            name: 'Document 1',
            lastModified: '2024-09-25',
            link: 'http://example.com/doc1',
            fileSize: '1.2 MB',
        },
        {
            id: 10,
            name: 'Document 2',
            lastModified: '2024-09-26',
            link: 'http://example.com/doc2',
            fileSize: '2.3 MB',
        },
    ];

    return (
        <>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    padding: {
                        xs: '10px',
                        sm: '20px',
                        md: '30px'
                    }
                }}
            >
                <Typography variant="h3">
                    Favorite
                </Typography>
                <Box display="flex" gap="12px">
                    <Button
                        size="small"
                        style={buttonStyle}
                        startIcon={<SwapVertIcon fontSize="medium" />}
                    >
                        Sort
                    </Button>
                    <Button
                        size="small"
                        style={buttonStyle}
                        startIcon={<GridViewIcon />}
                    >
                        View
                    </Button>
                </Box>
            </Box>
            <ResponsiveTable headers={headers} paginatedItems={paginatedItems} showMenu={true} />
        </>
    );
};

export default FavoritePage;