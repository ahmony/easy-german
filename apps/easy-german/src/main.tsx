import * as ReactDOM from "react-dom/client"
import App from "./app/app"
import "./styles.css"
import { ThemeProvider } from "@mui/material"
import theme from "../../../customMuiSetup"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <div className="base">
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </div>
)
