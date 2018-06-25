import { mount } from 'enzyme';
import Home from 'pages/home';

describe('A smoke test', function() {
  context('initial state and updating', function() {
    initializeStore({});
    const wrapper = mount(<Home />);

    it('renders the app', function() {
      expect(wrapper.length).to.equal(1);
    });
  });
});
