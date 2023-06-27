// component
import Iconify from "../../components/Iconify";
import * as React from "react";

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
    {
        title: "roles",
        path: "/roles",
        icon: getIcon('mdi:account-security-outline')
    },
    {
        title: 'sessions',
        path: '/sessions',
        icon: getIcon('bx:table')
    },
    {
        title: 'countries',
        path: '/countries',
        icon: getIcon('ion:earth-outline')
    },
    {
        title: 'courses',
        path: '/courses',
        icon: getIcon('ph:chalkboard-teacher-duotone')
    },
    {
        title: 'blogs',
        path: '/blogs',
        icon: getIcon('iconoir:page')
    },
    {
        title: "users",
        path: "/users",
        icon: getIcon("eva:people-fill"),
    },
];

export default navConfig;
