import { ArrowForwardIos, Delete, Edit, FileDownload, Folder, Share } from '@mui/icons-material';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LinkIcon from '@mui/icons-material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Divider, Menu, MenuItem } from '@mui/material';
import * as React from 'react';
import DeleteModal from '../modals/DeleteModal';
import DetailsAndActivityModals from '../modals/DetailsAndActivityModals';
import RenameModal from '../modals/RenameModal';
import ReplaceFileModal from '../modals/Replace_File';
import ShareModal from '../modals/ShareModal';

interface PositionedMenuProps {
    anchorEl: null | HTMLElement;
    open: boolean;
    onClose: () => void;
}

export default function PositionedMenu({ anchorEl, open, onClose }: PositionedMenuProps) {
    const [subMenuAnchorEl, setSubMenuAnchorEl] = React.useState<null | HTMLElement>(null);
    const [fileInfoSubMenuAnchorEl, setFileInfoSubMenuAnchorEl] = React.useState<null | HTMLElement>(null);
    const [modalOpen, setModalOpen] = React.useState(false);
    const [renameModalOpen, setRenameModalOpen] = React.useState(false);
    const [replaceModalOpen, setReplaceModalOpen] = React.useState(false);
    const [detailsModalOpen, setDetailsModalOpen] = React.useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);

    const subMenuOpen = Boolean(subMenuAnchorEl);
    const fileInfoSubMenuOpen = Boolean(fileInfoSubMenuAnchorEl);

    const handleClose = () => {
        onClose();
        setSubMenuAnchorEl(null);
        setFileInfoSubMenuAnchorEl(null);
    };

    const handleSubMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setSubMenuAnchorEl(event.currentTarget);
    };

    const handleFileInfoSubMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setFileInfoSubMenuAnchorEl(event.currentTarget);
    };

    const handleOpenModal = () => {
        setModalOpen(true);
        handleClose();
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleOpenRenameModal = () => {
        setRenameModalOpen(true);
        handleClose();
    };

    const handleCloseRenameModal = () => {
        setRenameModalOpen(false);
    };

    const handleOpenReplaceModal = () => {
        setReplaceModalOpen(true);
        handleClose();
    };

    const handleCloseReplaceModal = () => {
        setReplaceModalOpen(false);
    };

    const handleOpenDeleteModal = () => {
        setDeleteModalOpen(true);
        handleClose();
    };

    const handleCloseDeleteModal = () => {
        setDeleteModalOpen(false);
    };

    const handleOpenDetailsModal = () => {
        setDetailsModalOpen(true);
        handleClose();
    };

    const handleCloseDetailsModal = () => {
        setDetailsModalOpen(false);
    };

    return (
        <div>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                sx={{
                    display: {
                        xs: 'none',
                        sm: 'none',
                        md: 'block',
                    }
                }}
            >
                <MenuItem onClick={handleClose}>
                    <FileDownload fontSize="small" sx={{ mr: 1 }} />
                    Download
                </MenuItem>
                <MenuItem onClick={handleOpenRenameModal}>
                    <Edit fontSize="small" sx={{ mr: 1 }} />
                    Rename
                </MenuItem>
                <MenuItem onClick={handleOpenReplaceModal}>
                    <AutoStoriesOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
                    Replace
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleSubMenuOpen}>
                    <Share fontSize="small" sx={{ mr: 1 }} />
                    Share
                    <ArrowForwardIos sx={{ ml: 'auto', fontSize: '15px' }} />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Folder fontSize="small" sx={{ mr: 1 }} />
                    Organise
                    <ArrowForwardIos sx={{ ml: 'auto', fontSize: '15px' }} />
                </MenuItem>
                <MenuItem onClick={handleFileInfoSubMenuOpen}>
                    <InfoOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
                    File information
                    <ArrowForwardIos sx={{ ml: '16px', fontSize: '15px' }} />
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleOpenDeleteModal}>
                    <Delete fontSize="small" sx={{ mr: 1 }} />
                    Move to bin
                </MenuItem>

                {/* Share SubMenu */}
                <Menu
                    anchorEl={subMenuAnchorEl}
                    open={subMenuOpen}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    sx={{ marginLeft: '-5px' }}
                >
                    <MenuItem onClick={handleOpenModal}>
                        <Share fontSize="small" sx={{ mr: 1 }} />
                        Share
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <LinkIcon fontSize="small" sx={{ mr: 1 }} />
                        Copy Link
                    </MenuItem>
                </Menu>


                {/* File Information SubMenu */}
                <Menu
                    anchorEl={fileInfoSubMenuAnchorEl}
                    open={fileInfoSubMenuOpen}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    sx={{ marginLeft: '-5px' }}
                >
                    <MenuItem onClick={handleOpenDetailsModal}>
                        <InfoOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
                        Details
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <LockOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
                        Lock
                    </MenuItem>
                </Menu>

            </Menu>

            <ShareModal open={modalOpen} onClose={handleCloseModal} />
            <RenameModal open={renameModalOpen} onClose={handleCloseRenameModal} />
            <ReplaceFileModal open={replaceModalOpen} onClose={handleCloseReplaceModal} />
            <DetailsAndActivityModals isOpen={detailsModalOpen} onClose={handleCloseDetailsModal} />
            <DeleteModal open={deleteModalOpen} onClose={handleCloseDeleteModal} />
        </div>
    );
}
