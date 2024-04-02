import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3000/server/v1",
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
    },
});
