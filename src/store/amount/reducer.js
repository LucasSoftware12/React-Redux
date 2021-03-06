const initialState = {
    amount: 0,
}
// eslint-disable-next-line
export default (state = initialState, action) => {
    if (action.type === "DEPOSIT_MONEY") {
        return {
            ...state,
            amount: state.amount + 10
        }
    }
    if (action.type === "WITHDRAW_MONEY") {
        return {
            ...state,
            amount: state.amount - 10
        }
    }
    return state
}