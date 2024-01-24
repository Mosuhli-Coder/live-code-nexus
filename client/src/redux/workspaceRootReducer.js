// src/redux/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import workspaceReducer from './workspaceSlice';

const rootReducer = combineReducers({
  workspaces: workspaceReducer,
});

export default rootReducer;