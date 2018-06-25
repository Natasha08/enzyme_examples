import { Link } from "react-router-dom";

const { Component } = React;

export default function Layout() {
  return (
    <div>
      <Link to='/home'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/todo'>Todo</Link>
    </div>
  );
}
