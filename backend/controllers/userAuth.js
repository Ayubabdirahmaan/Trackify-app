import User from "../model/userAuth.js";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res, next) => {
  try {
    let { name, email, password, role } = req.body;
    email.toLowerCase();

    const exist = await User.findOne({ email });
    if (exist) {
      res.status(400).json({
        message: "This Email Already exist",
      });

      const user = await User.create({ name, email, password, role });

      const token = generateToken(user._id);

      req.status(201).json({ token });
    }
  } catch (error) {
    next(error);
  }
};
