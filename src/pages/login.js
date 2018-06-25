const {Component} = React;
import {connect} from 'react-redux';
import loginUser from 'actions/user';

class Login extends Component {
  state = { username: '' };

  navigateHome = ({ token }) => {
    if (token) this.props.history.push('/todo');
  }

  submit = () => {
    const {password} = this.refs;
    const {username} = this.state;
    const params = { username, password: password.value };

    this.props.loginUser(params, this.navigateHome);
  }
  render() {
    const { username } = this.state;
    return (
      <div>
        <h3>This is the Login Page</h3>
        <div>
          <input className="username" type="text" value={username} onChange={({ target: {value}}) => this.setState({ username: value })}/>
        </div>
        <div>
          <input className="password" ref="password" type="password"/>
        </div>
        <button onClick={this.submit}>Login</button>
      </div>
    );
  }
}

const mapStoreToProps = ({user}) => ({user});
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (data, callback) => dispatch(loginUser(data, callback))
  }
};

export default connect(mapStoreToProps, mapDispatchToProps)(Login);
