import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Heading = (props) => {
  return (
    <div className='heading'>
      <p className='heading__title'>{props.title}</p>
      <p className='hadding__subtitle'>{props.subtitle}</p>
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Heading;
