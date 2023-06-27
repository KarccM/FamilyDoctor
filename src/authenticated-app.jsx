import React from "react";
import { ToastContainer } from "react-toastify";
import { useTheme } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import useRouter from "./routes";

function AuthenticatedApp() {
    const { palette } = useTheme();
    const Router = useRouter();
    return (
        <>
            <RouterProvider router={Router} />
            <ToastContainer
                theme={palette?.mode}
            />
        </>
    );
}

export default AuthenticatedApp;
