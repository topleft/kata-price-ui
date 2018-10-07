import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './styles.scss';


class CardContainer extends React.PureComponent {

  renderCards() {
    const {cards, frequency} = this.props;
    return cards.map((card, i) => {
      const price = card.pricePer[frequency];
      return <Card key={i} {...card} price={price} frequency={frequency} buttonText={'Sign Up Today'}/>;
    });
  }

  render() {
    return (
      <div className='card-container'>
        {this.renderCards()}
      </div>
    );
  }
}

CardContainer.propTypes = {
  frequency: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.shape({
    highlightText: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string),
    pricePer: PropTypes.object,
    title: PropTypes.string,
  })),
};

export default CardContainer;
