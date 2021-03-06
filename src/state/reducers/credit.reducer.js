import {
    UPDATE_BASE_MOUNT, INSERT_BASE_MOUNT, INSERT_VALUE_INPUT,
    ADD_NUMBER_INPUT, SUBTRACT_NUMBER_INPUT, SHOW_DATA_IN_REAL_TIME,
    SAVE_DATA_REDUX, ADD_STATE_CREDIT
} from "../actions/credit.action"

export const CreditReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case UPDATE_BASE_MOUNT:
            return {
                ...state,
                BaseMount: state.BaseMount - payload,
            }
        case INSERT_BASE_MOUNT:
            return {
                ...state,
                BaseMount: payload,
            }
        case INSERT_VALUE_INPUT:
            return {
                ...state,
                credit_info: { valueInput: payload },
                list: [],
            }
        case ADD_NUMBER_INPUT:
            return {
                ...state,
                credit_info: { ...state.credit_info, valueInput: state.credit_info.valueInput + payload },
            }
        case SUBTRACT_NUMBER_INPUT:
            return {
                ...state,
                credit_info: { ...state.credit_info, valueInput: state.credit_info.valueInput - payload },
            }
        case SHOW_DATA_IN_REAL_TIME:
            return {
                ...state,
                credit_info: {
                    ...state.credit_info,
                    [payload.id]: payload.value,
                },

            }
        case SAVE_DATA_REDUX: {

            return {
                ...state,
                list: [...state.list, payload]
            }
        }
        case ADD_STATE_CREDIT: {
            return {
                ...state,
                StateCredit: payload
            }
        }
        default:
            return state;
    }
}