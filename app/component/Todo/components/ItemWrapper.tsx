import React, {ReactNode} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface ItemWrapperProps {
  index: number;
  children: ReactNode;
}

export function ItemWrapper({index, children}: ItemWrapperProps) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: index % 2 === 0 ? '#000003' : 'white'
      }}
    >
      {children}
    </View>
  );
}
