import { db } from "../db.js";
export const addUser = (req, res) => {
  res.json("User controller");

  const q = "SELECT * FROM  users";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });

  db.connect((err) => {
    if (err) {
      console.error("Error connecting to database:", err);
      return;
    }
    console.log("Connected to database");
  });
};
