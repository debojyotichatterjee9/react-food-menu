import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem"
import CartContext from "../../store/cart-context"

const Cart = props => {

    const ctxObj = useContext(CartContext);

    const cartItemRemoveHandler = id => {
        ctxObj.removeItem(id);
    }

    const cartItemAddHandler = item => {
        ctxObj.addItem({...item, quantity: 1});
    }

    const cartItems = ctxObj.items.map(item => <CartItem
        key={item.id}
        name={item.name}
        quantity={item.quantity}
        price={item.price} 
        onAdd={cartItemAddHandler.bind(null, item)}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}/>);
    const totalAmount = `$${ctxObj.totalAmount.toFixed(2)}`;
    return (
        <Modal onBackdropClick={props.onClose}>
            {cartItems.length > 0
                ?
                <>
                    <ul className={classes["cart-items"]}>
                        {cartItems}
                    </ul>
                </>
                :
                <p>Your cart is empty!</p>
            }
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
                {cartItems.length > 0 && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;