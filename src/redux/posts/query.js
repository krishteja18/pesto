import axios from "axios";

export const getPosts = () => axios.get("https://randomuser.me/api/");
