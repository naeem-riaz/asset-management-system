import CloseIcon from '@mui/icons-material/Close';
import LinkIcon from '@mui/icons-material/Link';
import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import React from 'react';
import Img1 from '../../public/Imgs/ReplaceOldFile.png';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

interface ReplaceFileModalProps {
    open: boolean;       // Type for open prop
    onClose: () => void; // Type for onClose prop
}

const ReplaceFileModal: React.FC<ReplaceFileModalProps> = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>
                <Typography variant="h3">Replace File</Typography>
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
                <Box sx={{ paddingBottom: '30px' }}>
                    <Typography variant='h3' paddingBottom='12px'>Old File</Typography>
                    <Box display='flex' alignItems='center' gap='8px'>
                        <img src={Img1} alt="Old File" style={{ width: '140px', height: '100px' }} />
                        <Box display='flex' alignItems='center' gap='8px'>
                            <Box>
                                <Typography>File Name:</Typography>
                                <Typography>File Type:</Typography>
                                <Typography>File Size:</Typography>
                            </Box>
                            <Box>
                                <Typography>Google Testing Doc.pdf</Typography>
                                <Typography>PDF</Typography>
                                <Typography color='#9EA6A9'>30 MB</Typography>
                            </Box>
                        </Box>
                    </Box>

                </Box>
                <Box>
                    <Typography variant='h3' paddingBottom='12px'>Upload new file</Typography>
                    <Box
                        sx={{
                            bgcolor: '#EFF7FF',
                            border: '1px dashed #0071EB',
                            borderRadius: '4px',
                            paddingY: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <IconButton aria-label="fingerprint" sx={{ color: "#0071EB", backgroundColor: "white" }}>
                            <FileUploadOutlinedIcon />
                        </IconButton>
                        <Box
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            sx={{ mt: 1 }}
                        >
                            <Button
                                variant="text"
                                sx={{
                                    paddingX: "3px",
                                    marginRight: 0,
                                    textDecoration: 'underline', // Add underline to the text
                                    backgroundColor: 'transparent', // Default background color
                                    '&:hover': {
                                        backgroundColor: 'transparent', // Transparent background on hover
                                    },
                                }}
                            >
                                Click to upload
                            </Button>
                            <Typography sx={{ margin: 0 }}>
                                or drag & drop any file
                            </Typography>
                        </Box>
                    </Box>

                </Box>
            </DialogContent>
            <Box
                sx={{
                    display: 'flex',
                    gap: '16px',
                    paddingX: '20px',
                    paddingBottom: '20px',
                }}
            >
                <Button
                    variant="outlined"
                    fullWidth
                    onClick={onClose}
                    sx={{
                        borderColor: '#D8DBDD',
                        color: '#03111E',
                        paddingY: '12px',
                    }}
                >
                    <LinkIcon sx={{ mr: 1 }} />
                    Copy Link
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={onClose} // You might want to add some logic here to actually replace the file
                >
                    Replace File
                </Button>
            </Box>
        </Dialog>
    );
};

export default ReplaceFileModal;
