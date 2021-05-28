import React from "react";

React.createContext({
    item: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: id => {}
});

export default CartContext;