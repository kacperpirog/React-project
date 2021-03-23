import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResult.scss';
import ReactHtmlParser from 'react-html-parser';
import Container from '../Container/Container';


const SearchResult = (props) => {
  const { cards } = props;

  const highlightClickedCard = (id, target, cards) => {
    const card = document.getElementById(id);
    const getHref = target.getAttribute('href').replace('#', '');

    if (getHref == id) {
      card.classList.toggle(styles.cardActive);
    }

    for (let card of cards) {
      const cardDom = document.getElementById(card.id);
      if (card.id != id) {
        cardDom.classList.remove(styles.cardActive);
      }
    }
  };

  return (
    <Container>
      <div className={styles.component}>
        {cards.map(cardData => (
          <a href={'#' + cardData.id} key={cardData.id} className={styles.card} onClick={(event) => highlightClickedCard(cardData.id, event.currentTarget, cards)}>
            <p className={styles.subtitle}>List: {ReactHtmlParser(cardData.listTitle)}</p>
            <p className={styles.subtitle}>Column: {cardData.columnTitle}</p>
            <h3 className={styles.title}>{cardData.title}</h3>
          </a>
        ))}
      </div>
    </Container>
  );
};

SearchResult.propTypes = {
  cards: PropTypes.array,
};


export default SearchResult;