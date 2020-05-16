export const UPDATE_BASE_MOUNT = "UPDATE_BASE_MOUNT";
export const INSERT_BASE_MOUNT = "INSERT_BASE_MOUNT";

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