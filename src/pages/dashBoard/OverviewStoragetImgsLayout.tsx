import React from 'react';
import { Box, Divider, Typography, IconButton, Grid } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Interface for props
interface ImageData {
    imgSrc: string;
    text: string;
}

const OverviewStoragetImgs: React.FC = () => {

    const imageData: ImageData[] = [
        { imgSrc: '../../../public/Imgs/GoogleTesting1.png', text: 'Google Testing.doc' },
        { imgSrc: '../../../public/Imgs/GoogleTesting2.png', text: 'Google Testing.doc' },
        { imgSrc: '../../../public/Imgs/GoogleTesting3.png', text: 'Google Testing.doc' },
        { imgSrc: '../../../public/Imgs/GoogleTesting4.png', text: 'Google Testing.doc' },
    ];

    return (
        <Grid container spacing={2}>
            {imageData.map((image, index) => (
                <Grid item xs={6} sm={6} md={3} key={index}>
                    <Box
                        sx={{
                            border: '1px solid #D8DBDD',
                            borderRadius: '6px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                paddingX: '16px',
                                paddingTop: '16px',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <img
                                src={image.imgSrc}
                                alt={image.text}
                                style={{
                                    width: '100%',
                                    height: '150px',
                                }}
                            />
                        </Box>
                        <Divider />
                        <Box
                            sx={{
                                paddingX: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography fontSize="16px" fontWeight="400">
                                {image.text}
                            </Typography>
                            <IconButton>
                                <MoreVertIcon sx={{ color: '#03111E' }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default OverviewStoragetImgs;
