const fetch = require('node-fetch');

const fetchApi = async (storeDotDispatch, storeDotGetState) => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=5'
  );
  // console.log(response);
  const data = await response.json();
  // console.log('first', data);
  storeDotDispatch({
    type: 'todos/todoLoaded',
    payload: data,
  });

  console.log(`number of update todos ${storeDotGetState().todos.length}`);
};

module.exports = { fetchApi };

/*  fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((res) => res.json())
      .then((data) => {
        store.dispatch({
          type: 'todos/todoLoaded',
          payload: data,
        });
      }); */
