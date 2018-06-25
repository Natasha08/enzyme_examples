require('polyfills');
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import Routes from 'routes';
import store from 'store';

 ReactDOM.render(
  <BrowserRouter>
    <Route render={() => (
      <Provider store={store}>
        <Switch>
          <Routes />
        </Switch>
      </Provider>
    )}/>
  </BrowserRouter>, document.getElementById('app')
)
