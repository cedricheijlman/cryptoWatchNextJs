import React, { Fragment } from "react";
import Navbar from "../navbar/navbar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main style={styles.children}>{children}</main>
    </div>
  );
};

export default Layout;
