import Users from "./component";
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    // Set initial state
    this.state = {
      users_data: [],
      loading: true
    }
    this.updateState = this.updateState.bind(this)
  }

  updateState() {
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
      .then(response => response.json())
      .then((users) => {

        this.setState({
          users_data: users.data,
          loading: false
        })
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error)
      })
  }
  render() {
    return (<>
      <nav>
        <div className="box">
          <div className="row">
            <div className="column1">
              <h1>LGMVIP Task 2</h1>
              <h3> Shriti Deepak Dari </h3>
            </div>
            <div className="column2">
              <button onClick={this.updateState}>Get All Users</button>
            </div>
          </div>
        </div>
      </nav>
      <div className="box2">
        <Users loading={this.state.loading} users={this.state.users_data} />
      </div>
    </>
    )
  }
}

export default App;