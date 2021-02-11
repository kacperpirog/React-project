import React from "react";
import styles from "./List.scss";
import Hero from "../Hero/Hero";
import PropTypes from "prop-types";
import Column from "../Column/Column";
import { settings } from "../../data/dataStore";

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  };
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    // children: PropTypes.node.isRequired,
    image: PropTypes.string,
  };
  static defaultProps = {
    description: settings.defaultListDescription,
  };
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} backgroundImage={this.props.image} />
        <div className={styles.description}>{this.props.description}</div>
        <div className={styles.columns}>
          <Column columnTitle={"Animals"}></Column>
          <Column columnTitle={"Plants"}></Column>
          <Column columnTitle={"Minerals"}></Column>
          {/* {this.state.columns.map(({ key, ...columnProps }) => (
            <Column key={key} {...columnProps} />
          ))} */}
        </div>
      </section>
    );
  }
}

export default List;
