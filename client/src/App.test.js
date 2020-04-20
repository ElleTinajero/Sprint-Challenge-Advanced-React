import React from 'react';
import { shallow } from 'enzyme'; //renders a component but not subcomponents, testing in isolation
import App from './App';
import { Players } from './components/players';
import '@testing-library/jest-dom/extend-expect';
//CI=true npm test
//this will run all your tests without having to have the watcher open

//added enzyme utils

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const wrapper = shallow(<Players/>);


describe('testing players component', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<Players/>); })

  it('includes 1 div with id players', () => {
    expect(wrapper.find('id.players')).to.have.lengthOf(1);
  });

  it('includes 1 div with class players', () => {
    expect(wrapper.find('class.players').text()).to.be.equal('info');
  });

})
