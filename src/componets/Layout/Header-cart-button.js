import React from "react"
import classes from "./hearder-cart-button.module.css";
import CartIcon from "../Cart/carticon";
import { useContext } from "react";
import CartContext from "../../store/Cart-Context";


const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext)

    const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)


    return <button className={classes.button} onClick={props.onClick}>  
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>your cart</span>
        <span className={classes.batch}>{numberOfCartItem}</span>
    </button>
}

export default HeaderCartButton