import React from 'react';
import { Route } from 'react-router-dom';
import CounterView from './views/CounterView';

const App = () => (
  <>
    <Route path="/">
      <CounterView />
    </Route>
  </>
);

export default App;
