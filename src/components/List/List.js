import React from "react";
import styles from "./List.scss";
import Hero from "../Hero/Hero";
import PropTypes from "prop-types";
import Column from "../Column/Column";

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    image: PropTypes.string,
    column: PropTypes.array.isRequired,
  };
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  };
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} backgroundImage={this.props.image} />
        <div className={styles.description}>{this.props.children}</div>
        <div className={styles.columns}>
          <Column columnTitle={"Animals"}></Column>
          <Column columnTitle={"Plants"}></Column>
          <Column columnTitle={"Minerals"}></Column>
        </div>
      </section>
    );
  }
}

export default List;
