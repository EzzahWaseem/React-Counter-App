import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { login, logout } from './actionCreators'
import Home from './components/home/home'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    }

  }

  onChangeField(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onLogin() {
    console.log(this.state)
    this.props.login(this.state)
  }

  render() {
    // console.log(this.props.counter)
    return (
      <div>
        <label>Name :<input type="text" name="name" onChange={(e) => this.onChangeField(e)} /> </label><br />
        <label> Password :<input type="password" name="password" onChange={(e) => this.onChangeField(e)} /> </label><br />
        < button onClick={() => this.onLogin()}> Login</button>

        <span></span>

        
        <Home>{this.props.counter}</Home> 
        {/* </Home> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('mapStateToProps', state)
  return {
    counter: state.name
  }
}

const mapDispatchToProps = {login }
  

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
