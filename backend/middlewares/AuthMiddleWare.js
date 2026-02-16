import jwt from "jsonwebtoken";
import User from "../model/userAuth.js";
export const protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "not token provide",
    });
  }
  try {
    const decode = await jwt.verify(token, process.env.JWT_SCRETE);
    req.user = await User.findById(decode.id).select("-password");
    next();
  } catch (err) {
    res.status(401).json({
      message: "invalid or expired token",
    });
  }
};
