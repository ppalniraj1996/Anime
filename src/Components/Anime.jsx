import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../Pages/Home/Home.module.css";
const Anime = ({ e, setUpdate, update, remove }) => {
  const navigate = useNavigate();

  const [added, setAdded] = useState(false);

  const findFavList = (obj) => {
    const Favlist = JSON.parse(localStorage.getItem("Favlist")) || [];
    let find = -1;
    Favlist.forEach((anime, i) => {
      if (anime.mal_id === obj.mal_id) {
        find = i;
      }
    });
    return find;
  };
  useEffect(() => {
    const find = findFavList(e) === -1 ? false : true;
    setAdded(find);
  }, [e]);

  const favlistremove = (obj) => {
    const Favlist = JSON.parse(localStorage.getItem("Favlist")) || [];
    setUpdate && setUpdate(!update);
    Favlist.splice(findFavList(obj), 1);
    localStorage.setItem("Favlist", JSON.stringify(Favlist));
    setAdded(false);
  };

  const favlistadd = (obj) => {
    const Favlist = JSON.parse(localStorage.getItem("Favlist")) || [];
    if (findFavList(obj) === -1) {
      Favlist.push(obj);
      localStorage.setItem("Favlist", JSON.stringify(Favlist));
      setAdded(true);
    } else {
      favlistremove(obj);
    }
  };

  return (
    <div>
      <img alt="animal" src={e.images.jpg.image_url} />
      <h5>
        Title : <span> {e.title}</span>
      </h5>
      <h5>
        Rating : <span> {e.rating}</span>
      </h5>
      <div>
        {remove || added ? (
          <button onClick={() => favlistremove(e)} className={style.btn}>
            Remove from Watch List
          </button>
        ) : (
          <button onClick={() => favlistadd(e)} className={style.btn}>
            Add to Watch List
          </button>
        )}
        <button onClick={() => navigate(`anime/${e.mal_id}`)}>
          View More Details
        </button>
      </div>
    </div>
  );
};

export default Anime;
