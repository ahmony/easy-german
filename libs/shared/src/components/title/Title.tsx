import { Stack, Typography } from "@mui/material"
import { classes } from "./Title.styles"

export const Title = () => {
  return (
    <Stack sx={classes.container}>
      <Typography variant="h4" sx={classes.title}>
        Easy german
      </Typography>
    </Stack>
  )
}
