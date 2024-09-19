import { FiBriefcase, FiHome, FiDollarSign, FiShoppingCart, FiShield, FiUsers, FiGlobe, FiZap, FiPenTool, FiKey, FiActivity } from "react-icons/fi";
import { FormattedMessage } from 'react-intl'


export const NavData = [
    {
        icon: <FiBriefcase />,
        class: 'genti1',
        title: <FormattedMessage id='corporate-law' defaultMessage='Corporate Law' />,
        to: '/',
    },
    {
        icon: <FiHome />,
        title: <FormattedMessage id='real-estate' defaultMessage='Real Estate' />,
        to: '/',
    },
    {
        icon: <FiDollarSign />,
        title: <FormattedMessage id='tax-costoms-laws' defaultMessage='Tax & Customs Laws' />,
        to: '/',
    },
    {
        icon: <FiShoppingCart />,
        title: <FormattedMessage id='public-procurement' defaultMessage='Public Procurement' />,
        to: '/',
    },
    {
        icon: <FiShield />,
        title: <FormattedMessage id='banking-finance' defaultMessage='Banking & Finance' />,
        to: '/',
    },
    {
        icon: <FiUsers />,
        title: <FormattedMessage id='insurance' defaultMessage='Insurance' />,
        to: '/',
    },
    {
        icon: <FiGlobe />,
        title: <FormattedMessage id='energy-infrastructure' defaultMessage='Energy & Infrastructure' />,
        to: '/',
    },
    {
        icon: <FiUsers />,
        title: <FormattedMessage id='family-law' defaultMessage='Family Law' />,
        to: '/',
    },
    {
        icon: <FiZap />,
        title: <FormattedMessage id='ict-sector' defaultMessage='ICT Sector' />,
        to: '/',
    },
    {
        icon: <FiPenTool />,
        title: <FormattedMessage id='labor-employment' defaultMessage='Labor & Employment' />,
        to: '/',
    },
    {
        icon: <FiKey />,
        title: <FormattedMessage id='intellectual-property-law' defaultMessage='Intellectual Property Law' />,
        to: '/',
    },
    {
        icon: <FiActivity />,
        title: <FormattedMessage id='criminal-law' defaultMessage='Criminal Law' />,
        to: '/',
    }
];
