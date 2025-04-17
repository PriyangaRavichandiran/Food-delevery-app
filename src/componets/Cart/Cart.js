import classes from "./cart.module.css"
import Modal from "../UI/Modal"
const Cart=props=>{
    const CartItem=(
        <ul className={classes['cart-items']}>
            {[{id: 'c1', name: 'Sushi', amount:2,price: 12.99}].map((item)=>(<li key={item.id}>{item.name} </li>) )}

        </ul>
    )

    return <Modal onClose={props.onClose}>
        {CartItem}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.6</span>
        </div>
        <div className={classes.action}>
            <button className={classes['button-alt']}onClick={props.onClose} >Close </button>
            <button className={classes.button}>Order</button>
        </div>
        </Modal>
};export default Cart;