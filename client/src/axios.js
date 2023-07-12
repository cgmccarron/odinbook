import axios from "axios";

const instance = axios.create({
  baseURL: "https://odinbook-cgmccarron-ade3811b17f7.herokuapp.com",
});

export default instance;
