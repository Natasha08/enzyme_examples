import chai, { Assertion } from 'chai';
import _ from 'lodash';
import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import chaiEnzyme from 'chai-enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import moxios from 'moxios';

import rootReducer from 'reducers/index';
import Routes from 'routes';
import { Simulate } from 'react-dom/test-utils';

import ReactDOM from 'react-dom';

Enzyme.configure({adapter: new Adapter()});
require('polyfills');

global.simulateClick = element => {
  Simulate.click(ReactDOM.findDOMNode(element.instance()));
  element.root().update();
};

global.fillIn = (input, value) => {
  input.instance().value = value;
  input.simulate('change', { target: input.instance() });
  input.root().update();
};

chai.use(chaiEnzyme());
global.chai = chai;

global.expect = chai.expect;
global._ = global._ || _;

const specialCharacters = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
global.matchText = (text) => {
  const clean = _.toString(text).replace(specialCharacters, '\\$&');
  const regex = new RegExp(clean, 'i');
  return w => regex.test(w.text());
};

global.initializeStore = (state={}) => {
  const store = createStore(
    rootReducer,
    undefined,
    compose(applyMiddleware(thunk))
  );

  beforeEach(function() {
    store.dispatch({type: 'INIT', state});
    this.store = store;
  });
};

global.mockAxios = () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });
}

var context = require.context('./spec', true, /.+[_.-]spec\.jsx?$/);

context.keys().forEach(context);
module.exports = context;
