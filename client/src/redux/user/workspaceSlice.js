// reducers.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentWorkspaceSessions: null,
  error: null,
  loading: false,
};

// const sessionReducer = createReducer(initialState, (builder) => {
//   builder.addCase('CREATE_SESSION', (state, action) => {
//     // Handle creating a new session, add it to the state
//     const { sessionName, sessionDescription, isPrivate } = action.payload;
//     const newSession = { id: Date.now(), name: sessionName, description: sessionDescription, isPrivate: isPrivate };
//     state.sessions.push(newSession);
//   });
// });
const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    createWorkspaceStart: (state) => {
      state.loading = true;
    },
    createWorkspaceSuccess: (state, action) => {
      state.currentWorkspaceSessions = action.payload;
      state.loading = false;
      state.error = null;
    },
    createWorkspaceFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const {
  createWorkspaceStart,
  createWorkspaceSuccess,
  createWorkspaceFailure,
} = workspaceSlice.actions;
export default workspaceSlice.reducer;
// export default sessionReducer;
