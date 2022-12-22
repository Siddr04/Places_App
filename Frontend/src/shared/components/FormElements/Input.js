import React, { useReducer } from "react";

import "./Input.css";

const inputReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return {
      ...state, //made copy of existing old state
      value: action.val,
      isValid: true,
    };
  } else {
    return state;
  }
};

const Input = (props) => {
  //use Reducers exactly two things like useState hook
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  }); //we pass in an initial state to the reducer function.

  const changeHandler = (event) => {
    dispatch({ type: "CHANGE", val: event.target.value });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
      ></input>
    ) : (
      <textarea
        id={props.id}
        row={props.rows || 3}
        onChange={changeHandler}
        value={inputState.value}
      />
    );

  return (
    <div className={`form-control ${!inputState.isValid && 'form-control--invalid'}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && <p>{props.err}</p>}
    </div>
  );
};

export default Input;
