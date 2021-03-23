import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResult.scss';
import ReactHtmlParser from 'react-html-parser';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';

class SearchResult extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    changeSearchString: PropTypes.func,
    history: PropTypes.any,
  };

  state = {
    searchString: this.props.changeSearchString(this.props.history.location.pathname.replace('/search/', '')),
  }

  render() {
    const { cards } = this.props;
    return (
      <Container>
        <div className={styles.component}>
          {cards.map(cardData => (
            <Link className={styles.card} key={cardData.id} to={`/list/${cardData.listId}`} >
              <div>
                <p className={styles.subtitle}>List: {ReactHtmlParser(cardData.listTitle)}</p>
                <p className={styles.subtitle}>Column: {cardData.columnTitle}</p>
                <h3 className={styles.title}>{cardData.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    );
  }
}


export default SearchResult;