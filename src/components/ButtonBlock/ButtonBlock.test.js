import React from 'react';
import {shallow} from 'enzyme';
import ButtonBlock from './ButtonBlock';

const buttons = [
  {label: 'Monthly', value: 'mo'},
  {label: 'Annually', value: 'year'}
];

describe('ButtonBlock', () => {

  it('renders successfully when buttons are passed', () => {
    const wrapper = shallow(<ButtonBlock buttons={buttons} />);
    expect(wrapper.exists());
  });

  it('renders the correct number of buttons', () => {
    const wrapper = shallow(<ButtonBlock buttons={buttons} />);
    expect(wrapper.find('button.button-block__button').length).toBe(2);
    wrapper.setProps({buttons: [...buttons, {}]});
    expect(wrapper.find('button.button-block__button').length).toBe(3);
  });

  it('defaults the first button to active', () => {
    const wrapper = shallow(<ButtonBlock buttons={buttons}/>);
    const button1 = wrapper.find('button').first();
    expect(button1.hasClass('active')).toBe(true);
  });

  it('sets the clicked button to active', () => {
    const clickFunc = jest.fn();
    const wrapper = shallow(<ButtonBlock buttons={buttons} handleClick={clickFunc} />);
    expect(wrapper.find('button').at(0).hasClass('active')).toBe(true);
    wrapper.find('button').at(1).simulate('click');
    expect(wrapper.find('button').at(0).hasClass('active')).toBe(false);
    expect(wrapper.find('button').at(1).hasClass('active')).toBe(true);
  });

  it('calls the handleClick prop with the button.value argument', () => {
    const clickFunc = jest.fn();
    const wrapper = shallow(<ButtonBlock buttons={buttons} handleClick={clickFunc} />);
    const button0 = wrapper.find('button').at(0);
    const button1 = wrapper.find('button').at(1);
    button0.simulate('click');
    expect(clickFunc).toHaveBeenCalledWith(buttons[0].value);
    button1.simulate('click');
    expect(clickFunc).toHaveBeenCalledWith(buttons[1].value);
  });

  it('matches snapshot', () => {
    const tree = shallow(<ButtonBlock buttons={buttons}/>);
    expect(tree).toMatchSnapshot();
  });

});
