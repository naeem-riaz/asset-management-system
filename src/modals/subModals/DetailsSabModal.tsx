import { Avatar, Box, Divider, Typography } from "@mui/material";
import img1 from '../../../public/Imgs/GoogleTesting2.png'
export default function DetailsSabModal() {
    return (
        <>
            <Box padding="4px">
                <img src={img1} width='100%' height={80} />
            </Box>
            <Box padding="8px">
                <Typography>Who has Accesss</Typography>
                <Avatar alt="Remy Sharp" src="../../../public/Imgs/Ellipse 2387.png" sx={{ width: '24px', height: 'auto', paddingTop: '4px' }} />
            </Box>
            <Divider />
            <Box padding="4px" display='flex' gap="4px" flexDirection='column' >
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: "12px", fontWeight: '600' }}>Type</Typography>
                    <Typography variant="body2">PDF</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: "12px", fontWeight: '600' }}>Size</Typography>
                    <Typography variant="body2">173 KB</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: "12px", fontWeight: '600' }}>Storage used</Typography>
                    <Typography variant="body2">173 KB</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: "12px", fontWeight: '600' }}>Location</Typography>
                    <Typography variant="body2">My Drive</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: "12px", fontWeight: '600' }}>Owner</Typography>
                    <Typography variant="body2">Me</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: "12px", fontWeight: '600' }}>Modified</Typography>
                    <Typography variant="body2">12 Aug 2023,by ,me</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: "12px", fontWeight: '600' }}>Created</Typography>
                    <Typography variant="body2">26 Sept 2023 </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: "12px", fontWeight: '600' }}>Download permissions</Typography>
                    <Typography variant="body2" color="#9EA6A9">Viewers can download</Typography>
                </Box>
            </Box>
            <Box>

            </Box>
        </>
    )
}
