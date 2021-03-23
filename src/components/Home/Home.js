import React from 'react';
import styles from './Home.scss';
import Creator from '../Creator/Creator.js';
import ListLink from '../ListLink/ListLink';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';

class Home extends React.Component {

  static propTypes = {
    lists: PropTypes.array,
    title: PropTypes.node,
    subtitle: PropTypes.node,
    addList: PropTypes.func,
  }

  render() {
    const { title, subtitle, lists, addList } = this.props;
    return (
      <main className={styles.component}>
        <div className={styles.component}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          {lists.map(listData => (
            <ListLink key={listData.id} {...listData} />
          ))}
          <div className={styles.creator}>
            <Creator text={settings.listCreatorText} action={addList} />
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
