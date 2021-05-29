import React, { useReducer } from "react";
import CartContext from "./cart-context";


const initialCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state = initialCartState, action) => {
    if (action.type === "ADD_ITEM") {
        const newAddedItem = action.item;
        const updatedTotalAmount = state.totalAmount + (newAddedItem.price * newAddedItem.quantity);
        const existingItemIndex = state.items.findIndex(item => item.id === newAddedItem.id)
        const existingCartItem = state.items[existingItemIndex];
        let updatedItems;
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + newAddedItem.quantity
            };
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem
        }
        else {
            updatedItems = state.items.concat(newAddedItem)
        }
        return ({
            items: updatedItems,
            totalAmount: updatedTotalAmount
        })
    }
    if (action.type === "REMOVE_ITEM") {
        console.log(state.items)
        console.log(action)
        const existingItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingCartItem = state.items[existingItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price
        let updatedItems;
        if (existingItemIndex.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        }
        else {
            const updatedItem = { ...existingCartItem, quantity: existingCartItem.quantity - 1};
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem
        }
        return({
            items: updatedItems,
            totalAmount: updatedTotalAmount
        })
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
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}


export default CartProvider;