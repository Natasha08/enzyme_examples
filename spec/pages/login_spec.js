import { mount } from 'enzyme';
import sinon from 'sinon';
import moxios from 'moxios';

import Login from 'pages/login';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const mockStore = configureMockStore([thunk]);

describe('login spec', function() {
    // initializeStore({});
    const store = mockStore({user: {token: ''}});
    beforeEach(function() {
      moxios.install();
      this.wrapper = mount(<Login />, { context: {store}});
    });

    afterEach(function() {
      moxios.uninstall();
    });

  it('logs a user in', function() {
    moxios.stubRequest(/api\/token/, {
      status: 200,
      response: {token: '52239417-ba83-4f7e-bccd-67efab939847'}
    });
    const username = this.wrapper.find('input .username');
    const password = this.wrapper.find('.password');
    fillIn(username, 'test user');
    fillIn(password, 'password');

    simulateClick(this.wrapper.find('button'));
    this.wrapper.update();
    // console.log("WRAPPER AFTER LOGIN", this.wrapper.update());
  });
});
