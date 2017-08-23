import React from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";
import JumbotronFluid from "./elements/JumbotronFluid";
import Alert from "./elements/Alert";
import Showable from "./elements/Showable";

const App = ({ users, isFetching, error, handlers, isEditing, editUser }) =>
  <div className="App">
    <JumbotronFluid
      heading="User CRUD"
      lead="Using an API for User CRUD operations"
    />
    <Showable show={error}>
      <Alert type="danger">Oops, there was a problem...</Alert>
    </Showable>
    <UserList handlers={handlers} users={users} isFetching={isFetching} />
    <Showable show={isEditing}>
      <UserForm
        title="Edit"
        editUser={editUser}
        onSubmit={handlers.onEditUser}
      />
    </Showable>
    <br />
    <Showable show={!isEditing}>
      <UserForm title="Add a new user:" onSubmit={handlers.onAddUser} />
    </Showable>
  </div>;

export default App;
