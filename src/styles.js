import {Dimensions, Platform} from 'react-native';

export const colors = {
  white: '#ffffff',
  black: '#000000',
  lightGray: '#BDBDBD',
  mediumGray: '#666666',
  darkGray: '#222222',
  opaqueBlack: 'rgba(0, 0, 0, 0.4)',
  mintGreen: '#3D9690',
  red: '#FF0000',
  tan: '#ede9d6',
  yellowGold: '#efca55',
  calendarBlue: '#5C7BEB',
  calendarBlueLight: 'rgba(92, 123, 235, 0.9)',
};

export const fonts = {
  gothic: 'Apple SD Gothic Neo',
};

export const sectionTitle = {
  fontFamily: fonts.gothic,
  fontSize: 18,
  color: colors.black,
  marginTop: 20,
};

export const blockText = {
  fontFamily: fonts.gothic,
  fontSize: 14,
  color: colors.black,
  marginVertical: 9,
};

export let dynamicSizes = {
  tabNavigatorHeight: isIphoneXorGreater() ? 100 : 60,
};

function isIphoneXorGreater() {
  const dim = Dimensions.get('window');

  return Platform.OS === 'ios' && (dim.height >= 812 || dim.width >= 812);
}
