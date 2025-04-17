import CartContext from "./CartContext";

const CartProvider=props=>{
    const addItemToCartHandler=(item)=>{};
    const removeItemToCartHandler=(id)=>{};
    
    const CartContext={
        items:[],
        totalAmount:0,
        addItem:addItemToCartHandler,
        removeItem:removeItemToCartHandler
    }
    return <CartContext.Provider value={CartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider