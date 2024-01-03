import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ee49dd25bee048c09f83d32b4e217b93",
  },
});
