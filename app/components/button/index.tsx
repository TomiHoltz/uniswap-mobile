// /* eslint-disable react/jsx-no-undef */
// import {colorMap} from '@belo/app/constants';
// import tw from '@belo/app/tailwind';
// import React, {FC} from 'react';
// import {ActivityIndicator, PressableProps, View} from 'react-native';

// import {PressableOpacity} from '../pressable';
// // import {ButtonText} from '../typography';
// import {PressableStyles, TextStyles} from './styles';

// type Properties = PressableProps & {
//   variant?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'disabled';
//   borderRadius?: string;
//   bgStyle?: any;
//   textStyle?: any;
//   loading?: boolean;
// };

// export const UniswapButton: FC<Properties> = ({
//   children,
//   variant = 'primary',
//   borderRadius = 'rounded-xl',
//   onPress,
//   bgStyle,
//   textStyle,
//   loading = false,
//   ...properties
// }) => {
//   const disabled = variant === 'disabled' || loading || properties.disabled;

//   return (
//     <PressableOpacity
//       accessibilityRole="button"
//       disabled={disabled}
//       testID={properties.testID}
//       {...properties}
//       onPress={loading ? () => null : onPress}>
//       <View
//         style={tw
//           .get()
//           .style(
//             PressableStyles(
//               loading || properties.disabled ? 'disabled' : variant,
//             ),
//             `${borderRadius}`,
//             bgStyle,
//           )}>
//         {typeof children === 'string' ? (
//           <ButtonText style={tw.get().style(TextStyles(variant), textStyle)}>
//             {loading ? (
//               <ActivityIndicator
//                 color={colorMap().neutrals[disabled ? 500 : 700]}
//                 size="small"
//               />
//             ) : (
//               children
//             )}
//           </ButtonText>
//         ) : loading ? (
//           <ActivityIndicator
//             color={colorMap().neutrals[disabled ? 500 : 700]}
//             size="small"
//           />
//         ) : (
//           children
//         )}
//       </View>
//     </PressableOpacity>
//   );
// };
