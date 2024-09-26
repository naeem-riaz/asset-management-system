import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationProps {
    count: number;
    page: number;
    onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export default function PaginationRounded({ count, page, onChange }: PaginationProps) {
    return (
        <Stack spacing={2} mt={1} sx={{ alignItems: 'flex-end' }}>
            <Pagination
                count={count}
                page={page}
                shape="rounded"
                onChange={onChange}
                color="primary"
                sx={{
                    '& .MuiPaginationItem-root': { color: '#03111E' },
                    '& .Mui-selected': { backgroundColor: '#0071EB', color: 'white' },
                }}
            />
        </Stack>
    );
}
