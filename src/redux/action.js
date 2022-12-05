import axios from "axios";
export const LOAD = "LOAD";
export const ANIME1 = "ANIME1";
export const ANIME2 = "ANIME2";
export const ERROR = "ERROR";

export const loading = () => ({
  type: LOAD,
});

export const error = () => ({
  type: ERROR,
});

export const getAllAnimes = (payload) => ({
  type: ANIME1,
  payload,
});

export const getOneAnime = (payload) => ({
  type: ANIME2,
  payload,
});

export const callForAllAnimes = (page) => (dispatch) => {
  dispatch(loading());
  axios
    .get(`https://api.jikan.moe/v4/anime?page=${page}`)
    .then(({ data }) => dispatch(getAllAnimes(data.data)))
    .catch((e) => dispatch(error()));
};

export const callForSingleAnime = (id) => (dispatch) => {
  axios
    .get(`https://api.jikan.moe/v4/anime/${id}`)
    .then(({ data }) => {
      console.log(data.data,"single data");
      dispatch(getOneAnime(data.data));
      localStorage.setItem("Anime", JSON.stringify(data.data));
    })
    .catch((e) => dispatch(error()));
};
