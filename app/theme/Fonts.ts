import {moderateScaleWithNewSize} from './Metrics';

const type = {
  avenirBold: 'AvenirNext-Bold',
  avenirMedium: 'Avenir-Medium'
};

const size = {
  f60: moderateScaleWithNewSize(60),
  f50: moderateScaleWithNewSize(50),
  h1: moderateScaleWithNewSize(38),
  h2: moderateScaleWithNewSize(34),
  h3: moderateScaleWithNewSize(30),
  h4: moderateScaleWithNewSize(26),
  h5: moderateScaleWithNewSize(22),
  h6: moderateScaleWithNewSize(18),
  s25: moderateScaleWithNewSize(25),
  regular: moderateScaleWithNewSize(17),
  header: moderateScaleWithNewSize(17),
  medium: moderateScaleWithNewSize(16),
  light: moderateScaleWithNewSize(14),
  mdLight: moderateScaleWithNewSize(13),
  small: moderateScaleWithNewSize(12),
  smaller: moderateScaleWithNewSize(11),
  xs: moderateScaleWithNewSize(10),
  tiny: moderateScaleWithNewSize(8.5),
  label: moderateScaleWithNewSize(16),
  large: moderateScaleWithNewSize(20)
};

export default {
  type,
  size
};
