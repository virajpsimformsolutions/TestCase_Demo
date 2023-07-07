import React, { useState } from 'react';
import { Button, Modal, Pressable, Text, TextInput, View } from 'react-native';
import { addToDo } from '../../redux/Todo/TodoSlice';
import { useAppDispatch } from '../../redux/useStoreHooks';
import HomeScreen from '../HomeScreen';
import HomePage from '../Todo/pages/HomePage';
import APIView from './APIView';
import HeaderScroll from './HeaderScroll';
import ListTodo from './ListTodo';

const MainView = () => {
  const dispatch = useAppDispatch();

  const [state, setState] = useState({
    title: '',
    contentError: null
  });

  const handleChange = (e: any) => {
    setState({
      ...state,
      title: e
    });
  };
  const add = () => {
    if (state?.title === '' || state.title === undefined) {
      setState({ ...state, contentError: 'You must write something!' });
      return;
    }
    dispatch(addToDo({ newContent: state?.title ?? 'Hello' }));
    setState({ ...state, title: '' });
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [apiModalVisible, setApiModalVisible] = useState(false);
  const [toDoVisible, setToDoVisible] = useState(false);
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [homeModalVisible, setHomeModalVisible] = useState(false);
  return (
    <View testID="entryScreen">
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}>
          <Text>What's your plan for today</Text>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text>Close</Text>
          </Pressable>
          <TextInput
            testID="inputView"
            placeholder="username"
            // value={'text'}
            style={{ borderColor: 'black', borderWidth: 1, height: 40 }}
            onChangeText={handleChange}
          />
          <Button testID="AddButton" title="Add" onPress={add} />
          {state?.contentError ? <Text>{state?.contentError}</Text> : null}
          <ListTodo setModalVisible={setModalVisible} />
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text>Todo</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={homeModalVisible}
        onRequestClose={() => {
          setHomeModalVisible(!modalVisible);
        }}
      >
        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}>
          <Text>HomeScreen Data</Text>
          <Pressable onPress={() => setHomeModalVisible(false)}>
            <Text>Close</Text>
          </Pressable>
          <HomeScreen />
        </View>
      </Modal>
      <Pressable onPress={() => setHomeModalVisible(true)}>
        <Text>Home</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={apiModalVisible}
        onRequestClose={() => {
          setApiModalVisible(!apiModalVisible);
        }}
      >
        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}>
          <Pressable onPress={() => setApiModalVisible(false)}>
            <Text>Close</Text>
          </Pressable>
          <APIView />
        </View>
      </Modal>
      <Pressable onPress={() => setApiModalVisible(true)}>
        <Text>API</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={toDoVisible}
        onRequestClose={() => {
          setApiModalVisible(!toDoVisible);
        }}
      >
        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}>
          <Pressable onPress={() => setToDoVisible(false)}>
            <Text>Close</Text>
          </Pressable>
          <HomePage />
        </View>
      </Modal>
      <Pressable onPress={() => setToDoVisible(true)}>
        <Text>Main ToDO</Text>
      </Pressable>

      {/* <Modal
        animationType='slide'
        transparent={true}
        visible={imageModalVisible}
        onRequestClose={() => {
          setImageModalVisible(!apiModalVisible);
        }}
      >
        <View style={{flex: 1, backgroundColor: 'white', marginTop: 50}}>
          <Pressable onPress={() => setImageModalVisible(false)}>
            <Text>Close</Text>
          </Pressable>
          <ImageScrollModal
            visible={imageModalVisible}
            onDismiss={() => setImageModalVisible(false)}
          />
        </View>
      </Modal>
      <Pressable onPress={() => setImageModalVisible(true)}>
        <Text>ImageScrollModal</Text>
      </Pressable> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={imageModalVisible}
        onRequestClose={() => {
          setImageModalVisible(!apiModalVisible);
        }}
      >
        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}>
          <Pressable onPress={() => setImageModalVisible(false)}>
            <Text>Close</Text>
          </Pressable>
          <HeaderScroll />
        </View>
      </Modal>
      <Pressable onPress={() => setImageModalVisible(true)}>
        <Text>Performance</Text>
      </Pressable>
    </View>
  );
};
MainView.whyDidYouRender = true;
export default MainView;
