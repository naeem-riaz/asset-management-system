import {
    ArrowForwardIos,
    Delete,
    Edit,
    FileDownload,
    Folder,
    MoreVert as MoreVertIcon,
    PersonAddAltOutlined as PersonAddAltOutlinedIcon,
    Share
} from '@mui/icons-material';
import {
    Box,
    Checkbox as BpCheckbox,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import React, { useState } from 'react';

interface Item {
    id: number;
    name: string;
    lastModified: string;
    link: string;
    fileSize: string;
}

interface ResponsiveTableProps {
    headers: string[];
    paginatedItems: Item[];
}

const ResponsiveTable: React.FC<ResponsiveTableProps> = ({ headers, paginatedItems }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);
    const [openRowId, setOpenRowId] = useState<number | null>(null); // State to track which row's menu is open

    const handleRowHover = (id: number | null) => {
        setHoveredRow(id);
    };

    const handleRowSelect = (id: number) => {
        setSelectedItems((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const handleCloseMenu = () => {
        setMenuAnchorEl(null);
        setOpenRowId(null); // Close the menu and reset open row
    };

    const handleClickMenu = (event: React.MouseEvent<HTMLElement>, id: number) => {
        setMenuAnchorEl(event.currentTarget);
        setOpenRowId(openRowId === id ? null : id); // Toggle open row
    };

    const headerMapping: { [key: string]: keyof Item } = {
        'Name': 'name',
        'Last Modified': 'lastModified',
        'Link': 'link',
        'File Size': 'fileSize'
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

    return (
        <>
            <Table sx={{ borderCollapse: 'collapse', padding: 0 }}>
                <TableHead>
                    <TableRow sx={{ borderBottom: 'none' }}>
                        <TableCell sx={{ padding: 0, borderBottom: 'none' }} style={{ width: '50px' }}></TableCell>
                        {filteredHeaders.map((header, index) => (
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
                    {paginatedItems.map((item, index) => (
                        <TableRow
                            key={item.id}
                            onMouseEnter={() => handleRowHover(item.id)}
                            onMouseLeave={() => handleRowHover(null)}
                            sx={{
                                backgroundColor: index % 2 === 0 ? '#EFF7FF' : '#ffffff', // Keep alternating background color
                                '&:hover': {
                                    backgroundColor: '#f1f1f1'
                                }

                            }}
                        >
                            <TableCell sx={{ padding: 0, borderBottom: 'none' }}>
                                <BpCheckbox
                                    checked={selectedItems.includes(item.id)}
                                    onChange={() => handleRowSelect(item.id)}
                                />
                            </TableCell>

                            <TableCell sx={{ padding: 0, borderBottom: 'none' }}>{item[headerMapping['Name']]}</TableCell>
                            {!isMediumScreen && !isSmallScreen && (
                                <TableCell sx={{ padding: 0, borderBottom: 'none' }}>
                                    {new Date(item[headerMapping['Last Modified']]).toLocaleDateString()}
                                </TableCell>
                            )}
                            <TableCell sx={{ padding: 0, borderBottom: 'none' }}>{item[headerMapping['Link']]}</TableCell>
                            {!isSmallScreen && (
                                <TableCell sx={{ padding: 0, borderBottom: 'none' }}>{item[headerMapping['File Size']]}</TableCell>
                            )}

                            <TableCell sx={{ padding: 0, borderBottom: 'none' }}>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                                    <Box>
                                        <Tooltip title="Add">
                                            <IconButton
                                                size="small"
                                                style={{
                                                    visibility: hoveredRow === item.id ? 'visible' : 'hidden',
                                                    backgroundColor: openRowId === item.id ? 'white' : 'transparent',

                                                }}
                                            >
                                                <PersonAddAltOutlinedIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="More">
                                            <IconButton
                                                size="small"
                                                onClick={(e) => handleClickMenu(e, item.id)}
                                                style={{
                                                    backgroundColor: openRowId === item.id ? 'white' : 'transparent',


                                                }}
                                            >
                                                <MoreVertIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {!isSmallScreen && !isMediumScreen && (
                <Menu
                    anchorEl={menuAnchorEl}
                    open={Boolean(menuAnchorEl)}
                    onClose={handleCloseMenu}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem onClick={handleCloseMenu} sx={{ padding: '8px 12px', width: "190px" }} >
                        <FileDownload fontSize="small" sx={{ mr: 1 }} />
                        Download
                    </MenuItem>
                    <MenuItem onClick={handleCloseMenu} sx={{ padding: '8px 12px' }}>
                        <Edit fontSize="small" sx={{ mr: 1 }} />
                        Rename
                    </MenuItem>
                    <MenuItem onClick={handleCloseMenu} sx={{ padding: '8px 12px' }}>
                        <Folder fontSize="small" sx={{ mr: 1 }} />
                        Move to
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloseMenu} sx={{ padding: '8px 12px' }}>
                        <Share fontSize="small" sx={{ mr: 1 }} />
                        Share
                        <ArrowForwardIos sx={{ ml: 'auto', fontSize: '15px' }} />
                    </MenuItem>
                    <MenuItem onClick={handleCloseMenu} sx={{ padding: '8px 12px' }}>
                        <Folder fontSize="small" sx={{ mr: 1 }} />
                        Organise
                        <ArrowForwardIos sx={{ ml: 'auto', fontSize: '15px' }} />
                    </MenuItem>
                    <MenuItem onClick={handleCloseMenu} sx={{ padding: '8px 12px' }}>
                        <Folder fontSize="small" sx={{ mr: 1 }} />
                        Folder color
                        <ArrowForwardIos sx={{ ml: 'auto', fontSize: '15px' }} />
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloseMenu} sx={{ padding: '8px 12px' }}>
                        <Delete fontSize="small" sx={{ mr: 1 }} />
                        Move to bin
                    </MenuItem>
                </Menu>
            )}
        </>
    );
};

export default ResponsiveTable;
