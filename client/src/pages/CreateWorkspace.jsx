import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  createWorkspaceStart,
  createWorkspaceSuccess,
  createWorkspaceFailure,
} from "../redux/user/workspaceSlice";

export default function CreateWorkspace() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(
    {
      name: "",
      description: "",
      isPrivate: false,
    },
  );
  const { currentWorkspaceSessions } = useSelector((state) => state.workspaces);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const handleChange = (e) => {
    if (e.target.id === "isPrivate") {
      setFormData({
        ...formData,
        [e.target.id]: e.target.checked,
      });
    }
    if (e.target.type === 'text' || e.target.type === 'textarea') {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value
      })
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(createWorkspaceStart());
      const res = await fetch("/api/workspace/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, userRef: currentUser._id }),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(createWorkspaceFailure(data.message));
        return;
      }
      dispatch(createWorkspaceSuccess(data));
      // navigate('/dashboard')
      console.log(data);
    } catch (error) {
      dispatch(createWorkspaceFailure(error.message));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Collaborative Code Editor</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          id="name"
          placeholder="Session Name"
          className="border p-3 rounded-lg"
          onChange={handleChange}
          value={formData.name}
        />
        <textarea
          type="text"
          id="description"
          onChange={handleChange}
          value={formData.description}
          placeholder="Description"
          className="border p-3 rounded-lg"
        />
        <label>
          Private:
          <input
            type="checkbox"
            id="isPrivate"
            onChange={handleChange}
            checked={formData.isPrivate}
          />
        </label>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Create Session
        </button>

        <h1>Workspace List</h1>
        {/* <ul>
          {workspaces.map((workspace) => (
            <li key={workspace.id}>
              <Link to={`/workspace/${workspace.id}`}>{workspace.name}</Link>
            </li>
          ))}
        </ul> */}
        <Link to="/workspace/123" className="text-blue-500">
          Join Session
        </Link>
      </form>
    </div>
  );
}
