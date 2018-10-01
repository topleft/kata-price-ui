import React from 'react';
import Heading from '../Heading';
import ButtonBlock from '../ButtonBlock';
import CardContainer from '../CardContainer';
import './styles.scss';

import {PricesApi} from '../../api';

const title = 'Pricing';
const subtitle = 'Sign up in less than 30 seconds. Try out our 7 day risk free trial, upgrade at anytime, no questions, no hassle.';
const buttons = [
  {label: 'Monthly', value: '/mo'},
  {label: 'Annually', value: '/year'}
];

const cards = [
  {
    buttonText: 'Sign Up Today',
    frequency: '/mo',
    list: ['Cras sodales lobortis erat', 'Vitae pellentesque diam', 'Consequat eted tempus'],
    pricePerMonth: 0,
    pricePerYear: 0,
    title: 'Free'
  },
  {
    buttonText: 'Sign Up Today',
    frequency: '/mo',
    list: ['Aliquet diam gravida', 'Phasellus eu condimentum', 'Metus non venenatis turpis'],
    pricePerMonth: 99,
    pricePerYear: 99*11,
    title: 'Professional'
  },
  {
    buttonText: 'Sign Up Today',
    frequency: '/mo',
    highlightText: 'Recommended',
    list: ['Cras sodales lobortis erat', 'Vitae pellentesque diam', 'Consequat eted tempus'],
    pricePerMonth: 219,
    pricePerYear: 219*11,
    title: 'Small Business'
  },
  {
    buttonText: 'Sign Up Today',
    frequency: '/mo',
    list: ['Cras sodales lobortis erat', 'Vitae pellentesque diam', 'Consequat eted tempus'],
    pricePerMonth: 419,
    pricePerYear: 419*11,
    title: 'Enterprise'
  }
];


class Content extends React.Component {

  constructor() {
    super();
    this.state = {
      cards
    };
  }

  componentDidMount() {
    this.getPrices()
  }

  getPrices() {
    // PricesApi.getPrices()
    //   .then((prices) => this.setState({cards: prices}))
    //   .catch(console.error);
  }

  handleFrequencyClick(value) {
    const cards = this.state.cards.map((c) => {
      c.frequency = value;
      return c;
    });
    this.setState({cards})
  }

  render() {
    const {cards} = this.state
    return (
      <div className='content'>
        <header>
          <Heading title={title} subtitle={subtitle} />
        </header>
        <main>
          <ButtonBlock buttons={buttons} handleClick={(value) => { this.handleFrequencyClick(value)}}/>
          <CardContainer cards={cards}/>
        </main>
      </div>
    );
  }
}

export default Content;
