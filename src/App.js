import React from 'react';
import './config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import TodoList from './pages/TodoList';

console.tron.log('Testando');

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
