import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";


const Cart = props => {

    const cartItems = [
        {
            id: Math.random(),
            name: "Anything",
            amount: 9,
            price: 10.99
        }
    ].map(item => <li key={item.id}>{item.name}</li>)
    return (
        <Modal onBackdropClick={props.onClose}>
            <ul className={classes["cart-items"]}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;