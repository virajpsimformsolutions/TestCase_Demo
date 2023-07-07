import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import logoImg from '../assets/images/logo/logo.png';

interface HeaderProps {
  tasksCounter: number;
}

export function Header({ tasksCounter }: HeaderProps) {
  const tasksCounterText = tasksCounter === 1 ? 'Todo' : 'Todos';
  console.log('shel');
  return (
    <View style={styles.container}>
      <Image source={logoImg} />

      <View style={styles.tasks}>
        <Text style={styles.tasksCounter}>Total item </Text>
        <Text style={styles.tasksCounterBold}>
          {tasksCounter} {tasksCounterText}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 24,
    paddingBottom: 60,
    backgroundColor: '#0267C1',
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
    // fontFamily: 'Inter-Regular'
  },
  tasksCounterBold: {
    fontSize: 15,
    color: '#FFF'
    // fontFamily: 'Inter-Bold'
  }
});