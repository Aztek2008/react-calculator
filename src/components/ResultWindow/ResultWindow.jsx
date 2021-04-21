import React from "react";
import PropTypes from "prop-types";

import styles from "./ResultWindow.module.css";

const ResultWindow = ({ result }) => (
  <div className={styles.container}>
    <p className={styles.outputP}>{result}</p>
  </div>
);

ResultWindow.propTypes = {
  result: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ResultWindow;
