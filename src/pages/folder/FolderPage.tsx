import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import EditIcon from '@mui/icons-material/Edit';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import {
    Box,
    Button,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    Popover,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    Typography
} from '@mui/material';
import React, { useState } from 'react';
import BpCheckbox from '../../components/CustomizedCheckbox';
import PaginationPage from '../Pagination';
import { ArrowForwardIos, Delete, Edit, FileDownload, Folder, Share } from '@mui/icons-material';


const cellStyle = {
    padding: 0,
    border: 'none',
};
const headcellStyle = {
    padding: "10px 0",
    fontSize: '16px',
    fontWeight: 500,
    border: 'none',
};
const buttonstyle = {
    backgroundColor: '#EFF7FF',
    borderRadius: '4px',
    color: '#03111E',
    fontSize: '14px',
    fontWeight: 400,
    padding: '8px 12px'
};

interface Item {
    id: number;
    name: string;
    link: string;
    lastModified: string;
    fileSize: string;
}

const FolderPage: React.FC = () => {
    const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
    const [linkAnchorEl, setLinkAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedLink, setSelectedLink] = useState<string>('');
    const [hoveredRow, setHoveredRow] = useState<null | number>(null);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [page, setPage] = useState(1);
    const rowsPerPage = 10;

    const items: Item[] = [
        { id: 1, name: 'Asset 01', link: 'https://example.com/asset1', lastModified: '2024-09-01', fileSize: '15 MB' },
        { id: 2, name: 'Asset 02', link: 'https://example.com/asset2', lastModified: '2024-09-02', fileSize: '20 MB' },
        { id: 3, name: 'Asset 03', link: 'https://example.com/asset3', lastModified: '2024-09-03', fileSize: '30 MB' },
        { id: 4, name: 'Asset 04', link: 'https://example.com/asset1', lastModified: '2024-09-04', fileSize: '45 MB' },
        { id: 5, name: 'Asset 05', link: 'https://example.com/asset2', lastModified: '2024-09-05', fileSize: '60 MB' },
        { id: 6, name: 'Asset 06', link: 'https://example.com/asset3', lastModified: '2024-09-06', fileSize: '80 MB' },
        { id: 7, name: 'Asset 07', link: 'https://example.com/asset1', lastModified: '2024-09-07', fileSize: '15 MB' },
        { id: 8, name: 'Asset 08', link: 'https://example.com/asset2', lastModified: '2024-09-08', fileSize: '20 MB' },
        { id: 9, name: 'Asset 09', link: 'https://example.com/asset3', lastModified: '2024-09-09', fileSize: '30 MB' },
        { id: 10, name: 'Asset 10', link: 'https://example.com/asset1', lastModified: '2024-09-10', fileSize: '45 MB' },
        { id: 11, name: 'Asset 11', link: 'https://example.com/asset2', lastModified: '2024-09-11', fileSize: '60 MB' },
        { id: 12, name: 'Asset 12', link: 'https://example.com/asset3', lastModified: '2024-09-12', fileSize: '80 MB' },
        { id: 13, name: 'Asset 01', link: 'https://example.com/asset1', lastModified: '2024-09-01', fileSize: '15 MB' },
        { id: 22, name: 'Asset 02', link: 'https://example.com/asset2', lastModified: '2024-09-02', fileSize: '20 MB' },
        { id: 33, name: 'Asset 03', link: 'https://example.com/asset3', lastModified: '2024-09-03', fileSize: '30 MB' },
        { id: 44, name: 'Asset 04', link: 'https://example.com/asset1', lastModified: '2024-09-04', fileSize: '45 MB' },
        { id: 55, name: 'Asset 05', link: 'https://example.com/asset2', lastModified: '2024-09-05', fileSize: '60 MB' },
        { id: 66, name: 'Asset 06', link: 'https://example.com/asset3', lastModified: '2024-09-06', fileSize: '80 MB' },
        { id: 77, name: 'Asset 07', link: 'https://example.com/asset1', lastModified: '2024-09-07', fileSize: '15 MB' },
        { id: 88, name: 'Asset 08', link: 'https://example.com/asset2', lastModified: '2024-09-08', fileSize: '20 MB' },
        { id: 99, name: 'Asset 09', link: 'https://example.com/asset3', lastModified: '2024-09-09', fileSize: '30 MB' },
        { id: 100, name: 'Asset 10', link: 'https://example.com/asset1', lastModified: '2024-09-10', fileSize: '45 MB' },
        { id: 111, name: 'Asset 11', link: 'https://example.com/asset2', lastModified: '2024-09-11', fileSize: '60 MB' },
        { id: 122, name: 'Asset 12', link: 'https://example.com/asset3', lastModified: '2024-09-12', fileSize: '80 MB' },
    ];

    const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setMenuAnchorEl(null);
    };

    const handleLinkClick = (event: React.MouseEvent<HTMLElement>, link: string) => {
        setSelectedLink(link);
        setLinkAnchorEl(event.currentTarget);
    };

    const handleCloseLinkPopover = () => {
        setLinkAnchorEl(null);
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(selectedLink);
        handleCloseLinkPopover();
    };

    const handleRowHover = (id: number | null) => {
        setHoveredRow(id);
    };

    const handleRowSelect = (id: number) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(itemId => itemId !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        console.log(event)
    };

    const paginatedItems = items.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    return (
        <>
            <Box
                padding='30px'
                display="flex"
                justifyContent='space-between'
                alignItems='center'

            >
                <Typography
                    sx={{
                        fontWeight: '500',
                        fontSize: '20px',
                    }}
                >
                    Folders
                </Typography>
                <Box display="flex" gap='12px'>
                    <Button
                        size="small"
                        style={buttonstyle}
                        startIcon={<SwapVertIcon fontSize='medium' />}
                    >
                        Sort
                    </Button>
                    <Button
                        size="small"
                        style={buttonstyle}
                        startIcon={<GridViewIcon />}
                    >
                        View
                    </Button>
                </Box>
            </Box >

            <Table>
                <TableHead sx={{ border: 'none' }}>
                    <TableRow>
                        <TableCell style={headcellStyle}></TableCell>
                        <TableCell style={headcellStyle}>Name</TableCell>
                        <TableCell style={headcellStyle}>Last Modified</TableCell>
                        <TableCell style={headcellStyle}>Link</TableCell>
                        <TableCell style={headcellStyle}>File Size</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {paginatedItems.map((item, index) => (
                        <TableRow
                            key={item.id}
                            onMouseEnter={() => handleRowHover(item.id)}
                            onMouseLeave={() => handleRowHover(null)}
                            sx={{
                                backgroundColor: selectedItems.includes(item.id) ? '#D0E8FF' : index % 2 === 0 ? '#EFF7FF' : '#fff',
                            }}
                        >
                            <TableCell style={cellStyle}>
                                <BpCheckbox
                                    checked={selectedItems.includes(item.id)}
                                    onChange={() => handleRowSelect(item.id)}
                                />
                            </TableCell>
                            <TableCell style={cellStyle}>{item.name}</TableCell>
                            <TableCell style={cellStyle}>{item.lastModified}</TableCell>
                            <TableCell style={cellStyle}>
                                <span
                                    style={{ cursor: 'pointer', textDecoration: 'underline', color: '#0071EB' }}
                                    onClick={(e) => handleLinkClick(e, item.link)}
                                >
                                    {item.link}
                                </span>
                                <Popover
                                    open={Boolean(linkAnchorEl)}
                                    anchorEl={linkAnchorEl}
                                    onClose={handleCloseLinkPopover}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                >
                                    <MenuItem onClick={handleCopyLink}>
                                        <ContentCopyIcon fontSize="small" /> Copy Link
                                    </MenuItem>
                                </Popover>
                            </TableCell>
                            <TableCell style={cellStyle}>{item.fileSize}</TableCell>
                            <TableCell style={cellStyle}>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                                    <Tooltip title="Add">
                                        <IconButton
                                            size="small"
                                            style={{ visibility: hoveredRow === item.id ? 'visible' : 'hidden' }}
                                        >
                                            <PersonAddAltOutlinedIcon fontSize="small" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="FileDownload">
                                        <IconButton
                                            size="small"
                                            style={{ visibility: hoveredRow === item.id ? 'visible' : 'hidden' }}
                                        >
                                            <FileDownloadOutlinedIcon fontSize="small" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Edit">
                                        <IconButton
                                            size="small"
                                            style={{ visibility: hoveredRow === item.id ? 'visible' : 'hidden' }}
                                        >
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Favorite">
                                        <IconButton
                                            size="small"
                                            style={{ visibility: hoveredRow === item.id ? 'visible' : 'hidden' }}
                                        >
                                            <StarOutlineRoundedIcon fontSize="small" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Delete">
                                        <IconButton
                                            size="small"
                                            style={{ visibility: hoveredRow === item.id ? 'visible' : 'hidden' }}
                                        >
                                            <DeleteOutlineOutlinedIcon fontSize="small" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="DoNotDisturb">
                                        <IconButton
                                            size="small"
                                            style={{ visibility: hoveredRow === item.id ? 'visible' : 'hidden' }}
                                        >
                                            <DoNotDisturbIcon fontSize="small" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="More">
                                        <IconButton
                                            size="small"
                                            onClick={handleClickMenu}
                                        >
                                            <MoreVertIcon fontSize="small" />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <PaginationPage
                count={Math.ceil(items.length / rowsPerPage)}
                page={page}
                onChange={handlePageChange}
            />

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
                    <FileDownload fontSize="small" sx={{ mr: 1, }} />
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

        </>
    );
};

export default FolderPage;