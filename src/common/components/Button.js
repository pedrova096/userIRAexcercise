import React from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import Text from './Text';
import styles from './styles/button.styles';
import {colors} from 'src/constants/theme';

const BUTTON_MODE_STYLE = {
  filled: {
    buttonStyle: styles.buttonFilled,
    textStyle: styles.textWhite,
  },
  outline: {
    buttonStyle: styles.buttonOutline,
    textStyle: styles.textSecondary,
  },
  anchor: {
    buttonStyle: styles.buttonSimple,
    textStyle: styles.textAnchor,
  },
  simple: {
    buttonStyle: styles.buttonFullSimple,
    textStyle: {},
  },
  none: {},
};

const Button = ({
  text,
  style,
  styleText,
  onPress,
  children,
  disabled,
  activeOpacity = 0.8,
  mode = 'filled',
  loading,
  fullWidth = false,
  loaderColor = colors.light,
  left,
}) => {
  const {buttonStyle, textStyle} = BUTTON_MODE_STYLE[mode];
  return (
    <TouchableOpacity
      style={[
        styles.button,
        fullWidth && styles.fullWidth,
        !!left && styles.leftMode,
        buttonStyle,
        disabled && mode === 'filled' && styles.disabled,
        style,
      ]}
      onPress={onPress}
      activeOpacity={activeOpacity}
      disabled={disabled || loading}>
      {children ? (
        children
      ) : (
        <>
          {left}
          <Text
            mode="bold"
            style={[
              styles.text,
              textStyle,
              disabled && styles.disabledText,
              styleText,
            ]}>
            {text}
          </Text>
          {loading && (
            <ActivityIndicator color={loaderColor} style={styles.loader} />
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
