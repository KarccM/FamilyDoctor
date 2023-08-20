// component
import Iconify from "../../components/Iconify";
import * as React from "react";

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
    {
        title: "الامراض",
        path: "/conclusions",
        icon: getIcon('tabler:report-medical')
    },
    {
        title: 'الاعراض',
        path: '/conditions',
        icon: getIcon('maki:doctor')
    },
    {
        title: 'العرض التجريبي',
        path: 'live-demo',
        icon: getIcon('fluent:live-24-filled')
    }
];

export default navConfig;
