import React from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";
import JumbotronFluid from "./elements/JumbotronFluid";
import Alert from "./elements/Alert";
import Showable from "./elements/Showable";

const App = ({ users, isFetching, error, onAddUser }) =>
  <div className="App">
    <JumbotronFluid
      heading="User CRUD"
      lead="Using an API for User CRUD operations"
    />
    <Showable show={error}>
      <Alert type="danger">Oops, there was a problem...</Alert>
    </Showable>
    <UserList users={users} isFetching={isFetching} />
    <br />
    <UserForm onSubmit={onAddUser} />
  </div>;

export default App;
