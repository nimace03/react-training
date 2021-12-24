const initialState = {
    postDataList: [],
    succeededGetPostData: false,
}

const app = (state = initialState, action) => {
    switch (action.type) {
        case "SUCCEEDED_GET_POST_DATA": {
            return {
                ...state,
                postDataList: action.data,
                succeededGetPostData: true,
            }
        }
        case "RESET_POST_DATA": {
            return {
                ...state,
                succeededGetPostData: false,
            }
        }
        default: {
            return { ...state }
        }
    }
}

export default app;