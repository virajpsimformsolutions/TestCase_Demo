import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface HeaderProps {
  tasksCounter: number;
}

const Header = ({ tasksCounter }: HeaderProps) => {
  const tasksCounterText = tasksCounter === 1 ? 'Todo' : 'Todos';
  console.log(tasksCounterText);
  return (
    <View style={styles.container}>
      <Text style={styles.tasksCounter}>ToDo </Text>
      <View style={styles.tasks}>
        <Text style={styles.tasksCounter}>Total item </Text>
        <Text style={styles.tasksCounterBold}>
          {tasksCounter} {tasksCounterText}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 24,
    paddingBottom: 60,
    backgroundColor: '#9240C1',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  tasks: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  tasksCounter: {
    fontSize: 15,
    color: '#FFF'
  },
  tasksCounterBold: {
    fontSize: 20,
    color: '#FFF'
  }
});

Header.whyDidYouRender = true;

export default Header;