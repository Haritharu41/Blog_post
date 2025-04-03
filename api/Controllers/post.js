import {db} from "../db.js";

export const getPosts=(req,res)=>{


   const q= req.query.cat ? "SELECT * FROM Posts WHERE cat=?" : "SELECT * FROM Posts";
   db.query(q, [req.query.cat], (err, data)=>{
    if (err) return res.jsonO(err);
     return res.status(200).json(data);
   })
}
export const getPost=(req,res)=>{
    res.json("From Post controller")
}
export const addPost=(req,res)=>{
    res.json("From Post controller")
}
export const deletePost=(req,res)=>{
    res.json("From Post controller")
}
export const updatePost=(req,res)=>{
    res.json("From Post controller")
}
