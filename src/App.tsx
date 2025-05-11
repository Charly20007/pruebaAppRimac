import React from 'react';
import { Provider } from 'react-redux';
import AppRoutes from './routes';
import store from './core/store/store';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />\
      </BrowserRouter>
    </Provider>
  );
};

export default App;
