import {createSlice} from '@reduxjs/toolkit';

export interface WalletState {
  isWalletConnected: boolean;
  isLoading: boolean;
  walletAddress?: string;
}

const initialState: WalletState = {
  isWalletConnected: false,
  isLoading: false,
};

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    startWallectConnection: state => {
      state.isLoading = true;
    },
    connectWallet: (state, action) => {
      state.isWalletConnected = true;
      state.walletAddress = action.payload;
      state.isLoading = false;
    },
    errorInWalletConnection: state => {
      state.isLoading = false;
    },
  },
});

export const {startWallectConnection, connectWallet, errorInWalletConnection} =
  walletSlice.actions;
