const initialState = {
    user: [],
    isLoading: false,
    isError: false,
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_PENDING":
        case "REGISTER_PENDING":
        case "CHECK_EMAIL_PENDING":
            return { ...state, isLoading: true, isError: false };
        case "LOGIN_REJECTED":
        case "REGISTER_REJECTED":
        case "CHECK_EMAIL_REJECTED":
            return { ...state, isLoading: false, isError: true };
        case "LOGIN_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                user: action.payload.data.data,
            };
        case "GET_DETAIL_BYID_PENDING":
            return { ...state, isLoading: true }
        case "GET_DETAIL_BYID_FULFILLED":
            return { ...state, isLoading: false, user: action.payload.data.data, isError: false }
        case "GET_DETAIL_BYID_REJECTED":
            return { ...state, isLoading: false, isError: true }
        case "UPDATE_CUST_BYID_PENDING":
            return { ...state, isLoading: true }
        case "UPDATE_CUST_BYID_FULFILLED":
            return { ...state, isLoading: false, user: action.payload.data.data, isError: false }
        case "UPDATE_CUST_BYID_REJECTED":
            return { ...state, isLoading: false, isError: true }
        case "DETAIL_BY_IDSELLER_PENDING":
            return { ...state, isLoading: true }
        case "DETAIL_BY_IDSELLER_FULFILLED":
            return { ...state, isLoading: false, user: action.payload.data.data, isError: false }
        case "DETAIL_BY_IDSELLER_REJECTED":
            return { ...state, isLoading: false, isError: true }
        case "RESET_USER":
            return {
                ...state,
                isLoading: false,
                isError: false,
                user: [],
            }

        default:
            return state;
    }
}