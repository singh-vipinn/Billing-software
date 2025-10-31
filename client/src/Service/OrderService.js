import axios from "axios";

export const latestOrders = async () => {
    return await axios.get("https://billing-software-production-1c35.up.railway.app/api/v1.0/orders/latest", {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
}

export const createOrder = async (order) => {
    return await axios.post("https://billing-software-production-1c35.up.railway.app/api/v1.0/orders", order, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
}

export const deleteOrder = async (id) => {
    return await axios.delete(`https://billing-software-production-1c35.up.railway.app/api/v1.0/orders/${id}`, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
}