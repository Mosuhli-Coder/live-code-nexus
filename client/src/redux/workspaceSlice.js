// src/redux/workspaceSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const workspaceSlice = createSlice({
  name: 'workspaces',
  initialState: [],
  reducers: {
    createWorkspace: (state, action) => {
      const newWorkspace = {
        id: state.length + 1,
        name: action.payload.name,
        description: action.payload.description,
        isPrivate: action.payload.isPrivate,
      };
      console.log(newWorkspace);
      return [...state, newWorkspace];
    },
    joinWorkspace: (state, action) => {
      // Handle joining a workspace if needed
      return state;
    },
  },
});

export const { createWorkspace, joinWorkspace } = workspaceSlice.actions;

export default workspaceSlice.reducer;
