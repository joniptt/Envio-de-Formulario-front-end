import axios from "axios";
import Vue from "vue";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000
});

Vue.prototype.$axios = axiosInstance;

export { axiosInstance };
