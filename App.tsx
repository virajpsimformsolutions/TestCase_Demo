/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { Profiler } from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import MainView from './app/component/MainView';
import { setupStore } from './app/redux/store';
import { SheetProvider } from 'react-native-actions-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import './app/component/ActionSheet/sheets.tsx';
// import LogRocket from '@logrocket/react-native';
// LogRocket.init('zfpwij/performance');

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };

  const store = setupStore();

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SheetProvider>
            <MainView />
          </SheetProvider>
        </GestureHandlerRootView>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
