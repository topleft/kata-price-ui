import React from 'react';
import Heading from '../Heading';
import ButtonBlock from '../ButtonBlock';
import CardContainer from '../CardContainer';
import Modal from '../Modal';
import './styles.scss';
import modalBodyText from '../../mockData/modalBodyText.json';
import {PricesApi} from '../../api';


class Content extends React.Component {

  title = 'Pricing';
  subtitle = 'Sign up in less than 30 seconds. Try out our 7 day risk free trial, upgrade at anytime, no questions, no hassle.';
  buttons = [
    {label: 'Monthly', value: 'mo'},
    {label: 'Annually', value: 'year'}
  ];

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
    const body = modalBodyText.content;
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
          <Heading title={this.title} subtitle={this.subtitle} />
        </header>
        <main>
          <ButtonBlock buttons={this.buttons} handleClick={(value) => this.handleFrequencyClick(value)}/>
          <CardContainer cards={cards} frequency={frequency} handleClick={(id) => this.handleCardClick(id)}/>
        </main>
        {showModal ? this.renderModal() : null}
      </div>
    );
  }
}

export default Content;
