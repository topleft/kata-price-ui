import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Modal extends React.Component {
  render() {

    const {title, subtitle, body, buttonText} = this.props;

    return (
      <div className='backdrop'>
        <div className='modal'>
          <div className='modal__header'>
            <p>{title}</p>
            <p onClick={this.props.closeModal} className='close'></p>
          </div>
          <div className='modal__subtitle'>
            <p>
              {subtitle}
            </p>
          </div>
          <div className='modal__body'>
            <p>
              {body}
            </p>
          </div>
          <div className='modal__footer'>
            <button onClick={this.props.closeModal}>{buttonText}</button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  body: PropTypes.string,
  closeModal: PropTypes.func,
};

export default Modal;
