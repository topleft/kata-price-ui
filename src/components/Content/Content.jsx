import React from 'react';
import Heading from '../Heading';
import ButtonBlock from '../ButtonBlock';
import CardContainer from '../CardContainer';
import './styles.scss';

import {PricesApi} from '../../api';

const title = 'Pricing';
const subtitle = 'Sign up in less than 30 seconds. Try out our 7 day risk free trial, upgrade at anytime, no questions, no hassle.';
const buttons = [
  {label: 'Monthly', value: 'mo'},
  {label: 'Annually', value: 'year'}
];

class Content extends React.Component {

  constructor() {
    super();
    this.state = {
      cards: [],
      frequency: 'mo'
    };
  }

  componentDidMount() {
    this.getPrices();
  }

  getPrices() {
    PricesApi.getPrices()
      .then((prices) => this.setState({cards: prices}))
      .catch(console.error);
  }

  handleFrequencyClick(frequency) {
    this.setState({frequency});
  }

  render() {
    const {cards, frequency} = this.state;
    return (
      <div className='content'>
        <header>
          <Heading title={title} subtitle={subtitle} />
        </header>
        <main>
          <ButtonBlock buttons={buttons} handleClick={(value) => { this.handleFrequencyClick(value);}}/>
          <CardContainer cards={cards} frequency={frequency}/>
        </main>
      </div>
    );
  }
}

export default Content;
