import { Avatar, Box, Divider, Typography } from "@mui/material";
import img1 from '../../../public/Imgs/GoogleTesting2.png';
import avatarImg from '../../../public/Imgs/Ellipse 2387.png';

export default function DetailsSabModal() {
    return (
        <>
            <Box paddingX="4px">
                <img src={img1} alt="Document" width='100%' height={80} />
            </Box>
            <Box padding="4px 8px" display="flex" flexDirection="column" gap={1}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>Who has Access</Typography>
                <Avatar alt="Remy Sharp" src={avatarImg} sx={{ width: '24px', height: '24px' }} />
            </Box>

            <Divider />

            <Box padding="4px" display="flex" gap={1} flexDirection="column">
                {[
                    { label: 'Type', value: 'PDF' },
                    { label: 'Size', value: '173 KB' },
                    { label: 'Storage used', value: '173 KB' },
                    { label: 'Location', value: 'My Drive' },
                    { label: 'Owner', value: 'Me' },
                    { label: 'Modified', value: '12 Aug 2023, by me' },
                    { label: 'Created', value: '26 Sept 2023' },
                    { label: 'Download permissions', value: 'Viewers can download', color: '#9EA6A9' },
                ].map(({ label, value, color }) => (
                    <Box key={label} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>{label}</Typography>
                        <Typography variant="body2" color={color || 'textPrimary'}>{value}</Typography>
                    </Box>
                ))}
            </Box>

            <Box display='flex' gap={1} flexDirection='column'>
                {[
                    { label: 'Description', placeholder: 'Add Description' },
                    { label: 'Tags', placeholder: 'Add Tags' },
                ].map(({ label, placeholder }) => (
                    <Box key={label}>
                        <Typography sx={{ fontSize: "12px", fontWeight: 600, paddingX: "4px", paddingBottom: "4px" }}>
                            {label}
                        </Typography>
                        <input
                            placeholder={placeholder}
                            style={{
                                border: 'none',
                                outline: 'none',
                                backgroundColor: '#EFF7FF',
                                padding: "4px 12px",
                                width: '100%',
                                borderRadius: '4px',
                            }}
                        />
                    </Box>
                ))}
            </Box>
        </>
    )
}
