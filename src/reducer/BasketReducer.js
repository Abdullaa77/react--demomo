export const intialzeState = {
    basket:[]
}
const BasketReducer = (state,action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                basket:[...state.basket,action.payload]
            }
        case 'REMOVE_PRODUCT':
            return {
                basket: state.basket.filter(element => element.data.id !== action.payload)
            }
        case 'CHANGE_QTY':
            return {
                basket: state.basket.filter(element => element.data.id === action.payload.id ? element.qty = action.payload.count : action.payload.count)
            }    
        default:
            return state
    }
}
export default BasketReducer