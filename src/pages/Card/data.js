import { FormattedMessage } from 'react-intl'

import Card1 from '../../img/card1.png'
import Card2 from '../../img/card2.png'
import Card3 from '../../img/card3.png'

export const Data1 = [
  {
      id: 0,
      img: Card1,
      name: <FormattedMessage id='person-name1' defaultMessage='Labinot Halimi' />,
      position: <FormattedMessage id='person-position1' defaultMessage='Managing Partner' />,
      description: <FormattedMessage id='person-description1' defaultMessage='Labinot has been working with LawKos for over 10 years. He has helped a lot of our clients achieve their goals with their cases...' />
  },
  {
    id: 1,
    img: Card2,
      name: <FormattedMessage id='person-name2' defaultMessage='Arbenita Jashari' />,
      position: <FormattedMessage id='person-position2' defaultMessage='Attorney at law, Partner' />,
      description: <FormattedMessage id='person-description2' defaultMessage='Arbenita has been working with LawKos for over 10 years. He has helped a lot of our clients achieve their goals with their cases...' />
  },
  {
    id: 2,
      img: Card3,
      name: <FormattedMessage id='person-name3' defaultMessage='Festina Murati' />,
      position: <FormattedMessage id='person-position3' defaultMessage='Attorney at law' />,
      description: <FormattedMessage id='person-description3' defaultMessage='Festina has been working with LawKos for over 10 years. He has helped a lot of our clients achieve their goals with their cases...' />
  },
];