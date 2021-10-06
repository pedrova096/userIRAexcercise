export const OpacityHex = (color, opacity) =>
  `${color}${Math.trunc(opacity * 255)
    .toString(16)
    .padStart(2, '0')}`.toUpperCase();
