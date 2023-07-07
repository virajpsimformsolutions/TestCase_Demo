/* eslint-disable @typescript-eslint/ban-types */
import type {PreloadedState} from '@reduxjs/toolkit';
import {configureStore} from '@reduxjs/toolkit';
import type {RenderOptions} from '@testing-library/react-native';
import {render} from '@testing-library/react-native';
import React, {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
// import {RootState} from '../redux';
import reducer from '../redux/Todo/TodoSlice';
import {AppStore, RootState} from '../redux/store';

// import type {AppStore, RootState} from '../app/store';

// As a basic setup, import your same slice reducers

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState,
    // Automatically create a store instance if no store was passed in
    store = configureStore({reducer: {Todo: reducer}, preloadedState}),
    ...renderOptions
  }: ExtendedRenderOptions
) {
  function Wrapper({children}: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
}
