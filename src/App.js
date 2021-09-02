import React, { useState } from 'react';
import { AddUser } from './components/User/AddUser';
import { UsersList } from './components/User/UsersList';




function App() {

  const [userList, setUserList] = useState([]);

  const addUserHandler = (name, age) => {
    setUserList((prevState) => {
      return [...prevState, {userName: name, userAge: age}]
    })
  }

  return (
    <div>
    <AddUser onAddUser={addUserHandler}/>
    <UsersList users={userList}/>
    </div>
  );
}

export default App;
