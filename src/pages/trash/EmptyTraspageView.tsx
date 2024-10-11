import { Box, Typography } from "@mui/material";

export default function EmptyTraspageView() {
    return (

        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                component="img"
                src="../../../public/Imgs/TrashPageImg.png"
                sx={{
                    width: {
                        xs: '250px',
                        sm: '280px',
                        md: '330px'
                    }
                }}
            />
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="8px"
            >
                <Typography variant="h2">Your Trash is Empty</Typography>
                <Typography
                    component="div"
                    alignSelf="center"
                    style={{ textAlign: 'center', color: '#9EA6A9' }}
                >
                    It looks like there's nothing here!
                    <br />
                    If you no longer need certain items, move them to the trash.
                    <br />
                    Remember, items in the trash will be deleted permanently after 30 days.

                </Typography>

            </Box>
        </Box>
    );
}
