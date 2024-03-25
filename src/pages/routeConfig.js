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

        ],
    },
];
export default routesConfig;
