const delayActionMiddleWare = (store) => (next) => (action) => {
  if (action.type === 'todo/todoadded') {
    console.log('Im delaying you');

    setTimeout(() => {
      next(action);
    }, 2000);
    return;
  }
  return next(action);
};

const fetchTodosMiddleWare = (store) => (next) => async (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

module.exports = { delayActionMiddleWare, fetchTodosMiddleWare };
