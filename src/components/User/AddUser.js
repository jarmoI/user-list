import React, { useState, useRef } from "react";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import { ErrorModal } from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

export const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  function addUserHandler(event) {
    event.preventDefault();
    const inputRef = nameInputRef.current.value;
    const ageRef = ageInputRef.current.value;
    if (inputRef.trim().length === 0 || ageRef.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please provide a valid name and age (non-empty). ",
      });
      return;
    } else if (+ageRef < 1) {
      setError({
        title: "Invalid age",
        message: "Please provide a right age ( > 0). ",
      });
      return;
    } else {
      props.onAddUser(inputRef, ageRef);
      nameInputRef.current.value = '';
      ageInputRef.current.value = '';
    }
  }

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User</label>
          <input
            className="username"
            type="text"
            // value={enteredUserName}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          ></input>
          <label htmlFor="userage">Age</label>
          <input
            className="userage"
            type="number"
            // value={enteredUserAge}
            // onChange={userageChangeHandler}
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};
