import React from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";
import JumbotronFluid from "./elements/JumbotronFluid";

const App = ({ users, isFetching, error, onAddUser }) =>
  <div className="App">
    <JumbotronFluid
      heading="User CRUD"
      lead="Using an API for User CRUD operations"
    />
    <UserList users={users} isFetching={isFetching} />
    <br />
    <UserForm onSubmit={onAddUser} error={error} />
  </div>;

export default App;
