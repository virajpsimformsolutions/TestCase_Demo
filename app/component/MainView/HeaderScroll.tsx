import React, {useState} from 'react';

import {Pressable, Text, View} from 'react-native';

const maxHeaderHeight = 350;

const HeaderScroll = () => {
  const [apiModalVisible, setApiModalVisible] = useState(false);
  return (
    <View style={{flex: 1}}>
      <Pressable onPress={() => setApiModalVisible(!apiModalVisible)}>
        {apiModalVisible && <Text>`dfbfgbfgb {apiModalVisible}`</Text>}
        {!apiModalVisible && <Text>`dbfgdfbfgbfgbbfgb {apiModalVisible}`</Text>}
      </Pressable>
      <Pressable onPress={() => setApiModalVisible(!apiModalVisible)}>
        {apiModalVisible && <Text>`dfbfgbfgb {apiModalVisible}`</Text>}
        {!apiModalVisible && <Text>`dbfgdfbfgbfgbbfgb {apiModalVisible}`</Text>}
      </Pressable>
    </View>
  );
};

HeaderScroll.whyDidYouRender = true;
export default HeaderScroll;
