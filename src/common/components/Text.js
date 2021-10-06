import React from 'react';
import {Text as NativeText} from 'react-native';
import styles from './styles/text.styles';

const Text = ({children, center, mode, style, testID, numberOfLines = 0}) => {
  return (
    <NativeText
      testID={testID}
      style={[styles.base, center && styles.center, styles[mode], style]}
      numberOfLines={numberOfLines}
      allowFontScaling={false}>
      {children}
    </NativeText>
  );
};

export default Text;
