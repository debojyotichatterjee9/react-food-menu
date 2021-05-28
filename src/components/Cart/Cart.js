import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context"

const Cart = props => {

    const ctxObj = useContext(CartContext);
    const cartItems = ctxObj.items.map(item => <li key={item.id}>{item.name}</li>);
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