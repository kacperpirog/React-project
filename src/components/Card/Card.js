import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

const Card = props => {
  const { title, idDom, index, id } = props;

  return (
    <Draggable draggableId={id} index={index} >
      {(provided) => (
        <article
          className={styles.component}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          id={idDom}
        >
          {title}
        </article>
      )}
    </Draggable>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  idDom: PropTypes.string,
  id: PropTypes.string,
  index: PropTypes.number,
};

export default Card;