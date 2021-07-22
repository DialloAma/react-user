import React, { Component } from 'react';
import AddUsers from './AddUsers';
import ListUsers from './ListUsers';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }
  addinfo = (user) => {
    this.setState({ users: [...this.state.users, user] 
    })
  }
  render() {
    return (
      <div>
        <AddUsers newUser={this.addinfo} />
        {this.state.users.map((list, index) => {
          return (
            <ListUsers user={list} />
          )
        })}

      </div>
    );
  }
}

export default App;
