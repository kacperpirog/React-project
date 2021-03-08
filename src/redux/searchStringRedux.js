// selectors
export const getSearchString = (searchString) => searchString.state;

export const countAllCards = ({ cards }) => cards.length;

export const countVisibleCards = ({ cards, searchString }) =>
  cards.filter((card) => new RegExp(searchString, "i").test(card.title)).length;

// action name creator
const reducerName = "searchString";
const createActionName = (name) => `app/${reducerName}/${name}`;
// actions types
export const SEARCH = createActionName("SEARCH");
// action creators
export const createAction_changeSearchString = (payload) => ({
  payload: payload,
  type: SEARCH,
});
// reducer
export default function reducer(statePart = "", action = {}) {
  switch (action.type) {
    case SEARCH:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}
