import api from "../api";

export const getUserById = (userId) => {
    if(!userId) return Promise.reject(new Error("User ID is required"));
    return api.get(`/user/${userId}`)
    .then((response) => {
        console.log("User fetched successfully:", response.data);
        return response.data;
    })
    .catch((error) => {
        console.error("Error fetching user:", error);
        throw error;
    });
}