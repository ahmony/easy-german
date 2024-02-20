import { Stack, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <Stack
      sx={{
        flexDirection: 'row',
        gap: '8px',
        justifyContent: 'end',
        alignItems: 'center',
      }}
    >
      <Typography variant="h6">Welcome, Ajdin</Typography>
      <AccountCircleIcon />
    </Stack>
  );
};

export default Header;
