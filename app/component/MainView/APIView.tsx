/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from 'axios';
import React, {useCallback, useState} from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import RenderedItemData from './ItemData';

const APIView = () => {
  const [state, setState] = useState();

  const apiCalled = async () => {
    const data = await axios.get('https://api.publicapis.org/entries');
    setState(data?.data?.entries);
  };

  // const renderItem = useCallback(({item}) => {
  //   return <RenderedItemData item={item} />;
  // }, []);

  const renderText = useCallback(() => {
    return <Text>API Called</Text>;
  }, []);

  const RenderedItemData = ({item}: any) => {
    return (
      <View testID='renderedItemData'>
        <Text>{item?.API}</Text>
      </View>
    );
  };
  return (
    <View testID='entryScreen'>
      {renderText()}
      <Button testID='ApiCalledButton' title='ApiCalled' onPress={apiCalled} />
      <FlatList
        data={state}
        keyExtractor={(item, index) => String(index)}
        renderItem={RenderedItemData}
        updateCellsBatchingPeriod={4}
        maxToRenderPerBatch={20}
      />
    </View>
  );
};
APIView.whyDidYouRender = true;
export default APIView;
