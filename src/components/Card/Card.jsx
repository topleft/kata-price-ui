import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Card extends React.PureComponent {
  constructor() {
    super();
  }

  render() {
    const {
      buttonText,
      frequency,
      highlightText,
      list,
      price,
      title
    } = this.props;

    return (
      <div className='card'>
        <div className='card__highlight'>{highlightText}</div>
        <div className='card__title'>{title}</div>
        <div className='card__price'>
          <span className='card__price__currency-symbol'>$</span>
          <span className='card__price__amount'>{price}</span>
          <span className='card__price__frequency'>{frequency}</span>
        </div>
        <ul className='card__list'>
          {list.map((item, i) => <li key={i} className='card__list__item'>{item}</li>)}
        </ul>
        <button className='card__button'>{buttonText}</button>
      </div>
    );
  }
}

Card.propTypes = {
  buttonText: PropTypes.string,
  frequency: PropTypes.string,
  highlightText: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.number,
  title: PropTypes.string,
};

export default Card;
