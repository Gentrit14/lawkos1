import { FaBuilding, FaUniversity, FaLaptop, FaHome, FaShieldAlt, FaBriefcase } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl'

export const practiceAreasData = [
    {
        icon: <FaBuilding />,  // Corporate Law
        title: <FormattedMessage id='corporate-law' defaultMessage='Corporate Law' />,
        description: <FormattedMessage id='corporate-law-text' defaultMessage='Focusing on advising and representing corporations, their executives, and shareholders on various legal matters.' /> 
    },
    {
        icon: <FaUniversity />,  // Banking & Finance
        title: <FormattedMessage id='banking-finance' defaultMessage='Banking & Finance' />,
        description: <FormattedMessage id='banking-finance-text' defaultMessage='Specialized in legal issues concerning the transaction and regulation of financial instruments and institutions.' /> 
    },
    {
        icon: <FaLaptop />,  // ICT Sector
        title: <FormattedMessage id='ict-sectior' defaultMessage='ICT Sector' />,
        description: <FormattedMessage id='ict-sectior-text' defaultMessage='We help clients navigate through regulatory compliance, data protection, intellectual property issues, and e-commerce law.' /> 
    },
    {
        icon: <FaHome />,  // Real Estate
        title: <FormattedMessage id='real-estate' defaultMessage='Real Estate' />,
        description: <FormattedMessage id='real-estate-text' defaultMessage='We guide our clients through property transactions, ensuring all regulations are met and that contracts are legally sound.' /> 
    },
    {
        icon: <FaShieldAlt />,  // Insurance
        title: <FormattedMessage id='insurance' defaultMessage='Insurance' />,
        description: <FormattedMessage id='insurance-text' defaultMessage='We help our clients with legal issues concerning insurance policies and claims, like policy interpretation and fraud investigations.' />
    },
    {
        icon: <FaBriefcase />,  // Labor & Employment
        title: <FormattedMessage id='labor-employment' defaultMessage='Labor & Employment' />,
        description: <FormattedMessage id='labor-employment-text' defaultMessage='We can help on matters involving employer-employee relationships, including employment contracts and workplace discrimination.' /> 
    }
];
