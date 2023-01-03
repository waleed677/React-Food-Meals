import React, { useReducer } from "react";
import CartContext from "./CartContext";



const initialState = {
    items:[],
    totalAmount: 0
}
const CartReducer = (state, action ) => {
    // console.log({state});
    // console.log({action});

    if(action.type === "ADD") {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
       

        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];


        let updatedItems;
        if(existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item)
        }
        return {
            items: updatedItems ,
            totalAmount: updatedTotalAmount
        };
    }

    return initialState;
        
};



function ContextProvider(props) {

    const[cartState, dispatchAction] = useReducer(CartReducer, initialState);
    const addItemToCartHandler = (item) => {
        dispatchAction({
            type: "ADD",
            item: item
        });
    }

    const removeItemFromCartHandler = (id) => {
        dispatchAction({
            type:"REMOVE",
            id: id
        });
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

  return (
  <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
  );
}

export default ContextProvider;
