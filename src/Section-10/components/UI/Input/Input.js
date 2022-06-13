import React, { useImperativeHandle, useRef } from "react";

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  //To use the useRef we need to expose for example the focus function because it point at the activate function
  useImperativeHandle(ref, () => {
    return {
      focus: activate
    }
  })

  return (
    <div
    className={`${classes.control} ${props.isValid === false ? classes.invalid : ''
      }`}
  >
    <label htmlFor={props.id}>E{props.label}</label>
    <input
      type={props.type}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  </div>
  );
});

export default Input;
