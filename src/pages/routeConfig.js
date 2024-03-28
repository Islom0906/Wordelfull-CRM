import {IoIosStats} from "react-icons/io";


const routesConfig = [
    {
        id: 'app',
        title: 'Sample',
        messageId: 'sidebar.sample',
        type: 'group',
        children: [
            {
                id: 'pdf',
                title: 'pdf',
                messageId: 'sidebar.sample.pdf',
                type: 'item',
                icon: <IoIosStats/>,
                path: '/pdf',
            },
            {
                id: 'slot',
                title: 'slot',
                messageId: 'sidebar.sample.slot',
                type: 'item',
                icon: <IoIosStats/>,
                path: '/slot',
            },
            {
                id: 'house',
                title: 'house',
                messageId: 'sidebar.sample.house',
                type: 'item',
                icon: <IoIosStats/>,
                path: '/house',
            },
            {
                id: 'floor',
                title: 'floor',
                messageId: 'sidebar.sample.floor',
                type: 'item',
                icon: <IoIosStats/>,
                path: '/floor',
            },
            {
                id: 'payment',
                title: 'payment',
                messageId: 'sidebar.sample.payment',
                type: 'item',
                icon: <IoIosStats/>,
                path: '/payment',
            },
            {
                id: 'user',
                title: 'user',
                messageId: 'sidebar.sample.user',
                type: 'item',
                icon: <IoIosStats/>,
                path: '/user',
            },
            {
                id: 'course',
                title: 'course',
                messageId: 'sidebar.sample.course',
                type: 'item',
                icon: <IoIosStats/>,
                path: '/course',
            },
        ],
    },
];
export default routesConfig;
