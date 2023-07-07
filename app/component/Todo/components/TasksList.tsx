import React, {memo} from 'react';
import {FlatList} from 'react-native';
import {ItemWrapper} from './ItemWrapper';
import TaskItem from './TaskItem';
import {TodoItem} from '../../../redux/Todo/types';

interface TasksListProps {
  tasks: TodoItem[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  updateTaskName: (id: number, newTaskName: string) => void;
}

const TasksList = ({tasks, toggleTaskDone, removeTask, updateTaskName}: TasksListProps) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={{paddingBottom: 24}}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => {
        return (
          <ItemWrapper index={index}>
            <TaskItem
              index={index}
              task={item}
              toggleTaskDone={toggleTaskDone}
              removeTask={removeTask}
              updateTaskName={updateTaskName}
            />
          </ItemWrapper>
        );
      }}
      style={{
        marginTop: 32
      }}
    />
  );
};

TasksList.whyDidYouRender = true;

export default memo(TasksList);
