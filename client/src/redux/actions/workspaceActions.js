export const CREATE_WORKSPACE = 'CREATE_WORKSPACE';
export const JOIN_WORKSPACE = 'JOIN_WORKSPACE';

export const createWorkspace = (name, description, isPrivate) => ({
  type: CREATE_WORKSPACE,
  payload: { name, description, isPrivate },
});

export const joinWorkspace = (workspaceId) => ({
  type: JOIN_WORKSPACE,
  payload: { workspaceId },
});