import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h4: { fontFamily: 'Edu TAS Beginner, sans-serif' },
    h6: { fontFamily: 'Edu TAS Beginner, sans-serif' },
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          paddingTop: '15px',
          paddingBottom: '15px',
          '&:hover': {
            backgroundColor: '#cccccc',
          },
          '&.Mui-selected': {
            backgroundColor: '#bbbbbb',
            color: '#ffffff',
          },
          '&.Mui-selected:hover': {
            backgroundColor: '#bbbbbb',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
            {
              border: '2px solid #bdbdbd',
            },
          '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            border: '2px solid #bdbdbd',
          },
        },
      },
    },
  },
});

export default theme;
