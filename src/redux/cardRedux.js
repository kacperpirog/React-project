import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({ cards }, columnId) => cards.filter(card => card.columnId == columnId).sort((a, b) => a.index - b.index);
//export const getCardsForColumn = ({cards, searchString}, columnId) => cards.filter(card => card.columnId == columnId && new RegExp(searchString, 'i').test(card.title));
// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARDS = createActionName('ADD_CARDS');
export const MOVE_CARD = createActionName('MOVE_CARD');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARDS });
export const createAction_moveCard = payload => ({ payload: { ...payload }, type: MOVE_CARD });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CARDS: {
      const filteredCards = statePart.filter(card => card.columnId == action.payload.columnId);
      const lastCard = filteredCards[filteredCards.length - 1];
      const newIndex = lastCard ? lastCard.index + 1 : 0;
      const newCard = {
        ...action.payload,
        index: newIndex,
      };
      return [...statePart, newCard];
    }
    default:
      return statePart;
    case MOVE_CARD: {
      const { id, src, dest } = action.payload;
      const targetCard = statePart.filter(card => card.id == id)[0];
      const targetColumnCards = statePart.filter(card => card.columnId == dest.columnId).sort((a, b) => a.index - b.index);
      if (dest.columnId == src.columnId) {
        targetColumnCards.splice(src.index, 1);
        targetColumnCards.splice(dest.index, 0, targetCard);
        return statePart.map(card => {
          const targetColumnIndex = targetColumnCards.indexOf(card);

          if (targetColumnIndex > -1 && card.index != targetColumnIndex) {
            return { ...card, index: targetColumnIndex };
          } else {
            return card;
          }
        });
      } else {
        let sourceColumnCards = statePart.filter(card => card.columnId == src.columnId).sort((a, b) => a.index - b.index);

        // remove card from sourceColumn
        sourceColumnCards.splice(src.index, 1);
        // add card to targetColumn
        targetColumnCards.splice(dest.index, 0, targetCard);

        return statePart.map(card => {
          const targetColumnIndex = targetColumnCards.indexOf(card);

          if (card == targetCard) {
            // card is targetCard
            return { ...card, index: targetColumnIndex, columnId: dest.columnId };
          } else if (targetColumnIndex > -1 && card.index != targetColumnIndex) {
            // card is in targetColumn
            return { ...card, index: targetColumnIndex };
          } else {
            // card is NOT in targetColumn
            const sourceColumnIndex = sourceColumnCards.indexOf(card);

            if (sourceColumnIndex > -1 && card.index != sourceColumnIndex) {
              // card is in sourceColumn
              return { ...card, index: sourceColumnIndex };
            } else {
              // card is NOT in sourceColumn (and NOT in targetColumn)
              return card;
            }
          }
        });
      }
    }
  }
}