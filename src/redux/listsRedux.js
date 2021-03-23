// selector
export const getList = (state, props) => state.lists = props;

// action name creator
const reducerName = 'lists';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_LIST = createActionName('ADD_LIST');

// action creators
export const createActionAddList = payload => ({ payload: payload, type: ADD_LIST });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_LIST:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}