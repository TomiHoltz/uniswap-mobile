import React from 'react';
import {Text, Image, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {LinearGradient} from 'expo-linear-gradient';

import {PressableOpacity} from '../../components';
import {startWallectConnection, RootState} from '../../store';

import UniswapLogo from '../../assets/images/UniswapLogo.png';

export const OnBoardingScreen = () => {
  const {wallet} = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  console.log(wallet);

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['rgb(252,221,236)', 'white', 'white']}
      style={styles.background}>
      <Image source={UniswapLogo} style={styles.logo} />
      <Text style={styles.title}>Buy, swap and send crypto tokens.</Text>
      {wallet.isLoading ? (
        <PressableOpacity style={styles.firstButton}>
          <Text style={styles.firstButtonText}>Cargando</Text>
        </PressableOpacity>
      ) : (
        <PressableOpacity
          style={styles.firstButton}
          onPress={() => dispatch(startWallectConnection())}>
          <Text style={styles.firstButtonText}>Connect wallet</Text>
        </PressableOpacity>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  logo: {
    marginTop: 'auto',
    width: '100%',
    height: 300,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  firstButton: {
    backgroundColor: '#E8006F',
    width: '100%',
    height: 64,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 'auto',
  },
  secondButton: {
    color: '#E8006F',
    backgroundColor: 'white',
    width: '100%',
    height: 64,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  firstButtonText: {
    color: 'white',
    fontSize: 20,
  },
  secondButtonText: {
    color: '#E8006F',
    fontSize: 20,
    fontWeight: '500',
  },
});
