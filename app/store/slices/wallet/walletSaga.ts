import {put, takeEvery, all, call} from 'redux-saga/effects';
export enum WalletActions {
  START_CONNECTION = 'wallet/startWallectConnection',
  CONNECT_WALLET = 'wallet/connectWallet',
  ERROR = 'wallet/errorInWalletConnection',
}

function* connectWallet(): Generator<any, any, any> {
  try {
    const response = yield call(
      fetch,
      'https://pokeapi.co/api/v2/pokemon/ditto',
    );
    const data = yield call([response, 'json']);
    console.log(JSON.stringify(data, null, 3));
    // yield put({
    //   type: WalletActions.CONNECT_WALLET,
    //   data,
    // });
    yield put({
      type: WalletActions.ERROR,
    });
  } catch (error) {
    yield put({
      type: WalletActions.ERROR,
    });
  }
}

function* watchConnectWallet() {
  yield takeEvery(WalletActions.START_CONNECTION, connectWallet);
}

export function* walletSagas() {
  yield all([watchConnectWallet()]);
}
