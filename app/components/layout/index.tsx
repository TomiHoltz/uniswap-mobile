import React, {FC, ReactNode} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

export enum StatusbarColor {
  LIGHT = 'light-content',
  DARK = 'dark-content',
}
interface LayoutProperties {
  children: ReactNode;
  topBar?: ReactNode;
  style?: any;
  containerStyle?: any;
  statusBarTextColor?: StatusbarColor;
}

export const Layout: FC<LayoutProperties> = ({
  children,
  topBar,
  containerStyle,
}) => {
  //   const {settingsStore} = useStore();

  return (
    <SafeAreaView
      //   style={[
      //     tw.get()`relative flex-1 bg-background-light dark:bg-background-dark`,
      //     style,
      //   ]}
      testID="app-layout">
      <StatusBar />
      {topBar}
      <View style={containerStyle}>{children}</View>
    </SafeAreaView>
  );
};
