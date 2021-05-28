import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = props => {
    const formattedPrice = `$${props.price.toFixed(2)}`;
    return (
        <li key={props.id} className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{formattedPrice}</div>
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    );
}

export default MealItem;