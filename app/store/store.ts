import createSagaMiddleware from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit';

import {walletSagas, walletSlice, WalletState} from './slices';

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  wallet: WalletState;
}

export const store = configureStore({
  reducer: {
    wallet: walletSlice.reducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(walletSagas);

export default store;
