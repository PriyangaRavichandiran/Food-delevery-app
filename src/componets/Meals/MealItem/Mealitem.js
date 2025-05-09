import { useContext } from "react";
import classes from "./Mealitem.module.css"
import MealitemForm from "./MealitemForm";
import CartContext from "../../../store/Cart-Context"

const Mealitem =props=>{
    const cartCtx =useContext(CartContext)
    const price =`$${props.price.toFixed(2)}`

    const addToCardHandler=amount=>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
    }

        return(
        <li className={classes.meal}>
            <div><h3>{props.name}</h3>
            <div className={classes.description} >{props.description}</div>
            <div className={classes.price}>{price}</div>
            </div>
            <div><MealitemForm onAddToCart={addToCardHandler} /></div>

        </li>
    )
};export default Mealitem