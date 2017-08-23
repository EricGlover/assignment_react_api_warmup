import React from "react";

const UserButtonForm = ({ onSubmit, id, children }) =>
  <form onSubmit={onSubmit}>
    <input type="hidden" name="id" value={id} />
    {children}
  </form>;

export default UserButtonForm;
