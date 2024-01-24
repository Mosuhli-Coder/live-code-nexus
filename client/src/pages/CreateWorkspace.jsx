import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createWorkspace, joinWorkspace } from '../redux/actions/workspaceActions';

export default function CreateWorkspace() {
  const [workspaceName, setWorkspaceName] = useState('');
  const [workspaceDescription, setWorkspaceDescription] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  const dispatch = useDispatch();
  const workspaces = useSelector(state => state.workspaces); 

  const handleCreateWorkspace = () => {
    dispatch(createWorkspace(workspaceName, workspaceDescription, isPrivate));
    console.log(workspaces);
  };

  const handleJoinWorkspace = (workspaceId) => {
    dispatch(joinWorkspace(workspaceId));
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Create Workspace</h1>

      {/* Workspace creation form */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Workspace Name</label>
        <input
          type="text"
          className="mt-1 p-2 border rounded-md w-full"
          value={workspaceName}
          onChange={(e) => setWorkspaceName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Workspace Description</label>
        <textarea
          className="mt-1 p-2 border rounded-md w-full"
          value={workspaceDescription}
          onChange={(e) => setWorkspaceDescription(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Private Workspace</label>
        <input
          type="checkbox"
          className="mt-1"
          checked={isPrivate}
          onChange={() => setIsPrivate(!isPrivate)}
        />
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={handleCreateWorkspace}
      >
        Create Workspace
      </button>

      {/* List of existing workspaces */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Existing Workspaces</h2>
        <ul>
          {workspaces?.map(workspace => (
            <li key={workspace.id} className="mb-2">
              {workspace.name} - {workspace.description}{' '}
              <button
                className="text-blue-500"
                onClick={() => handleJoinWorkspace(workspace.id)}
              >
                Join
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
