export const cartReducer = (state,action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const updatedCart = [...state.cart]
            const updatedItemIndex = updatedCart.findIndex((item) => item.id === action.payload.id)
            if(updatedItemIndex < 0){
                updatedCart.push({...action.payload, qauantity: 1})
            }else{
                const updatedItem = {...updatedCart[updatedItemIndex]}
                updatedItem.qauantity++;
                updatedCart[updatedItemIndex] = updatedItem;
            }

            return {...state,cart: updatedCart}
           
    
        default:
            return state
            break;
    }
}