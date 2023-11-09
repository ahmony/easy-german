import React from "react"
import { Sidebar } from "@easy-german/shared/components/sidebar/Sidebar"
import { Box, Stack } from "@mui/material"
import { Navigate, Route, Routes } from "react-router-dom"

export function App() {
  return (
    <Stack sx={{ flexDirection: "row", height: "100%", backgroundColor: "#000000", color: "#ececec" }}>
      <Sidebar />
      <Box sx={{ flex: 1, padding: "30px" }}>
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="home" element={<div>home</div>} />
          <Route path="playground" element={<div>playground</div>} />
          <Route path="rules" element={<div>rules</div>} />
        </Routes>
      </Box>
    </Stack>
  )
}

export default App
