import React from 'react';
import styles from './Home.scss';
import Creator from '../Creator/Creator.js';
import List from '../List/ListContainer.js';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Search from '../Search/SearchContainer';
import SearchResult from '../SearchResult/SearchResultContainer';
import { DragDropContext } from 'react-beautiful-dnd';
import Container from '../Container/Container';

class Home extends React.Component {

  static propTypes = {
    lists: PropTypes.array,
    title: PropTypes.node,
    subtitle: PropTypes.node,
    addList: PropTypes.func,
    moveCard: PropTypes.func,
  }

  render() {
    const { title, subtitle, lists, addList, moveCard } = this.props;
    const moveCardHandler = result => {
      if (
        //check if dropped to defined context
        result.destination
        &&
        (
          //check if index has changed
          result.destination.index != result.source.index
          ||
          //check if container id has changed
          result.destination.droppableId != result.source.droppableId
        )
      ) {
        moveCard({
          id: result.draggableId,
          dest: {
            index: result.destination.index,
            columnId: result.destination.droppableId,
          },
          src: {
            index: result.source.index,
            columnId: result.source.droppableId,
          },
        });
      }
    };
    return (
      <main className={styles.component}>
        <div className={styles.component}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          <Container>
            <div className={styles.search}>
              <Search />
            </div>
          </Container>
          <div >
            <SearchResult />
          </div>
          <DragDropContext onDragEnd={moveCardHandler}>
            {lists.map(listData => (
              <List key={listData.id} {...listData} />
            ))}
          </DragDropContext>
          <div className={styles.creator}>
            <Creator text={settings.listCreatorText} action={addList} />
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
