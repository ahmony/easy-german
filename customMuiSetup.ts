import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    h4: { fontFamily: "Edu TAS Beginner, sans-serif" },
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          paddingTop: "15px",
          paddingBottom: "15px",
          backgroundColor: "black",
          "&:hover": {
            backgroundColor: "#3b8ac4",
          },
          "&.Mui-selected": {
            backgroundColor: "#345DA7",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#345DA7",
          },
        },
      },
    },
  },
})

export default theme
