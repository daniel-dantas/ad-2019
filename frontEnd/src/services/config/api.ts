import Axios from "axios";

export default Axios.create({
  baseURL: process.env.REACT_APP_BACK_API,
});
