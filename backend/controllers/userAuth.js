// user registration
import User from "../model/userAuth.js";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res, next) => {
  try {
    let { name, email, password, role } = req.body;
    email = email.toLowerCase();

    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({
        message: "This Email Already exist",
      });
    }
    const user = await User.create({ name, email, password, role });

    const token = generateToken(user._id);

    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};
// get all users

export const getUsers = async (req, res, next) => {
  try {
    const user = await User.find().sort({createdAt: -1})
    res.json({ user });
  } catch (err) {
    next(err);
  }
};
// user loggin
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        message: "invalid email or password",
      });
    }

    const token = generateToken(user._id);

    res.json({ token });
  } catch (err) {
    next(err);
  }
};
