import { ERROR, ANIME1, ANIME2, LOAD} from "./action";

const iniState = {
  loading: false,
  error: false,
  allAnimes: [],
  singleAnime: {},
};

export const reducer = (state = iniState, { type, payload }) => {
  switch (type) {
    case LOAD:
      return {
        ...state,
        loading: true,
      };
    case ANIME1:
      return {
        ...state,
        loading: false,
        error: false,
        allAnimes: payload,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        allAnimes: [],
      };

    case ANIME2:
      return {
        ...state,
        loading: false,
        error: false,
        singleAnime: payload,
      };
    default:
      return state;
  }
};
