import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer.js';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import Container from '../Container/Container';
import { DragDropContext } from 'react-beautiful-dnd';

const List = (props) => {
  const { title, image, description, columns, addColumn, moveCard } = props;

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
    <DragDropContext onDragEnd={moveCardHandler}>
      <Container>
        <section className={styles.component}>
          <Hero titleText={title} image={image} />
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>
          <div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData}
                creatorText={settings.cardCreatorText} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn} />
          </div>
        </section>
      </Container>
    </DragDropContext>
  );
};

List.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  columns: PropTypes.array,
  image: PropTypes.string,
  addColumn: PropTypes.func,
  moveCard: PropTypes.func,
};

List.defaultProps = {
  description: settings.defaultListDescription,
};

export default List;
