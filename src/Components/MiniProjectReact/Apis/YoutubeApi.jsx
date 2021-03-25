import axios from "axios";
const KEY = "AIzaSyD1qtWGynhP6ub0AqxMWSKurFiqtSBKgaA";


export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,

  },
});
