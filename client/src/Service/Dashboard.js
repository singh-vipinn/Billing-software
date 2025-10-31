import axios from "axios";

export const fetchDashboardData = async () => {
    return await axios.get(" https://billing-software-production-1c35.up.railway.app/api/v1.0/dashboard", {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}

