import PropTypes from "prop-types";
import * as React from "react";
import { useEffect } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
// material
import { Avatar, Box, Drawer, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
// mock
// hooks
import useResponsive from "../../hooks/useResponsive";
// components
// import Logo from "../../components/Logo";
import NavSection from "../../components/NavSection";
import Scrollbar from "../../components/Scrollbar";

import navConfig from "./NavConfig";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("lg")]: {
        flexShrink: 0,
        width: DRAWER_WIDTH,
    },
}));

const AccountStyle = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2, 2.5),
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    backgroundColor: theme.palette.grey[500_12],
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
    isOpenSidebar: PropTypes.bool,
    onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
    const { pathname } = useLocation();
    const isDesktop = useResponsive("up", "lg");

    useEffect(() => {
        if (isOpenSidebar) {
            onCloseSidebar();
        }
    }, [pathname]);
    const renderContent = (
        <Scrollbar>
            <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
                {/* <Logo /> */}
                logo
            </Box>

            <Box sx={{ mb: 5, mx: 2.5 }}>
                <Link underline="none" component={RouterLink} to="profile">
                    <AccountStyle>
                        <Avatar alt="profile-URL" />
                        <Box sx={{ ml: 2 }}>
                            <Typography
                                variant="subtitle2"
                                sx={{ color: "text.primary" }}
                            >
                                KAREEM
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: "text.secondary" }}
                            >
                                KAREEM-DOCTOR
                            </Typography>
                        </Box>
                    </AccountStyle>
                </Link>
            </Box>

            <NavSection navConfig={navConfig} />
        </Scrollbar>
    );

    return (
        <RootStyle>
            {!isDesktop && (
                <Drawer
                    open={isOpenSidebar}
                    onClose={onCloseSidebar}
                    PaperProps={{
                        sx: { width: DRAWER_WIDTH },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}

            {isDesktop && (
                <Drawer
                    open
                    variant="persistent"
                    PaperProps={{
                        sx: {
                            width: DRAWER_WIDTH,
                            bgcolor: "background.default",
                            borderRightStyle: "dashed",
                        },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}
        </RootStyle>
    );
}
