import React from "react";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";

const UserForm = ({ title, onSubmit, editUser }) => {
  editUser = editUser || { first_name: "", last_name: "", avatar: "", id: "" };
  return (
    <form className="container" onSubmit={onSubmit}>
      <h2>
        {title}
      </h2>
      <input type="hidden" name="id" value={editUser.id} />
      <InputGroup name="first_name" labelText="First Name">
        <Input name="first_name" defaultValue={editUser.first_name} />
      </InputGroup>
      <InputGroup name="last_name" labelText="Last Name">
        <Input name="last_name" defaultValue={editUser.last_name} />
      </InputGroup>
      <InputGroup name="avatar" labelText="Photo Link">
        <Input name="avatar" defaultValue={editUser.avatar} />
      </InputGroup>
      <Button type="submit" color="primary">
        Save User
      </Button>
    </form>
  );
};

export default UserForm;
