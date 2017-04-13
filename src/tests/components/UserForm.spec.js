import React from 'react';
import { mount } from 'enzyme';
import chai, {expect} from 'chai';
// @todo
// import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import UserForm from '../../components/UserForm';

chai.should();
chai.use(sinonChai);

describe('<UserForm/>', () => {
  const getProps = () => ({
    string: 'Janis',
    setString: () => {},
    clearString: () => {},
    handleKeyDown: () => {},
  });

  it('should render correct elements based on props.name value', () => {
    const props = getProps();
    let wrapper = mount(<UserForm {...props} />);
    expect(wrapper.find('.user-form__result')).to.have.length(1);
    props.string = '';
    wrapper = mount(<UserForm {...props} />);
    expect(wrapper.find('.user-form__result')).to.have.length(0);
  });

  // @todo 
  // fix this, need a reference to DOM (or dom mockup)
  // look into JsDom
  // it('should handle onClick evenets properly', () => {
  //   const props = getProps();
  //   let wrapper = mount(<UserForm {...props} />);
  //   wrapper.find('.user-form__button--submit').simulate('click');
  //   props.setName.should.have.been.calledOnce;
  //   expect(props.setName).to.have.been.calledWith(props.name, 0);
  // });
});