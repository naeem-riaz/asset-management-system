import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

interface RenameModalProps {
    open: boolean;       // Type for open prop
    onClose: () => void; // Type for onClose prop
}

const RenameModal: React.FC<RenameModalProps> = ({ open, onClose }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth sx={{ padding: '20px' }}>
            {/* Header with title and close icon */}
            <DialogTitle>
                <Typography variant="h3">
                    Rename
                </Typography>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            {/* Content with input field */}
            <DialogContent >
                <TextField
                    autoFocus
                    margin="dense"
                    label="New Name"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </DialogContent>
            <Box
                sx={{
                    display: 'flex',
                    gap: '16px',
                    paddingX: '20px',
                    paddingBottom: '20px'
                }}
            >
                <Button
                    variant="outlined"
                    fullWidth
                    onClick={onClose}
                    sx={{
                        borderColor: '#D8DBDD',
                        color: '#03111E',
                        paddingY: '12px'
                    }}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => {
                        console.log('Renamed to:', inputValue);
                        onClose();
                    }}
                >
                    Save
                </Button>
            </Box>
        </Dialog>
    );
};

export default RenameModal;




