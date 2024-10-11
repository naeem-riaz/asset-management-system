import { Avatar, Box, Button, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import ProfileModal from "./profile-modals/Profile-Modals";



export default function ProfilePage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Box
        sx={{
          padding: {
            xs: '10px',
            sm: '20px',
            md: '30px'
          }
        }}
      >
        <Typography variant="h3">
          Profile
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          border: '1px solid #D8DBDD',
          justifyItems: 'center',
          justifyContent: 'space-between',
          borderRadius: '4px',
          padding: "12px",
          marginX: {
            xs: '10px',
            sm: '20px',
            md: '30px'
          }
        }}
      >
        <Box display='flex' justifyItems='center' gap="16px" >
          <Avatar alt="Remy Sharp" src="../../../public/Imgs/Rectangle 70.png" />
          <Box>
            <Typography variant="h4">
              Jenny Wilson
            </Typography>
            <Typography variant="body2" color="#9EA6A9">
              jenny.wilson@example.com
            </Typography>
          </Box>
        </Box>
        <Button startIcon={<EditIcon />} onClick={handleOpenModal} sx={{ backgroundColor: "#F8F8F8", color: '#03111E', fontSize: '16px' }}>
          Edit
        </Button>
      </Box>
      <ProfileModal open={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}
