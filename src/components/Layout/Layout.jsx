import React from "react";
import PropTypes from "prop-types";

import styles from "./Layout.module.css";

const Layout = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

Layout.propTypes = {
  result: PropTypes.element,
};

export default Layout;
