import * as React from "react";
import { Link, createBrowserRouter } from "react-router-dom";

import Dashboard from "./screens";
import DashboardLayout from "./layouts/dashboard";

import Conditions from "./screens/conditions";
import AddCondition from "./screens/conditions/add";
import EditCondition from "./screens/conditions/edit";

import Conclusions from "./screens/conclusions";
import AddConclusion from "./screens/conclusions/add";
import EditConclusion from "./screens/conclusions/edit";

import LiveDemo from "./screens/live.demo";

const useRouter = () => {
    return createBrowserRouter(
        [
            {
                path: "/",
                element: <DashboardLayout />,
                errorElement: <>error</>,
                handle: {
                    crumb: () => <Link to="/">لوحة التحكم</Link>,
                },
                children: [
                    { index: true, element: <Dashboard /> },
                    {
                        path: "conclusions",
                        handle: {
                            crumb: () => <Link to="/conclusions">الامراض</Link>,
                        },
                        children: [
                            { index: true, element: <Conclusions /> },
                            {
                                path: "add",
                                element: <AddConclusion />,
                                handle: {
                                    crumb: () => (
                                        <Link to="/add">استنتاج جديد</Link>
                                    ),
                                },
                            },
                            {
                                path: ":id/edit",
                                element: <EditConclusion />,
                                handle: {
                                    crumb: () => (
                                        <Link to="/:id/edit">تعديل الاستنتاج</Link>
                                    ),
                                },
                            }
                        ],
                    },
                    {
                        path: "conditions",
                        handle: {
                            crumb: () => <Link to="/conditions">الاعراض</Link>,
                        },
                        children: [
                            { index: true, element: <Conditions /> },
                            {
                                path: "add",
                                element: <AddCondition />,
                                handle: {
                                    crumb: () => (
                                        <Link to="/add">عرض جديد</Link>
                                    ),
                                },
                            },
                            {
                                path: ":id/edit",
                                element: <EditCondition />,
                                handle: {
                                    crumb: () => (
                                        <Link to="/:id/edit">تعديل العرض</Link>
                                    ),
                                },
                            }
                        ],
                    },
                    {
                        path: "live-demo",
                        handle: {
                            crumb: () => <Link to="/live-demo">Live Demo</Link>
                        },
                        children: [
                            { index: true, element: <LiveDemo /> }
                        ],
                    }
                ],
            },
            {
                path: '/404',
                element: <>404</>
            }
        ]
    );
};

export default useRouter;
