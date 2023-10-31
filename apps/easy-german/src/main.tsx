import * as ReactDOM from "react-dom/client"
import App from "./app/app"
import "./styles.css"
import { ThemeProvider } from "@mui/material"
import theme from "../../../customMuiSetup"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <ThemeProvider theme={theme}>
    <div className="base">
      <App />
    </div>
  </ThemeProvider>
)
