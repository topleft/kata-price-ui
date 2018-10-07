import React from 'react';
import {shallow} from 'enzyme';
import Card from './Card';

describe('PriceCard', () => {

  it('should render', () => {
    const wrapper = shallow(<Card/>);
    expect(wrapper.exists());
  });



  it('should render a highlight if highlightText prop is passed', () => {
    const highlightText = 'Sample';
    const wrapper = shallow(<Card highlightText={highlightText} />);
    expect(wrapper.find('.card__highlight').text()).toBe(highlightText);
  });

  it('should NOT render a highlight, but should render a space holder, if highlightText prop is falsey', () => {
    const wrapper = shallow(<Card />);

    wrapper.setProps({highlightText: ''});
    expect(wrapper.find('.card__highlight').length).toBe(0);
    expect(wrapper.find('.card__highlight--place-holder').length).toBe(1);
    expect(wrapper.find('.card__highlight--place-holder').text()).toBe('');

    wrapper.setProps({highlightText: undefined});
    expect(wrapper.find('.card__highlight').length).toBe(0);
    expect(wrapper.find('.card__highlight--place-holder').length).toBe(1);
    expect(wrapper.find('.card__highlight--place-holder').text()).toBe('');

    wrapper.setProps({highlightText: null});
    expect(wrapper.find('.card__highlight').length).toBe(0);
    expect(wrapper.find('.card__highlight--place-holder').length).toBe(1);
    expect(wrapper.find('.card__highlight--place-holder').text()).toBe('');
  });

  it('should render a title', () => {
    const title = 'Sample';
    const wrapper = shallow(<Card title={title} />);
    expect(wrapper.find('.card__title').text()).toBe(title);
  });

  it('should render price', () => {
    const wrapper = shallow(<Card price={100}/>);
    expect(wrapper.find('.card__price__amount').text()).toBe('100');
  });

  it('should render a frequency with a "/" appended', () => {
    const wrapper = shallow(<Card frequency={'mo'}/>);
    expect(wrapper.find('.card__price__frequency').text()).toBe('/mo');
  });

  it('should render list items', () => {
    const list = ['Information 1', 'Information 2', 'Information 3'];
    const wrapper = shallow(<Card list={list} />);
    const renderedList = wrapper.find('li.card__list__item');
    expect(renderedList.length).toBe(3);
    expect(renderedList.first().text()).toBe(list[0]);
  });

  it('should default the list prop to an empty array', () => {
    const wrapper = shallow(<Card/>);
    expect(wrapper.instance().props.list).toBeInstanceOf(Array);
    expect(wrapper.instance().props.list.length).toBe(0);
  });

  it('should render a button with passed in buttonText', () => {
    const wrapper = shallow(<Card buttonText={'Click Here'}/>);
    expect(wrapper.find('button.card__button').exists());
    expect(wrapper.find('button.card__button').text()).toBe('Click Here');
  })

  it('should call the handleButtonClick prop when button is clicked', () => {
    const clickFunc = jest.fn();
    const id = '1';
    const wrapper = shallow(<Card handleButtonClick={clickFunc} id={id}/>);
    const button = wrapper.find('button');
    expect(clickFunc).toHaveBeenCalledTimes(0);
    button.simulate('click');
    expect(clickFunc).toHaveBeenCalledTimes(1);
    expect(clickFunc).toHaveBeenCalledWith(id);
  });

  it('matches snapshot', () => {
    const card = {
      buttonText: 'Click Me',
      frequency: 'mo',
      handleButtonClick: () => console.log(),
      highlightText: 'Good Deal',
      id: '1',
      list: ['Cras sodales lobortis erat', 'Vitae pellentesque diam', 'Consequat eted tempus'],
      price: 100,
      title: 'Professional',
    }
    const tree = shallow(<Card {...card}/>);
    expect(tree).toMatchSnapshot();
  });

});
