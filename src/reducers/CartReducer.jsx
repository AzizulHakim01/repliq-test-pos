// cartReducer.js

// Define initial state
const initialState = {
  items: [],
  total: 0
};

// Define action types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

// Define reducer function
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if the item already exists in the cart
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        // If the item exists, update its quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;
        return {
          ...state,
          items: updatedItems,
          total: state.total + action.payload.price // Update total by adding price of the item
        };
      } else {
        // If the item doesn't exist, add it to the cart
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          total: state.total + action.payload.price // Update total by adding price of the item
        };
      }
    case REMOVE_FROM_CART:
      // Filter out the item to remove from the cart
      const removedItem = state.items.find(item => item.id === action.payload.id);
      const filteredItems = state.items.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        items: filteredItems,
        total: state.total - (removedItem.price * removedItem.quantity) // Subtract price of the removed item from total
      };
    case INCREASE_QUANTITY:
      // Find the item to increase quantity and update its quantity
      const increasedItems = state.items.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        }
        return item;
      });
      return {
        ...state,
        items: increasedItems,
        total: state.total + action.payload.price // Update total by adding price of the item
      };
    case DECREASE_QUANTITY:
      // Find the item to decrease quantity and update its quantity
      const decreasedItems = state.items.map(item => {
        if (item.id === action.payload.id && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1
          };
        }
        return item;
      });
      return {
        ...state,
        items: decreasedItems,
        total: state.total - action.payload.price // Update total by subtracting price of the item
      };
    default:
      return state;
  }
};

// Define action creators
export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item
  };
};

export const removeFromCart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item
  };
};

export const increaseQuantity = (item) => {
  return {
    type: INCREASE_QUANTITY,
    payload: item
  };
};

export const decreaseQuantity = (item) => {
  return {
    type: DECREASE_QUANTITY,
    payload: item
  };
};

export default cartReducer;
