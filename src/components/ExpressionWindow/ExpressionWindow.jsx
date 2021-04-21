import React from "react";
import PropTypes from "prop-types";

import styles from "./ExpressionWindow.module.css";

const ExpressionWindow = ({ strOfValues }) => (
  <div className={styles.container}>
    <p className={styles.outputP}>{strOfValues}</p>
  </div>
);

ExpressionWindow.propTypes = {
  result: PropTypes.string,
};

export default ExpressionWindow;
