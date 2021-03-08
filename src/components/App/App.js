import React from "react";
import styles from "./App.scss";
import PropTypes from "prop-types";
import List from "../List/ListContainer.js";
import Search from "../Search/SearchContainer.js";
//import Card from '../Card/Card.js';
//import Creator from '../Creator/Creator.js';

class App extends React.Component {
  state = {
    cards: [],
  };

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  };

  addCard(title) {
    this.setState((state) => ({
      cards: [
        ...state.cards,
        {
          key: state.cards.length
            ? state.cards[state.cards.length - 1].key + 1
            : 0,
          title: title,
        },
      ],
    }));
  }

  render() {
    const { title, subtitle, lists } = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        {lists.map((listData) => (
          <List key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

export default App;
