import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import edit from "../img/edit.png";
import dele from "../img/dele.png";
import Menu from "../Components/Menu";
import moment from "moment";
import { axios } from "../utils/axios";
import { AuthContext } from "../Context/authContext";

function Single() {
  const [post, setPost] = useState([]);

  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  console.log(userId);

  const {currentUser} = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`/post/${userId}`);
        console.log(res);
        console.log(res.data);

        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPosts();
  }, [userId]);

  console.log(post.username, currentUser);
  

  return (
    <div className="singlePage">
      <div className="content">
        <img src={post?.img} alt="" />

        <div className="user">
          <img
            src="https://cdn270-genai.picsart.com/2828c523-274e-45a0-b068-94a82cba1ee7/434138512028201.jpg"
            alt=""
          />

          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.data).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={edit} alt="edit img" />
              </Link>

              <Link>
                <img src={dele} alt="delte img" />
              </Link>
            </div>
          )}
        </div>

        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          ex. Temporibus, doloremque.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eaque
          voluptatum repellat illum voluptatibus architecto molestiae
          consequatur quisquam commodi facilis cum dicta provident repellendus
          ea laudantium minima ipsa soluta dolor, blanditiis nulla iusto,
          nostrum labore itaque? Veritatis repellendus odio, tempore enim
          reprehenderit a non obcaecati accusantium rerum officia. Nihil a
          inventore dolorum ipsam possimus laudantium perferendis voluptatibus
          at placeat voluptate non exercitationem, sint voluptatem ipsum nisi
          beatae ullam sunt asperiores quam perspiciatis accusantium eum modi
          amet! Harum labore veniam quam ex voluptatum saepe, dignissimos quod
          nemo distinctio voluptas facere aspernatur eaque beatae non incidunt
          perferendis voluptates veritatis quibusdam! Possimus, eveniet Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Non neque labore
          voluptatem ipsa? Laboriosam illum ab corrupti voluptatem porro
          voluptas, odit facilis non enim tenetur inventore vitae rem aut eaque
          temporibus id. Tempora ratione nam veniam. Recusandae minima excepturi
          vero, ut suscipit cumque totam pariatur. Magnam omnis accusamus sit
          saepe dolores, voluptatibus neque placeat adipisci eius fugiat. Fuga
          voluptatibus id a cumque deserunt numquam excepturi molestias placeat
          odio architecto cupiditate laudantium incidunt omnis, nemo commodi
          distinctio veniam deleniti nihil molestiae. Mollitia dolor iusto,
          sunt, temporibus quas quos praesentium exercitationem nemo et
          consequuntur ea cum. Quasi tenetur eveniet veritatis natus, provident
          voluptate officiis ipsam eos sint reiciendis nesciunt numquam deleniti
          nihil quam id ipsum dolorem! Delectus impedit itaque et sapiente quod
          deserunt maiores aliquam deleniti molestias provident! Sapiente
          reiciendis nobis, magnam iure consequuntur quas illum! Et quaerat
          praesentium inventore veniam, reprehenderit ipsam minima sit atque
          esse perspiciatis sed at iusto repellendus eveniet consectetur
          necessitatibus ad dolorem repellat reiciendis enim soluta, possimus id
          ea? Ipsa provident, ab suscipit molestias illum perspiciatis incidunt
          inventore eveniet a laborum. Earum non illum quia omnis reiciendis
          maiores inventore aperiam minus. Dolorum quam aperiam totam autem
          consequatur deleniti fugit pariatur necessitatibus? Beatae qui atque
          magni vitae omnis!.
        </p>
      </div>
      <Menu />
    </div>
  );
}

export default Single;
