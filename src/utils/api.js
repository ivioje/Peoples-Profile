import apiClient from "./api-client";

export const getUserById = (userId) => {
    if(!userId) return Promise.reject(new Error("User ID is required"));
    return apiClient.get(`/user/${userId}`)
    .then((response) => {
        console.log("User fetched successfully:", response.data);
        return response.data;
    })
    .catch((error) => {
        console.error("Error fetching user:", error);
        throw error;
    });
}

export const logout = async () => {
    return apiClient.post("/user/logout")
}

export const createBasicTemplate = async (templateData, userId) => {
    if(!templateData) return Promise.reject(new Error("Template data is required"));
    return apiClient.post(`/basic-template/create/${userId}`, templateData)
    .then((response) => {
        console.log("Template created successfully:", response.data);
        return response.data;
    })
    .catch((error) => {
        console.error("Error creating template:", error);
        throw error;
    });
}

export const getUserTemplates = async (userId) => {
    if(!userId) return Promise.reject(new Error("User ID is required"));
    return apiClient.get(`/user/${userId}/templates`)
    .then((response) => {
        console.log("Templates fetched successfully:", response.data);
        return response.data;
    }).catch((error) => {
        console.error("Error fetching templates:", error);
        throw error;
    });
}
