import React, {useReducer} from "react";
import CartContext from "./cart-context";


const initialCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state = initialCartState, action) => {
    if(action.type === "ADD_ITEM") {
        const newAddedItem = action.item;
        const updatedItems = state.items.concat(newAddedItem);
        const updatedTotalAmount = state.totalAmount + (newAddedItem.price * newAddedItem.quantity);
        console.log(updatedItems);
        return({
            items: updatedItems,
            totalAmount: updatedTotalAmount
        })
    }
    if(action.type === "REMOVE_ITEM") {

    }
    return initialCartState;
}
const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({
            type: "ADD_ITEM",
            item
        });
    }

    const removeItemFromCartHandler = id => {
        dispatchCartAction({
            type: "REMOVE_ITEM",
            id
        });
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}


export default CartProvider;