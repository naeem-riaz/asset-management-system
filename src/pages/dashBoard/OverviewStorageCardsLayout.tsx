import React, { useState } from 'react';
import { Box, Paper, Typography, Slider, Grid } from '@mui/material';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import SnippetFolderOutlinedIcon from '@mui/icons-material/SnippetFolderOutlined';
import DevicesOtherOutlinedIcon from '@mui/icons-material/DevicesOtherOutlined';

const hexToRgba = (hex: string, opacity: number) => {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

interface OverviewStorageCardsLayoutProps {
    bgColor: string;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    text: string;
    min?: number;
    max?: number;
    step?: number;
    value: number;
    onChange: (event: Event, newValue: number | number[]) => void;
    opacity?: number;
}


const OverviewStorageCardsLayout: React.FC<OverviewStorageCardsLayoutProps> = ({
    bgColor,
    icon,
    title,
    subtitle,
    text,
    min = 0,
    max = 100,
    step = 1,
    value,
    onChange,
    opacity = 0.3,
}) => {
    return (
        <Paper
            elevation={3}
            sx={{
                backgroundColor: hexToRgba(bgColor, opacity),
                borderRadius: '10px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: "100%",
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    gap: '16px'
                }}
            >
                <Box
                    sx={{
                        backgroundColor: bgColor,
                        borderRadius: '6px',
                        padding: '8px',
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {icon}
                </Box>
                <Box>
                    <Typography fontSize="16px" fontWeight='500'>
                        {title}
                    </Typography>
                    <Typography fontSize="14px" fontWeight='400'>
                        {subtitle}
                    </Typography>
                </Box>
            </Box>

            <Slider
                value={value}
                min={min}
                max={max}
                step={step}
                onChange={onChange}
                sx={{
                    color: bgColor,
                    width: '100%',
                    '& .MuiSlider-track': {
                        backgroundColor: bgColor,
                    },
                    '& .MuiSlider-rail': {
                        opacity: 0.5,
                    },
                    '& .MuiSlider-thumb': {
                        display: 'none',
                    },
                }}
            />

            <Typography fontSize="14px" fontWeight="400">
                {text} GB of 100 GB
            </Typography>
        </Paper>
    );
};

// Main Component to handle Grid Layout
const OverviewStorageCardsGrid: React.FC = () => {
    const [sliderValue, setSliderValue] = useState<number>(50);

    // Handle slider change event
    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setSliderValue(newValue as number);
        console.log(event)
    };

    // Array of cards with different properties
    const cards = [
        {
            bgColor: "#FF6B50",
            icon: (
                <Box sx={{ color: 'white', fontSize: 'large' }}>
                    <PhotoSizeSelectActualOutlinedIcon />
                </Box>
            ),
            title: "Image",
            subtitle: "120 items",
            text: `${sliderValue}`,
            value: sliderValue,
            onChange: handleSliderChange,
        },
        {
            bgColor: "#1FC5E4",
            icon: (
                <Box sx={{ color: 'white', fontSize: 'large' }}>
                    <OndemandVideoOutlinedIcon />
                </Box>
            ),
            title: "Videos",
            subtitle: "10 items",
            text: `${sliderValue}`,
            value: sliderValue,
            onChange: handleSliderChange,
        },
        {
            bgColor: "#57BF98",
            icon: (
                <Box sx={{ color: 'white', fontSize: 'large' }}>
                    <SnippetFolderOutlinedIcon />
                </Box>
            ),
            title: "Documents",
            subtitle: "220 items",
            text: `${sliderValue}`,
            value: sliderValue,
            onChange: handleSliderChange,
        },
        {
            bgColor: "#FFC21A",
            icon: (
                <Box sx={{ color: 'white', fontSize: 'large' }}>
                    <DevicesOtherOutlinedIcon />
                </Box>
            ),
            title: "Others",
            subtitle: "150 items",
            text: `${sliderValue}`,
            value: sliderValue,
            onChange: handleSliderChange,
        }
    ];

    return (
        <Grid container spacing={2}>
            {cards.map((card, index) => (
                <Grid item xs={6} sm={6} md={3} key={index}>
                    <OverviewStorageCardsLayout
                        bgColor={card.bgColor}
                        icon={card.icon}
                        title={card.title}
                        subtitle={card.subtitle}
                        text={card.text}
                        value={card.value}
                        onChange={card.onChange}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default OverviewStorageCardsGrid;
