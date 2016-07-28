import React from 'react';
import usersData from '../data';

const Users = ({ users }) => (
  <div className="users">
    { users.map((user, index) => <h2 key={index}>{user.title}</h2>) }
  </div>
);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: usersData.users
    };

    if (module.hot) {
      module.hot.accept('../data', () => this.setState({ users: require('../data').default.users }));
    }
  }

  render() {
    return (
      <Users users={this.state.users} />
    );
  }
}
