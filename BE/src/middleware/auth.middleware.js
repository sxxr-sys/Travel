import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  if (req.path.startsWith("/auth")) return next();

  const auth = req.headers.authorization;
  const token = auth?.split(" ")[1];

  if (!token) return res.status(401).json({ error: "Нэвтрэнэ үү!" });

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = user;

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: "Нэвтрэнэ үү!" });
  }
};
