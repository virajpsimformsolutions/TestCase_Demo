import React, { useEffect, useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import BaseButton from '../Button';
import HomeScreen from '../HomeScreen';
import TodoHomePage from '../Todo/pages/TodoHomePage';
import APIView from './APIView';
import HeaderScroll from './BigList';
import { useFetch } from '../../hook/useFeatch';
import TreeSelection from '../TreeSelection';
import { SheetManager } from 'react-native-actions-sheet';

const MainView = () => {
  const fetchedResponse = useFetch('https://www.hpb.health.gov.lk/api/get-current-statistical');
  const [modalVisible, setModalVisible] = useState(false);
  const [currentView, setCurrentView] = useState('');

  useEffect(() => {
    setModalVisible(true);
  }, [currentView]);

  const MainData = {
    home: {
      view: <HomeScreen />
    },
    api: {
      view: <APIView />
    },
    todo: {
      view: <TodoHomePage />
    },
    performance: {
      view: <HeaderScroll />
    },
    treeData: {
      view: <TreeSelection />
    },
    default: {
      view: <View />
    }
  };

  return (
    <View testID="entryScreen">
      {currentView !== '' && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}>
            <Pressable onPress={() => setModalVisible(false)}>
              <Text>Close</Text>
            </Pressable>
            {MainData?.[currentView]?.view}
          </View>
        </Modal>
      )}
      <BaseButton
        onPress={() => {
          setCurrentView('home');
        }}
        label={'Home'}
      />
      <BaseButton
        onPress={() => {
          setCurrentView('api');
        }}
        label={'API'}
      />
      <BaseButton
        onPress={() => {
          setCurrentView('todo');
        }}
        label={'todo'}
      />
      <BaseButton
        onPress={() => {
          setCurrentView('performance');
        }}
        label={'Performance'}
      />
      <BaseButton
        onPress={() => {
          setCurrentView('treeData');
        }}
        label={'TreeData'}
      />
      <BaseButton
        onPress={() => {
          SheetManager.show('example-sheet', {
            payload: { value: 'Hello World' }
          });
        }}
        label={'Sheet'}
      />
    </View>
  );
};
MainView.whyDidYouRender = true;
export default MainView;
