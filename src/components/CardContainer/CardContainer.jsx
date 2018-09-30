import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './styles.scss';

const cards = [
  {
    buttonText: 'Sign Up Today',
    frequency: '/mo',
    list: ['Cras sodales lobortis erat', 'Vitae pellentesque diam', 'Consequat eted tempus'],
    price: 0,
    title: 'Free'
  },
  {
    buttonText: 'Sign Up Today',
    frequency: '/mo',
    list: ['Cras sodales lobortis erat', 'Vitae pellentesque diam', 'Consequat eted tempus'],
    price: 99,
    title: 'Professional'
  },
  {
    buttonText: 'Sign Up Today',
    frequency: '/mo',
    highlightText: 'Recommended',
    list: ['Cras sodales lobortis erat', 'Vitae pellentesque diam', 'Consequat eted tempus'],
    price: 219,
    title: 'Small Business'
  },
  {
    buttonText: 'Sign Up Today',
    frequency: '/mo',
    list: ['Cras sodales lobortis erat', 'Vitae pellentesque diam', 'Consequat eted tempus'],
    price: 419,
    title: 'Enterprise'
  }
];

class CardContainer extends React.PureComponent {
  constructor() {
    super();
  }

  render() {

    return (
      <div className='card-container'>
        {cards.map((card, i) => (
          <Card key={i} {...card}/>
        ))}
      </div>
    );
  }
}

CardContainer.propTypes = {
  buttonText: PropTypes.string,
  frequency: PropTypes.string,
  highlightText: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.number,
  title: PropTypes.string,
};

export default CardContainer;
