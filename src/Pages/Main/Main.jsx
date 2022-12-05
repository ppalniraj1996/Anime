import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { callForSingleAnime } from "../../redux/action";
import style from "../Main/Main.module.css";
const Main = () => {
    const dispatch = useDispatch();
    const { mail_id } = useParams();
    const { loading, error, singleAnime} = useSelector((store) => store.anime);
    const singleAnime1 = JSON.parse(localStorage.getItem("Favlist"));
    useEffect(() => {
      dispatch(callForSingleAnime(mail_id));
    }, []);

  return (
    <div>
      {loading ? (
        <>
          <div className={style.circle}>
            <div className={style.loading}></div>
          </div>
        </>
      ) : error ? (
        <>
          <h2>Something Went Wrong...</h2>
        </>
      ) : (
        <>
          <div className={style.container}>
            <img alt="animal" src={singleAnime?.images?.jpg?.image_url} />
            <div>
             
              <h5>
                Title : <span> {singleAnime?.title}</span>
              </h5>
              <h5>
                Rating : <span> {singleAnime?.rating}</span>
              </h5>
              <h5>
                Type : <span>{singleAnime?.type}</span>
              </h5>
              <h5>
                Source : <span>{singleAnime?.source}</span>
              </h5>
              <h5>
                Episodes : <span>{singleAnime?.episodes}</span>
              </h5>
              <h5>
                Status : <span>{singleAnime?.status}</span>
              </h5>
              <h5>
                Duration : <span>{singleAnime?.duration}</span>
              </h5>
              <h5>
                Score : <span>{singleAnime?.score}</span>
              </h5>
              <h5>
                Scored By : <span>{singleAnime?.scored_by}</span>
              </h5>
              <h5>
                Rank : <span>{singleAnime?.rank}</span>
              </h5>
              <h5>
                Popularity : <span>{singleAnime?.popularity}</span>
              </h5>
              <div>
                <a href={singleAnime?.url}>Visit Here</a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
   
  );
};

export default Main;
