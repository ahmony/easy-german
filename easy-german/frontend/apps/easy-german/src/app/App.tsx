import { Box, Stack } from '@mui/material';
import { Routes } from 'react-router-dom';
import { routes } from '../routes';
import Header from '../../../../libs/easy-german-lib/src/components/header/Header';
import { Sidebar } from '../../../../libs/easy-german-lib/src/components/sidebar/Sidebar';

export function App() {
  return (
    <Stack
      sx={{
        flexDirection: 'row',
        height: '100%',
      }}
      data-testid="app"
    >
      <Sidebar />
      <Box sx={{ flex: 1, padding: '30px', backgroundColor: 'white' }}>
        <Header />
        <Routes children={routes} />
      </Box>
    </Stack>
  );
}

export default App;
