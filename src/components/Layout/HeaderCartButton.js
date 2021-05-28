import React, {useContext} from "react";
import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = props => {
    const ctxObj = useContext(CartContext);
    const totalItemsAdded = ctxObj.items.reduce((cur, item) => {
        return cur + item.quantity;
    }, 0);
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{totalItemsAdded}</span>
        </button>
    )
}

export default HeaderCartButton;