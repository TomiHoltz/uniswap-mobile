import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';
import UniswapLogo from './app/assets/images//UniswapLogo.png';
import {PressableOpacity} from './app/components/pressable';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgb(252,221,236)', 'white', 'white']}
        style={styles.background}>
        <Image source={UniswapLogo} style={styles.logo} />
        <Text style={styles.title}>Buy, swap and send crypto tokens.</Text>
        <PressableOpacity style={styles.firstButton}>
          <Text style={styles.firstButtonText}>
            Get started with a new wallet
          </Text>
        </PressableOpacity>
        <PressableOpacity style={styles.secondButton}>
          <Text style={styles.secondButtonText}>
            or import an existing wallet
          </Text>
        </PressableOpacity>
      </LinearGradient>
    </>
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

export default App;
