import React, {memo} from 'react';
import {Text, View} from 'react-native';

const RenderedItemData = ({item}: any) => {
  return (
    <View testID='renderedItemData'>
      <Text style={{fontSize: 20}}> {item?.API}</Text>
    </View>
  );
};

RenderedItemData.whyDidYouRender = true;

export default memo(RenderedItemData);
