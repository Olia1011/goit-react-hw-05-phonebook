import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
  <section className={styles.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;