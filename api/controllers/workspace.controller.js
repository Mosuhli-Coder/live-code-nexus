import Workspace from "../models/workspace.model.js";

export const createWorkspace = async (req, res, next) => {
    try {
        const newWorkspace = await Workspace.create(req.body);
        res.status(201).json({
          message: "New workspace created successfully",
          data: newWorkspace,
        });
      } catch (error) {
        next(error);
      }
}