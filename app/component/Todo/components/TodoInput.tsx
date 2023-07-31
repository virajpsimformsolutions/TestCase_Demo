import React, { memo, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface TodoInputProps {
  addTask: (task: string) => void;
}

const TodoInput = ({ addTask }: TodoInputProps) => {
  const [task, setTask] = useState('');
  const [state, setState] = useState({
    id: 0,
    title: '',
    contentError: null
  });
  const addNewItem = () => {
    if (state?.title === '' || state.title === undefined) {
      setState({ ...state, contentError: 'You must write something!' });
      return;
    }
    setState({ ...state, title: '' });

    // if (state?.title === '' || state.title === undefined) {
    //   if (state.contentError !== 'You must write something!') {
    //     setState({ ...state, contentError: 'You must write something!' });
    //     return;
    //   } else {
    //     return;
    //   }
    // }
  };

  function handleAddNewTask() {
    if (task) {
      addTask(task);
      setTask('');
    } else {
      addNewItem();
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add new item..."
        placeholderTextColor="#B2B2B2"
        returnKeyType="send"
        selectionColor="#666666"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles.addButton}
        onPress={handleAddNewTask}
      >
        <Icon name="chevron-right" size={24} color="#B2B2B2" />
      </TouchableOpacity>
    </View>
  );
};

TodoInput.whyDidYouRender = true;

export default memo(TodoInput);

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginTop: -28,
    marginHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    height: 56,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRightWidth: 1,
    borderRightColor: '#EBEBEB',
    color: '#666666'
  },
  addButton: {
    backgroundColor: '#FFF',
    height: 56,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  }
});
