import React from "react";
const CartIcon = props => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
           fill="white"
            width="24px" // Add width
            height="24px" // Add height
        >
            <path d="M3 18a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2H3zM3 4l2.2 8.8a1 1 0 0 0 .9.6h8a1 1 0 0 0 .9-.6L17 4H3zm2-2h12a1 1 0 0 1 1 1L15.7 5.6a1 1 0 0 0-.9.4H5.2a1 1 0 0 0-.9-.4L2 3a1 1 0 0 1 1-1h2z" />
        </svg>
    );
}; export default CartIcon;