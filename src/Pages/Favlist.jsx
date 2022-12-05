import React, { useState } from "react";
import Anime from "../Components/Anime";
import style from "../Pages/Home/Home.module.css";
const Favlist = () => {
  const [update, setUpdate] = useState(false);
  const favlist = JSON.parse(localStorage.getItem("Favlist")) || [];
  return (
    <>
      <h1 className={style.h1}>Watch List</h1>
      <div className={style.grid}>
        {favlist?.map((e) => (
          <Anime {...{ e, setUpdate, update, remove: true }} />
        ))}
      </div>
    </>
  );
};

export default Favlist;
