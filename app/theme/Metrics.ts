import {Dimensions, Platform, StatusBar} from 'react-native';

const {width, height} = Dimensions.get('screen');
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
const isLessWidth = windowWidth < windowHeight;
const shortDimension = isLessWidth ? windowWidth : windowHeight;
const longDimension = isLessWidth ? windowHeight : windowWidth;

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
const deviceWidth = width;

// Do not use scale, verticalScale and moderateScale now onwards. Please use scale with new size, verticalScale with new size and moderateScale with new size as per the requirements
const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

/**
 * For vertical size (marginTop, marginBottom, etc) => verticalScaleWithNewSize
   For horizontal (marginLeft, marginRight, etc)=> scaleWithNewSize
   For fonts => moderateScaleWithNewSize
   For size that needs to take care of all sides => scaleWithNewSize
 */
const scaleWithNewSize = (changeSize: number): number => {
  return (shortDimension / guidelineBaseWidth) * changeSize;
};
const verticalScaleWithNewSize = (changeSize: number): number => {
  return (longDimension / guidelineBaseHeight) * changeSize;
};
const moderateScaleWithNewSize = (changeSize: number, factor = 0.5): number => {
  return changeSize + (scale(changeSize) - changeSize) * factor;
};
const moderateVerticalScaleWithNewSize = (changeSize: number, factor = 0.5): number => {
  return changeSize + (verticalScale(changeSize) - changeSize) * factor;
};

// Used via Metrics.baseMargin
const Metrics = {
  zero: 0,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  roundCorner: moderateScale(6),
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? verticalScale(64) : verticalScale(54),
  paddingHorizontal: scaleWithNewSize(5),
  paddingVertical: verticalScaleWithNewSize(8),
  profileImage: moderateScaleWithNewSize(100),
  size: {
    s: 5,
    m: 10,
    l: 15,
    xl: 20,
    xxl: 25,
    xxxl: 30
  },
  keyboardVerticalOffset: Platform.OS === 'ios' ? moderateScale(40) : 0,
  isIOS: Platform.OS === 'ios',
  statusBarHeight: StatusBar.currentHeight,
  windowWidth: windowWidth,
  windowHeight: windowHeight
};

export {
  deviceWidth,
  Metrics,
  scaleWithNewSize,
  verticalScaleWithNewSize,
  moderateScaleWithNewSize,
  moderateVerticalScaleWithNewSize
};
