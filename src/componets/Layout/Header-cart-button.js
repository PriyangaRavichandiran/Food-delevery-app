import React from "react"
import classes from "./hearder-cart-button.module.css";
import CartIcon from "../Cart/carticon";


const HeaderCartButton=props=>{
    return <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon/>
            </span>
        <span>your cart</span>
        <span className={classes.batch}>5</span>
    </button>
}

export default HeaderCartButton