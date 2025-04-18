import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM Posts WHERE cat=?"
    : "SELECT * FROM Posts";
  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  console.log("from post");

  const q =
    "SELECT `username`, `title`, `desc`, p.img, u.img AS userImg, p.id AS id, `cat`, `date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id=?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  console.log("from add post controller");

  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");
    const q =
      "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date` , `uid`) VALUES (?)";
    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      req.body.date,
      userInfo.id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been created.");
    });
  });
};

export const deletePost = (req, res) => {
  console.log("from delete post controller");

  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid !");

    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE `id`=? AND `uid`=?";
    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can delete ony your posts!");
      return res.json({
        msg: "Post has been deleted!",
        data,
        uid: userInfo.id,
      });
    });
  });
};

export const updatePost = (req, res) => {
  console.log("from delete update controller");

  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid !");

    const postId = req.params.id;
    const q =
      "UPDATE INTO posts SET`title`=?, `desc`=?, `img`=?, `cat`=? WHERE `id`=? and `uid`=?";
    const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];

    db.query(
      q,
      [...values, postId, userInfo.id],
      userId,
      userInfo.id,
      (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Post has been Updated .");
      }
    );
  });
};
