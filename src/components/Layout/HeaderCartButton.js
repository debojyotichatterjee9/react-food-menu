import React, {useContext, useEffect, useState} from "react";
import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = props => {
    const [buttonHighlight, setButtonHighlight] = useState(false)
    const ctxObj = useContext(CartContext);
    const {items} = ctxObj;
    const totalItemsAdded = items.reduce((cur, item) => {
        return cur + item.quantity;
    }, 0);

    const btnClasses = `${classes.button} ${buttonHighlight ? classes.bump : ""}`;

    useEffect(() => {
        if(ctxObj.items.length === 0) {
            return;
        };
        setButtonHighlight(true);
        const timer = setTimeout(() => {
            setButtonHighlight(false);
        }, 300);

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{totalItemsAdded}</span>
        </button>
    )
}

export default HeaderCartButton;