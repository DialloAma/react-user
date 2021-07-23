import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUsers from './AddUsers';
import Users from './Users';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }
  addinfo = (user) => {
    this.setState({
      users: [...this.state.users, user]
    })
  }
  render() {
    return (
      <div>
        <AddUsers newUser={this.addinfo} />
        <hr/>
        <Users userdata={this.state.users}/>


     




      </div>
    );
  }
}

export default App;
