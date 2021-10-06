import React, {useState, useCallback} from 'react';
import {View, TextInput, ActivityIndicator} from 'react-native';
import Text from './Text';
import {colors} from 'src/constants/theme';
import styles from './styles/input.styles';
import {OpacityHex} from 'src/utility/stytlus';

const onTouchEnd = e => e.stopPropagation();

const placeholderColor = OpacityHex(colors.dark, 0.5);

const loader = <ActivityIndicator color={colors.primary} />;

const Input = ({
  style,
  helpText = '',
  error = false,
  marginless = false,
  loading = false,
  editable = true,
  icon,
  iconColor = colors.dark,
  onIconPress,
  styleContainer,
  styleIconContainer,
  pointerEvents,
  inputRef,
  label,
  onFocus,
  onBlur,
  placeholderTextColor = placeholderColor,
  ...inputProps
}) => {
  const [focus, setFocus] = useState(false);

  const handleFocus = useCallback(
    e => {
      if (onFocus) {
        onFocus(e);
      }
      setFocus(true);
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    e => {
      if (onBlur) {
        onBlur(e);
      }
      setFocus(false);
    },
    [onBlur],
  );
  return (
    <View
      pointerEvents={pointerEvents}
      style={[styles.container, !marginless && styles.margin, styleContainer]}>
      <Text style={[styles.label, focus && styles.labelFocus]} mode="bold">
        {label}
      </Text>
      <TextInput
        {...inputProps}
        ref={inputRef}
        style={[styles.input, focus && styles.inputFocus, style]}
        selectionColor={colors.primary}
        placeholderTextColor={placeholderTextColor}
        onTouchEnd={onTouchEnd}
        editable={editable > loading}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {!!helpText && (
        <Text style={[styles.helpText, error && styles.errorText]}>
          {helpText}
        </Text>
      )}
    </View>
  );
};

export default Input;
