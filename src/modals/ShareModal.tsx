import CloseIcon from '@mui/icons-material/Close';
import LinkIcon from '@mui/icons-material/Link';
import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React, { useState } from 'react';

interface ShareModalProps {
    open: boolean;       // Type for open prop
    onClose: () => void; // Type for onClose prop
}

const ShareModal: React.FC<ShareModalProps> = ({ open, onClose }) => {
    const [selectedOption, setSelectedOption] = useState(''); // State for the dropdown

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth sx={{ padding: '20px' }}>
            {/* Header with title and close icon */}
            <DialogTitle>
                <Typography variant="h3">
                    Share
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
            <DialogContent>
                {/* Container with border */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid #D8DBDD',
                        borderRadius: '4px',
                        padding: '4px',
                    }}
                >
                    <TextField
                        placeholder="Enter your input"
                        variant="standard"
                        sx={{
                            marginRight: '10px',
                            flex: 1,
                            '& .MuiInputBase-root:before, & .MuiInputBase-root:after': {
                                borderBottom: 'none',
                            }
                        }}
                    />
                    <FormControl variant="standard" sx={{ minWidth: 120 }}>
                        <InputLabel id="select-label">Select option</InputLabel>
                        <Select
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            sx={{
                                '& .MuiInputBase-root:before, & .MuiInputBase-root:after': {
                                    borderBottom: 'none',
                                }
                            }}
                        >
                            <MenuItem value="">
                            </MenuItem>
                            <MenuItem value="Option 1">Can edit</MenuItem>
                            <MenuItem value="Option 2">Can view</MenuItem>
                            <MenuItem value="Option 3">Can’t edit</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <div>
                    <TextField
                        label="Add a message"
                        multiline
                        rows={4}
                        fullWidth
                        sx={{ marginTop: '10px' }}
                    />
                </div>
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
                    <LinkIcon sx={{ mr: 1 }} />
                    Copy Link
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Send
                </Button>
            </Box>
        </Dialog>
    );
};

export default ShareModal;
