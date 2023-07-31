import React, { memo } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import { useDispatch } from 'react-redux';
import { addToDo, deleteToDoReducer, editTodo } from '../../../redux/Todo/TodoSlice';
import { useAppSelector } from '../../../redux/useStoreHooks';
import Header from '../components/Header';
import TasksList from '../components/TasksList';
import TodoInput from '../components/TodoInput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
});

const TodoHomePage = () => {
  const tasks = useAppSelector((state) => state?.Todo.todoList);
  const dispatch = useDispatch();

  function handleAddTask(newTaskTitle: string) {
    const hasTaskWithThisName = tasks.findIndex((task) => task.title === newTaskTitle) > -1;

    if (hasTaskWithThisName) {
      Alert.alert('Already Exist', 'Same Task exist in list');
    } else {
      dispatch(addToDo({ newContent: newTaskTitle ?? 'Hello' }));
    }
  }

  function handleToggleTaskDone(id: number) {
    const itemnew = tasks.filter((task) => task.id === id);
    dispatch(editTodo({ done: !itemnew?.[0]?.done, id }));
  }

  function handleRemoveTask(id: number) {
    dispatch(deleteToDoReducer({ id }));
  }

  function handleUpdateTaskName(id: number, newTaskName: string) {
    dispatch(editTodo({ title: newTaskName, id }));
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />
      <TodoInput addTask={handleAddTask} />
      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
        updateTaskName={handleUpdateTaskName}
      />
    </View>
  );
};

TodoHomePage.whyDidYouRender = true;

export default TodoHomePage;
