import { UPDATE_BASE_MOUNT, INSERT_BASE_MOUNT } from "../actions/credit.action"

export const CreditReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case UPDATE_BASE_MOUNT:
            return {
                ...state,
                BaseMount: payload,
            }
        case INSERT_BASE_MOUNT:
            return {
                ...state,
                BaseMount: payload,
            }
        default:
            return state;
    }
}