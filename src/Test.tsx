import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { IconButton } from '@mui/material';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import DoDisturbOutlinedIcon from '@mui/icons-material/DoDisturbOutlined';
import { useState } from 'react';
import DeleteModal from './modals/DeleteModal';
import DisableModal from './modals/DisableModal';

export default function Test() {
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [disableModalOpen, setDisableModalOpen] = useState(false);
    const handleCloseDeleteModal = () => {
        setDeleteModalOpen(false);
    };
    const handleOpenDeleteModal = () => {
        setDeleteModalOpen(true);
    };
    const handleCloseDisableModal = () => {
        setDisableModalOpen(false);
    };
    const handleOpenDisableModal = () => {
        setDisableModalOpen(true);
    };
    return (
        <>
            <IconButton
                size="small"
                style={{

                    borderRadius: "4px 0",
                    color: '#03111E'
                }}
            >
                <PersonAddAltOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton
                size="small"
                style={{

                    borderRadius: "4px 0",
                    color: '#03111E'
                }}
            >
                <FileDownloadOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton
                size="small"
                style={{

                    borderRadius: "4px 0",
                    color: '#03111E'
                }}
            >
                <FolderOpenOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton
                size="small"
                style={{

                    borderRadius: "4px 0",
                    color: '#03111E'
                }}
            >
                <StarOutlineRoundedIcon fontSize="small" />
            </IconButton>
            <IconButton
                onClick={handleOpenDeleteModal}
                size="small"
                style={{

                    borderRadius: "4px 0",
                    color: '#03111E'
                }}
            >
                <DeleteForeverOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton
                onClick={handleOpenDisableModal}
                size="small"
                style={{

                    borderRadius: "4px 0",
                    color: '#03111E'
                }}
            >
                <DoDisturbOutlinedIcon fontSize="small" />
            </IconButton>
            <DeleteModal open={deleteModalOpen} onClose={handleCloseDeleteModal} />
            <DisableModal open={disableModalOpen} onClose={handleCloseDisableModal} />
        </>
    )
}
