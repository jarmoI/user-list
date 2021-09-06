import React, { useState, Fragment } from "react";
import { AddUser } from "./components/User/AddUser";
import { UsersList } from "./components/User/UsersList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (name, age) => {
    setUserList((prevState) => {
      return [...prevState, { userName: name, userAge: age }];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </Fragment>
  );
}

export default App;
