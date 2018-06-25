import { Route } from "react-router-dom";
import Layout from 'pages/layout';
import Home from 'pages/home';
import Todo from 'pages/todo';
import Login from 'pages/login';
import List from 'pages/list';

const Routes = () => (
  <div>
    <Route path="/" component={Layout}/>
    <Route path="/home" component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/todo" component={Todo}/>
    <Route path="/list" component={List}/>
  </div>
);

export default Routes;
