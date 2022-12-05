import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Anime from "../../Components/Anime";
import { callForAllAnimes } from "../../redux/action";
import style from "../Home/Home.module.css";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);
  const { allAnimes, loading, error } = useSelector((store) => store.anime);
  useEffect(() => {
    dispatch(callForAllAnimes(page));
  }, [page]);

  return (
    <div>
      <div>
        {loading ? (
          <>
            <div className={style.circle}>
              <div className={style.loading}></div>
            </div>
          </>
        ) : error ? (
          <div>Something Went Wrong..</div>
        ) : (
          <>
            <div className={style.maind}>
              <div className={style.box}>
                <input
                  className={style.seachitem}
                  placeholder="Search By Title"
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                />
              </div>
              <div className={style.page}>
                <button
                  disabled={page < 2 ? true : false}
                  onClick={() => setPage(page - 1)}
                >
                  <img
                    className="arrow_icon"
                    src="https://www.svgrepo.com/show/181251/previous-arrows.svg"
                    alt="left arrow"
                  />
                  Previous
                </button>
                <button
                  disabled={page >= 1025 ? true : false}
                  onClick={() => setPage(page + 1)}
                >
                  Next
                  <img
                    className="arrow_icon"
                    src="https://www.svgrepo.com/show/181249/next-arrows.svg"
                    alt="right arrow"
                  />
                </button>
                <button onClick={() => navigate(`/favlist`)}>Watch List</button>
              </div>
              <div className={style.grid}>
                {allAnimes &&
                  allAnimes
                    .filter((e) => e.title.includes(title))
                    .map((e, i) => <Anime {...{ e }} key={e.mail_id} />)}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
