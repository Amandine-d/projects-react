import React, { useRef, useState } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

//If we just want to read a value, ref is usually better than state, it's less code.

const AddUser = props => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    // if (enteredUsername.trim().length === 0 && enteredAge.trim().length === 0) 
    if (enteredName.trim().length === 0 && enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Enter a valid name and age'
      })
      return;
    }
    // if (+enteredAge < 1) {
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Enter a valid age'
      })
      //enteredage is a string here, we make sure with the + that it is a number
      return;
    }
    // console.log(enteredUsername, enteredAge);
    // props.onAddUser(enteredUsername, enteredAge);
    props.onAddUser(enteredName, enteredUserAge);

    //It is not good practise to change the DOM, We should let react do that
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    // setEnteredAge('');
    // setEnteredAge('');
  }

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // }

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <Wrapper>
      {error &&
        <ErrorModal
          title={error.title}
          message={error.message} onConfirm={errorHandler} />
      }
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">
            Age
          </label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default AddUser;
