import { RouteObject } from 'react-router-dom'

import TaxReturnPage from './pages/calcs/TaxReturnPage'
import Home from './pages/Home'
import MainTheme from './themes/MainTheme'

import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import HomeIcon from '@mui/icons-material/Home'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'


interface MenuItemProps {
    name: string;
    pageTitle?: string;
    to: string;
    icon: React.ElementType;
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
                name: '홈',
                to: '/',
                icon: HomeIcon,
            },
        ]
    },
    {
        name: '계산기',
        children: [
            {
                name: '모의 연말정산',
                pageTitle: '2024년 모의 연말정산 (2023년 귀속)',
                to: '/calcs/tax-return-2024',
                icon: AccountBalanceIcon,
            },
            {
                name: '채권이자 계산기',
                to: '/test',
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
                path: 'calcs',
                children: [
                    {
                        path: 'tax-return-2024',
                        element: <TaxReturnPage />
                    }
                ]
            }
        ]
    },
]

const getPageNamebyPath = (path: string): string => {
    for (const superMenu of menu) {
        for (const subMenu of superMenu.children) {
            if (subMenu.to !== path) continue

            const pageTitle = subMenu.pageTitle || subMenu.name

            if (superMenu.name) return `${superMenu.name} > ${pageTitle}`

            return pageTitle
        }
    }

    return ''
}

export { menu, route, getPageNamebyPath }

