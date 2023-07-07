import React, {memo} from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

const TodoItem = ({item, onEditToggle, onDelete}: any) => {
  const dispatch = useDispatch();
  return (
    <View key={item?.id}>
      <Text>{item?.title}</Text>
      <View>
        <Button testID='close' title='close' onPress={() => onDelete(item?.id)} />
        <Button testID='Edit' title='Edit' onPress={() => onEditToggle(item?.id, item?.title)} />
      </View>
    </View>
  );
};
TodoItem.whyDidYouRender = true;

export default memo(TodoItem);
