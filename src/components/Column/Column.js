import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.string,
    addCards: PropTypes.func,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  render() {
    const { title, icon, cards, addCards } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={title}>
          <Icon name={icon} />
          {title}
        </h3>

        <div className={styles.cards}>
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>

        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCards} />
        </div>
      </section>
    );
  }
}

export default Column;
