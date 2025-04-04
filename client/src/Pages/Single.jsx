import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import edit from "../img/edit.png";
import dele from "../img/dele.png";
import Menu from "../Components/Menu";
import moment from "moment";
import { axios } from "../utils/axios";
import { AuthContext } from "../Context/authContext";

function Single() {
  const [post, setPost] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPosts();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post.id}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="singlePage">
      <div className="content">
        <img src={post?.img} alt="" />

        <div className="user">
          {post.userImg && <img src={post.userImg} />}

          <div className="info">
            <span>Posted by:{post.username}</span>
            <p>Posted {moment(post.data).fromNow()}</p>
          </div>
          {currentUser?.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={edit} alt="edit img" />
              </Link>

              <img onClick={handleDelete} src={dele} alt="delte img" />
            </div>
          )}
        </div>

        <h1>{post.title}</h1>
        <p>{getText(post.desc)}</p>
      </div>
      <Menu cat={post.cat} />
    </div>
  );
}

export default Single;
