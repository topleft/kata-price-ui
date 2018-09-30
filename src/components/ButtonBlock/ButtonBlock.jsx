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

  handleClick(activeIndex) {
    this.setState({activeIndex});
  }

  render() {
    const {buttons} = this.props;
    // TODO: refactor into radio set
    return (
      <div className='button-block'>
        {buttons.map((button, i) => {
          const isActive = this.state.activeIndex === i ? 'active' : '';
          return <button
            key={i}
            className={`button-block__button ${isActive}`}
            onClick={() => this.handleClick(i)} >
            {button.label}
          </button>;
        })}
      </div>
    );
  }
}

ButtonBlock.propTypes = {
  buttons: PropTypes.array.isRequired,
};

export default ButtonBlock;
