export const succeededGetUserDataList = (data) => ({
    type: "SUCCEEDED_USER_DATA_LIST",
    data,
})
export const resetUserDataList = () => ({
    type: "RESET_USER_DATA_LIST",
})
export const updateUserDataList = (updatedPart) => ({
    type: "UPDATE_USER_DATA_LIST",
    updatedPart,
})
export const resetUpdateUserDataList = () => ({
    type: "RESET_UPDATED_USER_DATA",
})
export const deleteUserData = (userId) => ({
    type: "DELETE_USER_DATA",
    userId,
})
export const resetDeleteUserData = () => ({
    type: "RESET_DELETE_USER_DATA",
})
export const addUserData = (userData) => ({
    type: "ADD_USER_DATA",
    userData,
});
export const resetAddUserData = () => ({
    type: "RESET_ADD_USER_DATA",
})