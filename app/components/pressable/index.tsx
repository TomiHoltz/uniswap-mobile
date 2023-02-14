import React, {FC} from 'react';
import {Pressable, PressableProps} from 'react-native';

export const PressableOpacity: FC<PressableProps> = properties => {
  return (
    <Pressable
      {...properties}
      style={({pressed}) => [
        properties.style as any,
        {opacity: pressed ? 0.5 : 1},
      ]}>
      {properties.children}
    </Pressable>
  );
};
