// component
import Iconify from "../../components/Iconify";
import * as React from "react";

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
    {
        title: "الامراض",
        path: "/diseases",
        icon: getIcon('tabler:report-medical')
    },
    {
        title: 'الاعراض',
        path: '/conditions',
        icon: getIcon('maki:doctor')
    },
];

export default navConfig;
