import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

interface MenuItemProps {
    name: string;
    to: string;
    icon: any;
    disabled?: boolean;
}

export default [
    {
        name: "홈",
        to: "/",
        icon: HomeIcon,
    },
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
] as Array<MenuItemProps>;