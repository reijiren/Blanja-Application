const initialState = {
    address: [],
    isLoading: false,
    isError: false,
};

export default function addressReducer(state = initialState, action) {
    switch (action.type) {
        case "INSERT_ADDRESS_PENDING":
            return { ...state, isLoading: true }
        case "INSERT_ADDRESS_FULFILLED":
            return { ...state, isLoading: false, user: action.payload.data.data, isError: false }
        case "INSERT_ADDRESS_REJECTED":
            return { ...state, isLoading: false, isError: true }
        case "RESET_ADDRESS":
            return {
                ...state,
                isLoading: false,
                isError: false,
                address: [],
            }

        default:
            return state;
    }
}