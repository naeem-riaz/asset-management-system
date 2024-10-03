import { Box, Button, Typography, IconButton } from '@mui/material';
import React, { useRef, useState, useEffect } from 'react';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import NavigateBeforeSharpIcon from '@mui/icons-material/NavigateBeforeSharp';
import ResponsiveTable from '../CustomTable';

const TagsPage: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isOverflowing, setIsOverflowing] = useState(false);

    const scroll = (scrollOffset: number) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
        }
    };

    const checkOverflow = () => {
        if (scrollRef.current) {
            const { scrollWidth, clientWidth } = scrollRef.current;
            setIsOverflowing(scrollWidth > clientWidth);
        }
    };

    useEffect(() => {
        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        return () => window.removeEventListener('resize', checkOverflow);
    }, []);

    const headers = ['Name', 'Last Modified', 'Link', 'File Size'];

    const paginatedItems = [
        { id: 1, name: 'Document 1', lastModified: '2024-09-25', link: 'http://example.com/doc1', fileSize: '1.2 MB' },
        { id: 2, name: 'Document 2', lastModified: '2024-09-26', link: 'http://example.com/doc2', fileSize: '2.3 MB' },
        { id: 3, name: 'Document 3', lastModified: '2024-09-25', link: 'http://example.com/doc1', fileSize: '1.2 MB' },
        { id: 4, name: 'Document 4', lastModified: '2024-09-26', link: 'http://example.com/doc2', fileSize: '2.3 MB' },
        { id: 5, name: 'Document 5', lastModified: '2024-09-25', link: 'http://example.com/doc1', fileSize: '1.2 MB' },
        { id: 6, name: 'Document 6', lastModified: '2024-09-26', link: 'http://example.com/doc2', fileSize: '2.3 MB' },
        { id: 7, name: 'Document 7', lastModified: '2024-09-25', link: 'http://example.com/doc1', fileSize: '1.2 MB' },
        { id: 8, name: 'Document 8', lastModified: '2024-09-26', link: 'http://example.com/doc2', fileSize: '2.3 MB' },
        { id: 9, name: 'Document 9', lastModified: '2024-09-25', link: 'http://example.com/doc1', fileSize: '1.2 MB' },
        { id: 10, name: 'Document 10', lastModified: '2024-09-26', link: 'http://example.com/doc2', fileSize: '2.3 MB' },
    ];

    return (
        <>
            <Box paddingY="15px">
                <Typography variant="h3" sx={{ paddingBottom: '10px', paddingX: "30px" }}>
                    Tags
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {isOverflowing && (
                        <IconButton onClick={() => scroll(-200)} size="small">
                            <NavigateBeforeSharpIcon />
                        </IconButton>
                    )}
                    <Box
                        sx={{
                            display: 'flex',
                            overflowX: 'auto',
                            gap: '12px',
                            maxWidth: '100%',
                            scrollBehavior: 'smooth',
                            scrollbarWidth: 'none',
                            '&::-webkit-scrollbar': {
                                display: 'none',
                            },
                        }}
                        ref={scrollRef}
                    >
                        {[
                            'O’cyber', 'Google Documents', 'Beloz Testing', 'O’cyber', 'Google Documents', 'Beloz Testing',
                            'O’cyber', 'Google Documents', 'Beloz Testing', 'O’cyber', 'Google Documents', 'Beloz Testing',
                            'O’cyber', 'Google Documents', 'Beloz Testing', 'O’cyber', 'Google Documents', 'Beloz Testing'
                        ].map((label, index) => (
                            <Button
                                key={index}
                                size="small"
                                sx={{
                                    backgroundColor: '#EFF7FF',
                                    borderRadius: '4px',
                                    color: '#03111E',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    minWidth: 'fit-content',
                                    padding: '8px',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                    flexShrink: 0,
                                }}
                            >
                                {label}
                            </Button>
                        ))}
                    </Box>

                    {isOverflowing && (
                        <IconButton onClick={() => scroll(200)} size="small">
                            <ChevronRightSharpIcon />
                        </IconButton>
                    )}
                </Box>
            </Box>
            <ResponsiveTable headers={headers} paginatedItems={paginatedItems} />
        </>
    );
};

export default TagsPage;
