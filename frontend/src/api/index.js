import axios from "axios";

const url = "http://localhost:5000/orders";

export const fetchOrders = () => axios.get(url)




