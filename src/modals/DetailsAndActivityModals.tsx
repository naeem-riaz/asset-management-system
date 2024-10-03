import CloseIcon from '@mui/icons-material/Close';
import { Tab, Tabs, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import Img1 from '../../public/Imgs/pdf.png';
import DetailsSabModal from './subModals/DetailsSabModal';

const style = {
    position: 'absolute',
    bottom: '30px',
    right: '20px',
    width: 200,
    height: 650,
    bgcolor: 'background.paper',
    borderRadius: '4px',
    // boxShadow: 24
};

interface DetailsAndActivityModalsProps {
    isOpen: boolean;
    onClose: () => void;
}

const DetailsAndActivityModals: React.FC<DetailsAndActivityModalsProps> = ({ isOpen, onClose }) => {
    const [value, setValue] = React.useState('details'); // Change default value to 'details'

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        console.log(event)
    };

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box
                    sx={{
                        display: 'flex',
                        padding: '10px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                        }}
                    >
                        <img src={Img1} height='24' alt="File icon" />
                        <Typography lineHeight={1} width={2 / 3}>
                            Google Testing doc.pdf
                        </Typography>
                    </Box>
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            top: '8px',
                            right: '8px',
                            padding: 0,
                            '&:hover': {
                                backgroundColor: 'transparent',
                            },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box sx={{ width: '100%', justifyContent: 'space-between' }}>
                    <Tabs
                        value={value}
                        textColor="inherit"
                        onChange={handleChange}
                        aria-label="wrapped label tabs example"
                        variant="fullWidth"
                    >

                        <Tab value="details" label="Details" />
                        <Tab value="activity" label="Activity" />
                    </Tabs>
                </Box>
                <Box>
                    {value === 'details' && (
                        <>
                            <DetailsSabModal />
                        </>
                    )}
                    {value === 'activity' && (
                        <></>
                    )}
                </Box>
            </Box>
        </Modal>
    );
};

export default DetailsAndActivityModals;
