
export const cartReducer = (state, action) => {
    console.log('state',state);
    console.log('action',action);
    switch (action.type) {
        case 'ADD_TO_CART': {
            const updatedCart = [...state.cart]
            const updatedItemIndex = updatedCart.findIndex(
                (item) => item._id === action.payload._id)

            if (updatedItemIndex < 0) {
                updatedCart.push({ ...action.payload, quantity: 1 })
            } else {
                const updatedItem = { ...updatedCart[updatedItemIndex] }
                updatedItem.quantity++;
                updatedCart[updatedItemIndex] = updatedItem;
            }

            return {
                ...state,
                cart: updatedCart,
                total: state.total + action.payload.offPrice 
            }
        }
        case 'REMOVE_PRODUCT': {
            const updatedCart = [...state.cart];
            const updatedItemIndex = updatedCart.findIndex(
                (item) => item._id === action.payload._id);
            const updatedItem = { ...updatedCart[updatedItemIndex] };
            if (updatedItem.quantity === 1) {
                const filteredCart = updatedCart.filter(item => item._id !== action.payload._id)
                return { ...state, cart: filteredCart }
            } else {
                updatedItem.quantity--;
                updatedCart[updatedItemIndex] = updatedItem;
                return {
                    ...state,
                    cart: updatedCart,
                    total: state.total + action.payload.price
                }
            }
            return;
        }
        default:
            return state
            break;
    }
}