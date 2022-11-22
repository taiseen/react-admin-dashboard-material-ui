import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export const sidebarMenu = [
    {
        title: 'Dashboard',
        icon: HomeOutlinedIcon,
        path: '/',
    },
    {
        title: 'Info',
        tag: 'divider'
    },
    {
        title: 'Manage Team',
        icon: PeopleOutlinedIcon,
        path: '/team',
    },
    {
        title: 'Contacts Information',
        icon: ContactsOutlinedIcon,
        path: '/contacts',
    },
    {
        title: 'Invoices Balances',
        icon: ReceiptOutlinedIcon,
        path: '/invoices',
    },
    {
        title: 'Inputs',
        tag: 'divider'
    },
    {
        title: 'Profile Form',
        icon: PersonOutlinedIcon,
        path: '/form',
    },
    {
        title: 'Calendar',
        icon: CalendarTodayOutlinedIcon,
        path: '/calendar',
    },
    {
        title: 'FAQ Page',
        icon: HelpOutlineOutlinedIcon,
        path: '/faq',
    },
    {
        title: 'Charts',
        tag: 'divider'
    },
    {
        title: 'Bar Chart',
        icon: BarChartOutlinedIcon,
        path: '/bar',
    },
    {
        title: 'Pie Chart',
        icon: PieChartOutlineOutlinedIcon,
        path: '/pie',
    },
    {
        title: 'Line Chart',
        icon: TimelineOutlinedIcon,
        path: '/line',
    },
    {
        title: 'Geography Chart',
        icon: MapOutlinedIcon,
        path: '/geography',
    },
]