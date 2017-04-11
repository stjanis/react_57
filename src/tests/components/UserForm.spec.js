import React from 'react';
import { mount } from 'enzyme';
import chai, {expect} from 'chai';
// import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import UserForm from '../../components/UserForm';

chai.should();
chai.use(sinonChai);

describe('<UserForm/>', () => {
  const getProps = () => ({
    name: '',
    setName: () => {},
    clearName: () => {},
    clear: () => {},
    handleKeyDown: () => {},
  });

  it('should render correct elements based on props.name value', () => {
    const props = getProps();
    let wrapper = mount(<UserForm {...props} />);
    expect(wrapper.find('.user-form__greeting')).to.have.length(0);
    props.name = 'Janis';
    wrapper = mount(<UserForm {...props} />);
    expect(wrapper.find('.user-form__greeting')).to.have.length(1);
  });
});

// let wrapper = mount(<Provider store={mockedStoreState}><ExtraService {...props} /></Provider>);
// props.inputChange.should.not.have.been.called;
// wrapper.find('.service-toggle').simulate('click');
// props.inputChange.should.have.been.calledOnce;
// expect(props.inputChange).to.have.been.calledWith(props.extraService.serviceId, 0);