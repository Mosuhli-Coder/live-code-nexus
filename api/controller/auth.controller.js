import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

export const signup = async (req, res, next) => {
    const {firstName, surname, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({firstName, surname, email, password: hashedPassword})

    try {
        await newUser.save();
        res.status(201).json({
          message: "New user created successfully",
          data: newUser,
        });
      } catch (error) {
        next(error);
      }
}