import { Platform, PixelRatio } from 'react-native';

export const getPixelSize = pixel => {
  return Platform.select({
    ios: pixel,
    android: PixelRatio.getPixelSizeForLayoutSize(pixel),
  });
};
