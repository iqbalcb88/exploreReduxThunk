// initial state
const { fetchApi } = require('./fetchApi');
const { legacy_createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk');

const initialState = {
  todos: [],
};

// reducer

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todos/todoadded':
      return { ...state, todos: [...state.todos, { title: action.payload }] };
    case 'todos/todoLoaded': {
      return { ...state, todos: [...state.todos, ...action.payload] };
    }
  }
};

// store
const store = legacy_createStore(todoReducer, applyMiddleware(thunk.default));

// subscribe to state changes
store.subscribe(() => {
  console.log('store', store.getState());
});

// dispatch actions
/* store.dispatch({
  type: 'todo/todoadded',
  payload: 'Learn redux from lws',
}); */
store.dispatch(fetchApi);
