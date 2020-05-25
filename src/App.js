import React from "react";
import "./App.css";
import { connect } from "react-redux";

const App = (props) => {
  const thunkIncrement = () => {
    props.thunkIncrement();
  };

  const sagaIncrement = () => {
    props.sagaIncrement(props.sagaCounter);
  };

  const sagaChange = (event) => {
    console.log(event.target.value);
    props.sagaChange(event.target.value);
  };

  return (
    <div className="App">
      <h1>Redux-Thunk Vs Redux-Saga</h1>
      <hr />
      <div>thunk - {props.thunkCounter}</div>
      <div>saga - {props.sagaCounter}</div>
      <button onClick={thunkIncrement}>Thunk Increment</button>
      <button onClick={sagaIncrement}>Saga Increment</button>
      <select onChange={sagaChange}>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
      </select>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    thunkCounter: state && state.thunk && state.thunk.counter,
    sagaCounter: state && state.saga && state.saga.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    thunkIncrement: () => dispatch({ type: "THUNK_INCREMENT" }),
    sagaIncrement: (prevCount) =>
      dispatch({ type: "SAGA_INCREMENT", prevCount }),
    sagaChange: (val) => dispatch({ type: "SAGA_CHANGE", val }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
