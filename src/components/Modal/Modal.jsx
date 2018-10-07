import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Modal extends React.Component {
  render() {

    const {title, body} = this.props;

    return (
      <div className='backdrop'>
        <div className='modal'>
          <div className='modal__header'>
            <h2>{title}</h2>
          </div>
          <div className='modal__body'>
            <p>
              {body}
            </p>
          </div>
          <div className='modal__footer'>
            <button onClick={this.props.closeModal}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  title: PropTypes.string,
  closeModal: PropTypes.func,
};

export default Modal;
