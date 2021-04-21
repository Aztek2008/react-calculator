import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { btnNames } from "../namesArrays";

import styles from "./Keypad.module.css";

const Keypad = ({ onClick }) => (
  <div className={styles.buttonSection}>
    {btnNames.map((btnValue) => (
      <Button
        key={btnValue}
        name={btnValue}
        onClick={(e) => onClick(e.target.name)}
      />
    ))}
  </div>
);

Keypad.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Keypad;
