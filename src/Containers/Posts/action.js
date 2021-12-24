export const succeededGetPostData = (data) => ({
    type: "SUCCEEDED_GET_POST_DATA",
    data,
})

export const resetGetPostData = () => ({
    type: "RESET_POST_DATA",
})