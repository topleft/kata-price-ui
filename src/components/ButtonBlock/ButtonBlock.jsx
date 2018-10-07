import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class ButtonBlock extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
    };
  }

  handleClick(activeIndex, value) {
    this.setState({activeIndex});
    this.props.handleClick(value);
  }

  render() {
    const {buttons} = this.props;
    return (
      <div className='button-block'>
        {buttons.map((button, i) => {
          const isActive = this.state.activeIndex === i ? 'active' : '';
          return <button
            key={i}
            className={`button-block__button ${isActive}`}
            onClick={() => this.handleClick(i, button.value)} >
            {button.label}
          </button>;
        })}
      </div>
    );
  }
}

ButtonBlock.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.any,
  })).isRequired,
  handleClick: PropTypes.func,
};

export default ButtonBlock;
