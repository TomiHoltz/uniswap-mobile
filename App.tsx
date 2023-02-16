import React from 'react';
import {Provider} from 'react-redux';
import {OnBoardingScreen} from './app/features';
import {store} from './app/store';

const App = () => {
  return (
    <Provider store={store}>
      <OnBoardingScreen />
    </Provider>
  );
};

export default App;
