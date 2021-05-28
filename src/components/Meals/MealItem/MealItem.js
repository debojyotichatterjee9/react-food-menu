import React, {useContext} from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
const MealItem = props => {

    const ctxObj = useContext(CartContext);
    const formattedPrice = `$${props.price.toFixed(2)}`;

    const addToCartHandler = quantity => {
        ctxObj.addItem({
            id: props.id,
            name: props.name,
            quantity,
            price: props.price
        })
    }

    return (
        <li key={props.id} className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{formattedPrice}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
}

export default MealItem;