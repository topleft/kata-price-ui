import React from 'react';
import Heading from '../Heading';
import ButtonBlock from '../ButtonBlock';
import './styles.scss';

const title = 'Pricing';
const subtitle = 'Sign up in less than 30 seconds. Try out our 7 day risk free trial, upgrade at anytime, no questions, no hassle.';
const buttons = [
  {label: 'Monthly'},
  {label: 'Annually'}
]

const Content = () => {
  return (
    <div className='content'>
      <header>
        <Heading title={title} subtitle={subtitle} />
      </header>
      <main>
        <ButtonBlock buttons={buttons}/>
      </main>
    </div>
  );
}

export default Content;
