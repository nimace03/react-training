const initialState = {
    AppName: "React App",
    AppName2: "React App2",
    AppName3: "React App3",
}

const app = (state = initialState, action) => {
    switch (action.type) {
        case "TEST_ACTION": {
            return { ...state, AppName: action.data }
        }
        default: {
            return { ...state }
        }
    }
}

export default app;