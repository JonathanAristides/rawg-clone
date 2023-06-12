import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d36173ec305243c5bf315ff5d5f90d62",
  },
});
