// import React, { Component } from "react";
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import Layout from "./Layout";
import Keypad from "./Keypad";
import ResultWindow from "./ResultWindow";
import ExpressionWindow from "./ExpressionWindow";

import { create, all } from "mathjs";
import { numbers, operators } from "./namesArrays";

const config = {};
const math = create(all, config);

const App = () => {
  let [result, setResult] = useState("");
  let [currentValue, setCurrentValue] = useState("");
  let [strOfValues, setStrOfValues] = useState("");

  const prevValueRef = useRef();

  useEffect(() => {
    prevValueRef.current = currentValue;
  });

  // ACTIONS ON CLICKING
  const onClick = (e) => {
    const lastValInString = strOfValues.slice().charAt(strOfValues.length - 1);
    const lastEnteredValue = prevValueRef.current;

    // CURRENT VALUE SYMBOL APPOINTMENT TO CHECK IF THERE'S MORE THAN 1 OPERATOR
    setCurrentValue((currentValue = e));

    // CALC FUNCTION CALLING
    if (e === "=" && !operators.includes(lastValInString)) {
      return calculate();
    }

    // RESET
    if (e === "R") {
      setResult((result = ""));
      setCurrentValue((currentValue = ""));
      setStrOfValues((strOfValues = ""));
    }

    // EXPRESSION CORRECTION
    if (e === "Corr") {
      setStrOfValues(
        (strOfValues = strOfValues.slice(0, strOfValues.length - 1))
      );
    }

    // EXPRESSION STRING CREATION
    if (
      e !== "=" &&
      strOfValues !== "" &&
      lastEnteredValue !== "=" &&
      operators.includes(e) &&
      !operators.includes(lastEnteredValue)
    ) {
      // ADD OPERATOR IF PREVIOUS VALUE WAS NOT AN OPERATOR
      setStrOfValues((strOfValues) => strOfValues + e);
    } else if (numbers.includes(e)) {
      // ADD NUMBER
      setStrOfValues((strOfValues) => strOfValues + e);
    }
  };

  // EXPRESSION EXECUTION
  const calculate = () => {
    const evaluatedResults = math.round(
      math.evaluate(strOfValues), // LIMIT SIGNS AFTER DOT
      4
    );

    setResult((result = evaluatedResults));
  };

  return (
    <Layout>
      <ResultWindow result={result} />
      <ExpressionWindow strOfValues={strOfValues} />
      <Keypad onClick={onClick} />
    </Layout>
  );
};

App.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.string),
  operators: PropTypes.arrayOf(PropTypes.string),
};

export default App;
