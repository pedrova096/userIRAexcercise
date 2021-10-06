import {width, height} from 'src/constants/device';
import {clamp} from 'lodash';

const scale = clamp((width / height) * 520, 200, 250);

export const Sizing = size => {
  const baseValuePoints = size * 0.75;
  const ratio = baseValuePoints / scale;
  const newSize = Math.round(ratio * width);
  return newSize;
};

export const OpacityHex = (color, opacity) =>
  `${color}${Math.trunc(opacity * 255)
    .toString(16)
    .padStart(2, '0')}`.toUpperCase();
