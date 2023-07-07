import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const BaseButton = (props) => {
  const {buttonStyle, textStyle} = styles;
  const {onPress, label} = props;
  return (
    <TouchableOpacity testID='button' onPress={onPress} style={buttonStyle}>
      <Text testID='text' style={textStyle}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default BaseButton;
