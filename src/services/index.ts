import axios from "axios";
// import { API_URL, APP_ID } from "../../.env.json";

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
});

api.interceptors.request.use(async (config) => {
  config.params = { appid: '60a27bac5e46189541a2e929d81cf795', units: "metric" };
  return config;
});

export default api;
