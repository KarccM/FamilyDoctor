import * as React from "react";
// theme
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
// components
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import { useTheme } from "@mui/material/styles";
import useRouter from "./routes";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const { palette } = useTheme();
  const Router = useRouter();

  return (
    <RecoilRoot>
      <ThemeConfig>
        <GlobalStyles />
        <RouterProvider router={Router} />
        <ToastContainer
          theme={palette?.mode}
        />      </ThemeConfig>
    </RecoilRoot>
  );
}
export default App;
