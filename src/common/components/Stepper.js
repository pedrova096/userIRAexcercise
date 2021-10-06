import React from 'react';
import {View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {colors} from 'src/constants/theme';
import {OpacityHex} from 'src/utility/stytlus';
import styles from './styles/stepper.styles';
import Text from './Text';

const CircleProgress = ({
  size,
  strokeWidth,
  percentage,
  colorFront,
  colorBack,
  children,
}) => {
  const r = (size - strokeWidth) / 2;
  const circumference = r * Math.PI * 2;
  const dash = percentage * circumference;
  return (
    <Svg width={size} height={size}>
      <Circle
        r={r}
        strokeWidth={strokeWidth}
        stroke={colorBack}
        cx="50%"
        cy="50%"
      />
      <Circle
        r={r}
        strokeWidth={strokeWidth}
        stroke={colorFront}
        cx="50%"
        cy="50%"
        strokeDasharray={[dash, circumference - dash]}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      {children}
    </Svg>
  );
};

const Stepper = ({list = [], index = 0}) => {
  const currentLabel = list[index]?.label;
  const nextLabel = list[index + 1]?.label;
  const percentage = (index + 1) / list.length;
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <CircleProgress
          size={70}
          strokeWidth={6}
          percentage={percentage}
          colorFront={colors.light}
          colorBack={OpacityHex(colors.light, 0.4)}
        />
        <Text style={styles.circleText}>
          {index + 1}/{list.length}
        </Text>
      </View>
      <View>
        <Text mode="bold" style={styles.current}>
          {currentLabel}
        </Text>
        {Boolean(nextLabel) && (
          <Text style={styles.next}>Next: {nextLabel}</Text>
        )}
      </View>
    </View>
  );
};

export default Stepper;
