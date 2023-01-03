import { createContext } from "react";

import React from 'react'


    const defualtValue = {
        items: [],
        totalAmount: 0,
        addItem: (item) => {},
        removeItem: (id) => {}
    }

    const CartContext = createContext(defualtValue);




export default CartContext