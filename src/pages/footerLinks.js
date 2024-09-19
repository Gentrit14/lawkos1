import { FormattedMessage } from 'react-intl'
const footerLinks = [
    {
      title: <FormattedMessage id='about' defaultMessage='ABOUT' />,
      links: [
        { label: <FormattedMessage id='footer-link1' defaultMessage='Our Story' />, url: '#' },
        { label: <FormattedMessage id='footer-link2' defaultMessage='Our Team' />, url: '#' },
        { label: <FormattedMessage id='footer-link3' defaultMessage='Careers' />, url: '#' },
        { label: <FormattedMessage id='footer-link4' defaultMessage='Clients & Partners' />, url: '#' },
      ],
    },
    {
      title: <FormattedMessage id='services' defaultMessage='SERVICES' />,
      links: [
        { label: <FormattedMessage id='footer-link5' defaultMessage='Practice Area' />, url: '#' },
        { label: <FormattedMessage id='footer-link6' defaultMessage='Solutions' />, url: '#' },
        { label: <FormattedMessage id='footer-link7' defaultMessage='Legal Tech' />, url: '#' },
        { label: <FormattedMessage id='footer-link8' defaultMessage='Case Studies' />, url: '#' },
      ],
    },
    {
      title: <FormattedMessage id='resurces' defaultMessage='RESOURCES' />,
      links: [
        { label: <FormattedMessage id='footer-link9' defaultMessage='Contact Us' />, url: '#' },
        { label: <FormattedMessage id='footer-link10' defaultMessage='Latest News' />, url: '#' },
        { label: <FormattedMessage id='footer-link11' defaultMessage='Insights' />, url: '#' },
        { label: <FormattedMessage id='footer-link12' defaultMessage='Legal Notices' />, url: '#' },
      ],
    },
  ];
  
  export default footerLinks;
  