import React, { Component } from 'react';
//import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUsers from './AddUsers';
import Users from './Users';

class App extends Component {
 /* constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }
  addinfo = (user) => {
    user.id = Math.random()
    this.setState({
      users: [...this.state.users, user]
    })
  }*/
  delletuser = (id) => {
    let sup = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: sup
    })
  }
  EditUser = (id, updateuser) => {
    this.setState({ users:this.state.users.map((user) => user.id === id ? updateuser : user) })


  }
  render() {
    return (
      <div>
        <AddUsers />
        <hr />
        <Users  userdelet={this.delletuser} update={this.EditUser} />
        







      </div>
    );
  }
}

export default App;
