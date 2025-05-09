import React, { Fragment } from "react"
import MealsImage from  "../../assets/meals-image.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./Header-cart-button"

const Header =props=>{
    return<Fragment>
        <header className={classes.header}>
            <h1>React Food </h1>
            <HeaderCartButton onClick ={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={MealsImage} alt="meals image"/>
            </div>
    </Fragment>
}
export default Header