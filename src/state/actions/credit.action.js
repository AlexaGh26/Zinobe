export const UPDATE_BASE_MOUNT = "UPDATE_BASE_MOUNT";
export const INSERT_BASE_MOUNT = "INSERT_BASE_MOUNT";
export const INSERT_VALUE_INPUT = "INSERT_VALUE_INPUT";
export const ADD_NUMBER_INPUT = "ADD_NUMBER_INPUT";
export const SUBTRACT_NUMBER_INPUT = "SUBTRACT_NUMBER_INPUT";
export const SHOW_DATA_IN_REAL_TIME = "SHOW_DATA_IN_REAL_TIME";
export const SAVE_DATA_REDUX = "SAVE_DATA_REDUX";

export const UpdateBaseMount = (payload) => {
    return {
        type: UPDATE_BASE_MOUNT,
        payload
    }
}
export const InsertBaseMount = (payload) => {
    return {
        type: INSERT_BASE_MOUNT,
        payload
    }
}
export const InsertValueInput = (payload) => {
    return {
        type: INSERT_VALUE_INPUT,
        payload
    }

}
export const AddNumberInput = (payload) => {
    return {
        type: ADD_NUMBER_INPUT,
        payload
    }

}
export const SubtractNumberInput = (payload) => {
    return {
        type: SUBTRACT_NUMBER_INPUT,
        payload
    }

}
export const ShowDataInRealTime = (payload) => {
    return {
        type: SHOW_DATA_IN_REAL_TIME,
        payload
    }

}
export const SaveDataRedux = (payload) => {
    return {
        type: SAVE_DATA_REDUX,
        payload
    }
}

