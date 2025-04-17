import React from "react";

const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    addItem:(id)=>{}
})
export default CartContext