import {PreloadedState, combineReducers, configureStore} from '@reduxjs/toolkit';
import TodoReducer from './Todo/TodoSlice';

const rootReducer = combineReducers({
  Todo: TodoReducer
});
// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage
// };

// Bind redux persist to store data;
// const persistedReducer = persistReducer(persistConfig, rootReducer);

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
}

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       immutableCheck: false,
//       serializableCheck: false
//     })
// });

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
export type AppStore = ReturnType<typeof setupStore>;
// export {store};
