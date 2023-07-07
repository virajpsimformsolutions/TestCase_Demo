import React, {useCallback, useState} from 'react';
import {Button, FlatList, Pressable, Text, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {addToDo, deleteToDoReducer, editTodo} from '../../redux/Todo/TodoSlice';
import {useAppSelector} from '../../redux/useStoreHooks';
import TodoItem from './TodoItem';

const ListTodo = ({setModalVisible}) => {
  const {todoList} = useAppSelector((state) => state?.Todo);
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [state, setState] = useState({
    id: 0,
    title: '',
    contentError: null
  });
  const onEditToggle = useCallback(
    (id: number, title: string) => {
      setEditing(true);
      setState({...state, id, title});
    },
    [state]
  );

  const onDelete = useCallback(
    (id: number) => {
      dispatch(deleteToDoReducer({id}));
    },
    [dispatch]
  );

  const handleChange = (e: any) => {
    if (title !== e) {
      setState({
        ...state,
        title: e,
        contentError: null
      });
      return;
    }
  };
  const {title, contentError, id} = state;
  const edit = () => {
    if (
      (state.title === '' || state.title === undefined) &&
      state.contentError !== 'You must write something!'
    ) {
      console.info('state.state.state.', state.contentError);
      setState({...state, contentError: 'You must write something!'});
      return;
    } else {
      dispatch(editTodo({title, id}));
      setEditing(false);
    }
  };

  const renderItem = useCallback(
    ({item}: any) => {
      return <TodoItem item={item} onEditToggle={onEditToggle} onDelete={onDelete} />;
    },
    [onDelete, onEditToggle]
  );

  const add = () => {
    if (state?.title === '' || state.title === undefined) {
      setState({...state, contentError: 'You must write something!'});
      return;
    }
    dispatch(addToDo({newContent: state?.title ?? 'Hello'}));
    setState({...state, title: ''});
  };

  // const renderedItemData = ({item}: any) => {
  //   return (
  //     <View key={item?.id}>
  //       <Text>{item?.title}</Text>
  //       <View>
  //         <Button testID='close' title='close' onPress={() => dispatch(deleteToDo(item?.id))} />
  //         <Button
  //           testID='Edit'
  //           title='Edit'
  //           onPress={() => onEditToggle(item?.id, item?.title)}
  //         />
  //       </View>
  //     </View>
  //   );
  // };
  return (
    <View style={{flex: 1, backgroundColor: 'white', marginTop: 50}}>
      <Text>What's your plan for today</Text>
      <Pressable onPress={() => setModalVisible(false)}>
        <Text>Close</Text>
      </Pressable>
      <TextInput
        testID='inputView'
        placeholder='username'
        // value={'text'}
        style={{borderColor: 'black', borderWidth: 1, height: 40}}
        onChangeText={handleChange}
      />
      <Button testID='AddButton' title='Add' onPress={add} />
      {state?.contentError ? <Text>{state?.contentError}</Text> : null}
      <View>
        {isEditing ? (
          <View>
            <Text>Update your plan for today</Text>
            <TextInput
              placeholder='Enter todo title'
              testID='inputView'
              style={{borderColor: 'black', borderWidth: 1}}
              onChangeText={handleChange}
            />
            <Button testID='edit' title='edit' onPress={edit} />
            {contentError ? <Text>{contentError}</Text> : null}
          </View>
        ) : (
          <View>
            <FlatList data={todoList} renderItem={renderItem} />
          </View>
        )}
      </View>
    </View>
  );
};
// ListTodo.whyDidYouRender = true;
export default ListTodo;
