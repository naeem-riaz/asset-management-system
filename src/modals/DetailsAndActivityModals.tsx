import CloseIcon from '@mui/icons-material/Close';
import { Tab, Tabs, Typography, Box, IconButton, Modal } from '@mui/material';
import * as React from 'react';
import Img1 from '../../public/Imgs/pdf.png';
import DetailsSabModal from './subModals/DetailsSabModal';

const modalStyle = {
    paddingY: '8px',
    position: 'absolute',
    bottom: '10px',
    right: '20px',
    width: 200,
    height: 680,
    bgcolor: 'background.paper',
    borderRadius: '4px',
};

interface DetailsAndActivityModalsProps {
    isOpen: boolean;
    onClose: () => void;
}

const DetailsAndActivityModals: React.FC<DetailsAndActivityModalsProps> = ({ isOpen, onClose }) => {
    const [value, setValue] = React.useState('details');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
                <Box sx={{ display: 'flex', padding: '0px 10px 10px ' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <img src={Img1} height='24' alt="File icon" />
                        <Typography variant='body2' lineHeight={1} width="66%">
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
                            '&:hover': { backgroundColor: 'transparent' },
                        }}
                    >
                        <CloseIcon fontSize='small' />
                    </IconButton>
                </Box>

                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="details and activity tabs"
                    variant="fullWidth"
                    sx={{ padding: '3px', minHeight: 0 }}
                    TabIndicatorProps={{ style: { height: '1px' } }}
                >
                    {['details', 'activity'].map((tab) => (
                        <Tab
                            key={tab}
                            value={tab}
                            label={tab.charAt(0).toUpperCase() + tab.slice(1)}
                            sx={{
                                color: '#03111E',
                                fontSize: '14px',
                                fontWeight: 500,
                                padding: '6px',
                                minHeight: 0,
                                backgroundColor: value === tab ? '#EFF7FF' : 'transparent',
                                '&:hover': { backgroundColor: '#E6F2FF' },
                                '&.Mui-selected': { color: '#03111E' },
                                '& .MuiTab-wrapper': { padding: 0 },
                            }}
                        />
                    ))}
                </Tabs>

                <Box>
                    {value === 'details' && <DetailsSabModal />}
                    {value === 'activity' && <Typography variant="body2">No recent activity.</Typography>}
                </Box>
            </Box>
        </Modal>
    );
};

export default DetailsAndActivityModals;
