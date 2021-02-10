import React from "react";
import styles from "./Hero.scss";
import PropTypes from "prop-types";

const Hero = (props) => {
  const content = (
    <header className={styles.component}>
      <h2 className={styles.title}>{props.titleText}</h2>
      <img className={styles.image} src={props.backgroundImage} />
    </header>
  );

  return content;
};
Hero.propTypes = {
  titleText: PropTypes.nodeisRequired,
};
export default Hero;
