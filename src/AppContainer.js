import React, { Component } from "react";
import App from "./components/App";
import serialize from "form-serialize";

class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isFetching: false,
      isEditing: false,
      editUser: {}
    };
  }

  async componentDidMount() {
    try {
      this.setState({ isFetching: true });
      const res = await fetch("https://reqres.in/api/users/?delay=2");

      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      else {
        const json = await res.json();
        this.setState({
          users: json.data,
          isFetching: false
        });
      }
    } catch (error) {
      this.handleError(error);
    }
  }

  onAddUser = async e => {
    try {
      e.preventDefault();
      const form = e.target;
      this.setState({ isFetching: true });

      const body = serialize(form, { hash: true });
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      const options = {
        headers,
        method: "POST",
        body: JSON.stringify(body),
        error: ""
      };

      const res = await fetch("https://reqres.in/api/users", options);
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      else {
        const json = await res.json();
        await this.setState({
          isFetching: false,
          users: [...this.state.users, json]
        });

        form.reset();
      }
    } catch (error) {
      this.handleError(error);
    }
  };

  onDelUser = async e => {
    try {
      e.preventDefault();
      const form = e.target;
      const id = Number(serialize(form, { hash: true }).id);
      const options = {
        method: "DELETE"
      };
      const res = await fetch(`https://reqres.in/api/users/${id}`, options);
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      else {
        let users = this.state.users.filter(user => user.id !== id);
        this.setState({ users });
      }
    } catch (error) {
      this.handleError(error);
    }
  };

  onEditUser = async e => {
    try {
      e.preventDefault();
      const form = e.target;
      const { id } = form;

      const body = serialize(form, { hash: true });
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      const options = {
        headers,
        method: "PUT",
        body: JSON.stringify(body)
      };

      const res = await fetch(`https://reqres.in/api/users/${id}`, options);
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      else {
        const json = await res.json();
        let users = this.state.users.map(
          user => (user.id === id ? json : user)
        );
        this.setState({ users });
      }
    } catch (error) {
      this.handleError(error);
    }
  };

  onDisplayEdit = e => {
    e.preventDefault();
    const id = Number(e.target.id);
    const user = this.state.users.reduce((acc, user) => {
      return user.id === id ? user : acc;
    }, null);

    if (user) {
      this.setState({
        isEditing: true,
        editUser: user
      });
    }
  };

  handleError = error => {
    console.log(error);
    this.setState({ isFetching: false, error });
  };
  render() {
    const handlers = {
      onAddUser: this.onAddUser,
      onDelUser: this.onDelUser,
      onEditUser: this.onEditUser,
      onDisplayEdit: this.onDisplayEdit
    };
    return <App handlers={handlers} {...this.state} />;
  }
}

export default AppContainer;
