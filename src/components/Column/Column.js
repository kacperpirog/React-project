import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
// import Card from '../Card/Card.js';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
// import Creator from '../Creator/Creator';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.string,
    icon: PropTypes.string,
  };

  static defaultProps = {
    title: <h3>column_name</h3>,
  };

  render() {
    const { title, icon, cards } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <Icon name={icon} />
          {title}
        </h3>

        <div className={styles.cards}>
          {cards.map(({ key, ...cardProps }) => (
            <Card key={key} {...cardProps} />
          ))}
        </div>

        {/* <div className={styles.creator}>
          <Creator
            text={settings.cardCreatorText}
            action={(title) => this.addCard(title)}
          />
        </div>  */}
      </section>
    );
  }
}

export default Column;
