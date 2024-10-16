import SwapVertIcon from '@mui/icons-material/SwapVert';
import { Box, Button, Typography } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import ResponsiveTable from '../CustomTable';
import EmptyTraspageView from './EmptyTraspageView';

// Interface to define the structure of each item
interface PaginatedItem {
    id: number;
    name: string;
    lastModified: string;
    link: string;
    fileSize: string;
    orignallocation: string;
}

const buttonStyle = {
    backgroundColor: '#EFF7FF',
    borderRadius: '4px',
    color: '#03111E',
    fontSize: '14px',
    fontWeight: 400,
    padding: '8px',
};

const TrashPage: React.FC = () => {
    const headers = ['Name', 'Last Modified', 'Link', 'Orignal location', 'File Size',];
    const paginatedItems: PaginatedItem[] = [
        // {
        //     id: 1,
        //     name: 'Document 1',
        //     lastModified: '2024-09-01T12:00:00Z',
        //     link: 'http://example.com/doc1',
        //     fileSize: '2 MB',
        //     orignallocation: 'Folder A',
        // },
        // {
        //     id: 2,
        //     name: 'Document 2',
        //     lastModified: '2024-09-02T12:00:00Z',
        //     link: 'http://example.com/doc2',
        //     orignallocation: 'Folder B',
        //     fileSize: '3 MB',

        // },

    ];

    return (
        <>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                sx={{
                    padding: {
                        xs: '10px',
                        sm: '20px',
                        md: '30px'
                    }
                }}
            >
                <Typography variant="h3">Trash</Typography>

                {paginatedItems.length > 0 ? (
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
                ) : null} {/* Button section is only rendered when there are items */}

            </Box>

            {paginatedItems.length > 0 ? (
                <ResponsiveTable headers={headers} paginatedItems={paginatedItems} showMenu={false} />
            ) : (
                <EmptyTraspageView />
            )}
        </>
    );
};

export default TrashPage;
