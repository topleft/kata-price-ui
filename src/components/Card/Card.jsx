import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Card extends React.PureComponent {
  constructor() {
    super();
  }

  renderHightlight() {
    const {highlightText} = this.props;
    const className = highlightText ? 'card__highlight' : 'card__highlight--no-background';
    return <div className={className}>{highlightText || '&nbsp;'}</div>
  }

  render() {
    const {
      buttonText,
      frequency,
      handleButtonClick,
      id,
      list,
      price,
      title,
    } = this.props;

    return (
      <div className='card'>
        {this.renderHightlight()}
        <div className='card__title'>{title}</div>
        <div className='card__price'>
          <span className='card__price__currency-symbol'>$</span>
          <span className='card__price__amount'>{price}</span>
          <span className='card__price__frequency'>/{frequency}</span>
        </div>
        <ul className='card__list'>
          {list.map((item, i) => <li key={i} className='card__list__item'>{item}</li>)}
        </ul>
        <button className='card__button' onClick={() => handleButtonClick(id)}>{buttonText}</button>
      </div>
    );
  }
}

Card.defaultProps = {
  list: [],
};

Card.propTypes = {
  buttonText: PropTypes.string,
  frequency: PropTypes.oneOf('mo', 'year'),
  handleButtonCLick: PropTypes.func,
  highlightText: PropTypes.string,
  id: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.number,
  title: PropTypes.string,
};

export default Card;
