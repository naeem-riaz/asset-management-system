import {
    MoreVert as MoreVertIcon,
    PersonAddAltOutlined as PersonAddAltOutlinedIcon
} from '@mui/icons-material';
import {
    Box,
    Checkbox as BpCheckbox,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    useMediaQuery,
    useTheme
} from '@mui/material';
import React, { useState } from 'react';
import PaginationRounded from './Pagination';
import PositionedMenu from './MenuList';


interface Item {
    id: number;
    name: string;
    lastModified: string;
    link: string;
    fileSize: string;
    orignallocation?: string;
}

interface ResponsiveTableProps {
    headers: string[];
    paginatedItems: Item[];
    showMenu?: boolean; // Control whether to show the "3 dots" menu
    customHeaderItems?: string[]; // Additional headers like 'New Column'
}

const ResponsiveTable: React.FC<ResponsiveTableProps> = ({ headers, paginatedItems, showMenu = true, customHeaderItems = [] }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);

    const [page, setPage] = useState(1);
    const itemsPerPage = 10; // Number of items to display per page

    const handleRowHover = (id: number | null) => {
        setHoveredRow(id);
    };

    const handleRowSelect = (id: number) => {
        setSelectedItems((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const headerMapping: { [key: string]: keyof Item } = {
        'Name': 'name',
        'Last Modified': 'lastModified',
        'Link': 'link',
        'Orignal location': 'orignallocation',
        'File Size': 'fileSize',
    };

    const filteredHeaders = headers.filter(header => {
        if (isSmallScreen) {
            return header !== 'File Size' && header !== 'Last Modified';
        }
        if (isMediumScreen) {
            return header !== 'Last Modified';
        }
        return true;
    });

    // Calculate paginated items
    const paginatedData = paginatedItems.slice((page - 1) * itemsPerPage, page * itemsPerPage);
    const totalPages = Math.ceil(paginatedItems.length / itemsPerPage);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        console.log(event)
    };


    const [menuOpen, setMenuOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setMenuOpen(true);
    };

    const handleCloseMenu = () => {
        setMenuOpen(false);
        setAnchorEl(null);
    };

    return (
        <>
            <Table sx={{ borderCollapse: 'collapse', padding: 0 }}>
                <TableHead>
                    <TableRow sx={{ borderBottom: 'none' }}>
                        <TableCell sx={{ padding: 0, borderBottom: 'none' }} style={{ width: '50px' }}></TableCell>
                        {filteredHeaders.concat(customHeaderItems).map((header, index) => (
                            <TableCell
                                key={index}
                                sx={{
                                    padding: 0,
                                    fontWeight: 'bold',
                                    borderBottom: 'none',
                                }}
                            >
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {paginatedData.map((item, index) => (
                        <TableRow
                            key={item.id}
                            onMouseEnter={() => handleRowHover(item.id)}
                            onMouseLeave={() => handleRowHover(null)}
                            sx={{
                                backgroundColor: index % 2 === 0 ? '#EFF7FF' : '#ffffff',
                                marginX: "10px"
                            }}
                        >
                            <TableCell sx={{ padding: 0, borderBottom: 'none' }}>
                                <BpCheckbox
                                    checked={selectedItems.includes(item.id)}
                                    onChange={() => handleRowSelect(item.id)}
                                />
                            </TableCell>

                            <TableCell sx={{ padding: 0, borderBottom: 'none' }}>
                                {item[headerMapping['Name']]}
                            </TableCell>

                            {/* Last Modified cell for larger screens */}
                            {!isMediumScreen && !isSmallScreen && (
                                <TableCell sx={{ padding: 0, borderBottom: 'none' }}>
                                    {item[headerMapping['Last Modified']]
                                        ? new Date(item[headerMapping['Last Modified']] as string | number).toLocaleDateString()
                                        : '-'}
                                </TableCell>
                            )}

                            <TableCell sx={{ padding: 0, borderBottom: 'none', color: "#0071EB" }}>
                                {item[headerMapping['Link']]}
                            </TableCell>
                            {/* Original location cell */}
                            {headers.includes('Orignal location') && (
                                <TableCell sx={{ padding: 0, borderBottom: 'none' }}>
                                    {item[headerMapping['Orignal location']] || '-'}
                                </TableCell>
                            )}
                            {/* File Size cell for larger screens */}
                            {!isSmallScreen && (
                                <TableCell sx={{ padding: 0, borderBottom: 'none' }}>
                                    {item[headerMapping['File Size']]}
                                </TableCell>
                            )}

                            <TableCell sx={{ padding: "0 10px", borderBottom: 'none' }}>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                                    <Box>
                                        {showMenu && (
                                            <>
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        right: '45px',
                                                        display: "flex",
                                                    }}
                                                >
                                                    <IconButton
                                                        size="small"
                                                        style={{
                                                            visibility: hoveredRow === item.id ? 'visible' : 'hidden',
                                                            borderRadius: "4px 0",
                                                            color: '#03111E'
                                                        }}
                                                    >
                                                        <PersonAddAltOutlinedIcon fontSize="small" />
                                                    </IconButton>
                                                </Box>
                                                <Tooltip title="More">
                                                    <IconButton
                                                        size="small"
                                                        onClick={handleMenuClick}
                                                        style={{
                                                            position: 'relative',
                                                            borderRadius: "0 4px",
                                                            color: '#03111E'
                                                        }}
                                                    >
                                                        <MoreVertIcon fontSize="small" />
                                                    </IconButton>
                                                </Tooltip>
                                            </>
                                        )}
                                    </Box>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Pagination Component - Only show if more than 10 items */}
            {paginatedItems.length > 10 && (
                <PaginationRounded
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                />
            )}
            <PositionedMenu anchorEl={anchorEl} open={menuOpen} onClose={handleCloseMenu} />
        </>
    );
};

export default ResponsiveTable;