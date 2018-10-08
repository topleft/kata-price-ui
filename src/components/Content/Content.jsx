import React from 'react';
import Heading from '../Heading';
import ButtonBlock from '../ButtonBlock';
import CardContainer from '../CardContainer';
import Modal from '../Modal';
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
      card: null,
      frequency: 'mo',
      showModal: false
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

  handleCardClick(id) {
    this.state.cards.filter((card) => {
      if (card.id == id) {
        this.setState({card});
      }
      this.toggleModal();
    });
  }

  renderModal() {
    const {card, frequency} = this.state;

    const subtitle = `The ${card.title} Plan for $${card.pricePer[frequency]} /${frequency}.`;
    const body = 'Fusce suscipit libero eget elit. Praesent dapibus. Nullam rhoncus aliquam metus. Nulla non arcu lacinia neque faucibus fringilla. Nullam eget nisl. Etiam dictum tincidunt diam. Curabitur bibendum justo non orci. Duis condimentum augue id magna semper rutrum. Curabitur sagittis hendrerit ante. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Nullam at arcu a est sollicitudin euismod. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis.';
    return <Modal
      title={'Sign Up!'}
      subtitle={subtitle}
      body={body}
      buttonText={'Confirm'}
      closeModal={() => this.toggleModal()}/>;
  }

  toggleModal() {
    this.setState({showModal: !this.state.showModal});
  }

  render() {
    const {
      cards,
      frequency,
      showModal
    } = this.state;

    return (
      <div className='content'>
        <header>
          <Heading title={title} subtitle={subtitle} />
        </header>
        <main>
          <ButtonBlock buttons={buttons} handleClick={(value) => this.handleFrequencyClick(value)}/>
          <CardContainer cards={cards} frequency={frequency} handleClick={(id) => this.handleCardClick(id)}/>
        </main>
        {showModal ? this.renderModal() : null}
      </div>
    );
  }
}

export default Content;
