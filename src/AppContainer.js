import React, { Component } from "react";
import App from "./components/App";
import serialize from "form-serialize";

class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isFetching: false
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
      console.log(error);
      this.setState({ isFetching: false, error });
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
      console.log(error);
      this.setState({ isFetching: false, error });
    }
  };

  render() {
    return <App onAddUser={this.onAddUser} {...this.state} />;
  }
}

export default AppContainer;
