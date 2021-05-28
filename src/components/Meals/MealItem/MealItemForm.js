import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input";


const MealItemForm = props => {

    const [amountIsValid, setAmountIsValid] = useState(true);
    const quantityInputRef = useRef()
    const submitHandler = event => {
        event.preventDefault();
        const enteredQuantity = quantityInputRef.current.value;
        const quantityInNumber = +enteredQuantity;
        if(enteredQuantity.trim().length === 0 || quantityInNumber < 1 || quantityInNumber > 10) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(quantityInNumber)
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={quantityInputRef}
                label="Amount"
                input={{
                    id: `amount_${props.id}`,
                    type: "number",
                    min: "1",
                    max: "10",
                    step: "1",
                    defaultValue: "1"
                }} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1 - 10).</p>}
        </form>
    );
}

export default MealItemForm;