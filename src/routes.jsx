import * as React from "react";
import { Link, createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard";


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
                    {
                        path: "sick",
                        handle: {
                            crumb: () => <Link to="/sick">الامراض</Link>,
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
