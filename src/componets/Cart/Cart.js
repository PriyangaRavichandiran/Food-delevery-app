import classes from "./cart.module.css"
import Modal from "../UI/Modal"
import { useContext } from "react";
import CartContext from "../../store/Cart-Context";
import CartItem from "./CartItem";



const Cart = props => {
    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;
    const CartItemRemoveHandeler = id => {
        cartCtx.removeItem(id)
     }
    const CartItemAddHandeler = item => { 
        cartCtx.addItem({...item,amount:1})
    }
    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={CartItemRemoveHandeler.bind(null, item.id)} onAdd={CartItemAddHandeler.bind(null, item)} />
            ))}
        </ul>
    )

    return <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount} </span>
        </div>
        <div className={classes.action}>
            <button className={classes['button-alt']} onClick={props.onClose} >Close </button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
}; export default Cart;