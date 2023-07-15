import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

import MainTheme from './theme/MainTheme'
import { RouteObject } from 'react-router-dom';
import Home from './page/Home';

interface MenuItemProps {
    name: string;
    to: string;
    icon: any;
    disabled?: boolean;
}

interface MenuItemsProps {
    name?: string;
    children: Array<MenuItemProps>;
    disabled?: boolean;
}

const menu: Array<MenuItemsProps> = [
    {
        children: [
            {
                name: "홈",
                to: "/",
                icon: HomeIcon,
            },
        ]
    },
    {
        name: "계산기",
        children: [
            {
                name: "모의 연말정산",
                to: "/test",
                icon: AccountBalanceIcon,
            },
            {
                name: "채권이자 계산기",
                to: "/test",
                icon: ReceiptLongIcon,
            },
        ]
    },
]

const route: Array<RouteObject> = [
    {
        path: '/',
        element: <MainTheme />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'test',
                element: <div>Test</div>
            }
        ]
    },
]

export { menu, route }

