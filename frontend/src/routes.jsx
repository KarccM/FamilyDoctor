import * as React from "react";
import { Link, createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard";
import AddSymptom from "./screens/symptoms/add";
import EditSymptom from "./screens/symptoms/edit";
import Dashboard from "./screens";


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
                        path: "diseases",
                        handle: {
                            crumb: () => <Link to="/diseases">الامراض</Link>,
                        },
                        children: [
                            { index: true, element: <>الامراض</> },
                            {
                                path: "add",
                                element: <>مرض جديد</>,
                                handle: {
                                    crumb: () => (
                                        <Link to="/add">مرض جديد</Link>
                                    ),
                                },
                            },
                            {
                                path: ":id/edit",
                                element: <>تعديل المرض</>,
                                handle: {
                                    crumb: () => (
                                        <Link to="/:id/edit">تعديل المرض</Link>
                                    ),
                                },
                            },
                            {
                                path: ':id',
                                element: <>تفاصيل المرض</>,
                                handle: {
                                    crumb: () => (
                                        <Link to="/:id">تفاصيل المرض</Link>
                                    ),
                                },
                            },
                        ],
                    },
                    {
                        path: "symptoms",
                        handle: {
                            crumb: () => <Link to="/symptoms">الاعراض</Link>,
                        },
                        children: [
                            { index: true, element: <>الاعراض</> },
                            {
                                path: "add",
                                element: <AddSymptom />,
                                handle: {
                                    crumb: () => (
                                        <Link to="/add">عرض جديد</Link>
                                    ),
                                },
                            },
                            {
                                path: ":id/edit",
                                element: <EditSymptom />,
                                handle: {
                                    crumb: () => (
                                        <Link to="/:id/edit">تعديل العرض</Link>
                                    ),
                                },
                            },
                            {
                                path: ':id',
                                element: <>تفاصيل العرض</>,
                                handle: {
                                    crumb: () => (
                                        <Link to="/:id">تفاصيل العرض</Link>
                                    ),
                                },
                            },
                        ],
                    },
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
