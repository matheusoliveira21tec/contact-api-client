import axios from "axios";

const Api = axios.create({baseURL: "https://localhost:7207/api"})

export default Api;