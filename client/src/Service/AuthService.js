import axios from "axios";

export const login = async (data) => {
    return await axios.post("https://billing-software-production-1c35.up.railway.app/api/v1.0/login", data);
}