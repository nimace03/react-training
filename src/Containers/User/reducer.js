const initialState = {
    userDataList: [],
    succeededGetUserData: false,
    succeededUpdatedUserData: false,
    succeededDeleteUserData: false,
    succeededAddUserData: false,
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case "SUCCEEDED_USER_DATA_LIST": {
            return {
                ...state,
                userDataList: [...action.data.map(list => ({
                    ...list,
                    userAddress: list.address && list.address.city,
                    userCompany: list.company && list.company.name,
                }))],
                succeededGetUserData: true
            }
        }
        case "RESET_USER_DATA_LIST": {
            return {
                ...state,
                succeededGetUserData: false
            }
        }
        case "UPDATE_USER_DATA_LIST": {
            let updatedUserList = [...state.userDataList];
            let getUserIndex = updatedUserList.findIndex(list => list.id === action.updatedPart.id);
            updatedUserList[getUserIndex] = action.updatedPart;
            return {
                ...state,
                userDataList: [...updatedUserList],
                succeededUpdatedUserData: true,
            }
        }
        case "RESET_UPDATED_USER_DATA": {
            return {
                ...state,
                succeededUpdatedUserData: false
            }
        }
        case "DELETE_USER_DATA": {
            let updatedUserList = [...state.userDataList];
            updatedUserList = updatedUserList.filter(list => list.id !== action.userId);
            return {
                ...state,
                userDataList: [...updatedUserList],
                succeededDeleteUserData: true,
            }
        }
        case "RESET_DELETE_USER_DATA": {
            return {
                ...state,
                succeededDeleteUserData: false,
            }
        }
        case "ADD_USER_DATA": {
            const userDataList = [...state.userDataList];
            userDataList.push({
                ...action.userData,
                id: userDataList.length + 1,
            });
            return {
                ...state,
                userDataList,
                succeededAddUserData: true,
            }
        }
        case "RESET_ADD_USER_DATA": {
            return {
                ...state,
                succeededAddUserData: false,
            }
        }
        default: {
            return { ...state }
        }
    }
}

export default user;