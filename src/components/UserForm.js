import React from "react";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";

const UserForm = ({ onSubmit }) =>
  <form className="container" onSubmit={onSubmit}>
    <h2>Add New User</h2>
    <InputGroup name="first_name" labelText="First Name">
      <Input name="first_name" />
    </InputGroup>
    <InputGroup name="last_name" labelText="Last Name">
      <Input name="last_name" />
    </InputGroup>
    <InputGroup name="avatar" labelText="Photo Link">
      <Input name="avatar" />
    </InputGroup>
    <Button type="submit" color="primary">
      Save User
    </Button>
  </form>;

export default UserForm;
