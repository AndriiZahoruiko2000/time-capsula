import axios from "axios";
import { loadFromLs } from "../helpers/local-storage";

export const api = axios.create({
  baseURL: "https://w9223rrww5.execute-api.us-east-1.amazonaws.com",
  // withCredentials: true,
});

function initToken() {
  console.log("load-token");

  const tokenInfo = loadFromLs("token");
  api.defaults.headers.common["Authorization"] = `Bearer ${tokenInfo}`;
}
initToken();
