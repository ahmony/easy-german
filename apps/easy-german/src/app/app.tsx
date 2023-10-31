import React from "react"
import { Sidebar } from "@easy-german/shared"
import { Stack } from "@mui/material"

export function App() {
  return (
    <Stack sx={{ flexDirection: "row", height: "100%" }}>
      <Sidebar />
    </Stack>
  )
}

export default App
