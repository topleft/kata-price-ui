import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './styles.scss';


class CardContainer extends React.PureComponent {
  constructor() {
    super();
  }

  render() {
    const {cards} = this.props;
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
  cards: PropTypes.arrayOf(PropTypes.shape({
    frequency: PropTypes.string,
    highlightText: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
    title: PropTypes.string,
  })),
};

export default CardContainer;
