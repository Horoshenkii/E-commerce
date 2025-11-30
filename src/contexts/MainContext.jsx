/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useEffect } from 'react';
import productsData from '../data/Products.json';

export const MainContext = createContext();

const initialState = {
  products: productsData,
  cart: JSON.parse(localStorage.getItem('cart')) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.cart.find((p) => p.id === action.data.id);
      if (existing) {
        return {
          ...state,
          cart: state.cart.map((p) =>
            p.id === action.data.id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.data, quantity: 1 }],
      };
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.data),
      };
    case 'RESET':
      return { ...state, cart: [] };
    case 'CHANGE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((p) =>
          p.id === action.data.id
            ? {
                ...p,
                quantity: Math.max(p.quantity + action.data.eventQuantity, 1),
              }
            : p
        ),
      };

    default:
      return state;
  }
};

export const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (product) =>
    dispatch({ type: 'ADD_TO_CART', data: product });
  const removeFromCart = (id) =>
    dispatch({ type: 'REMOVE_FROM_CART', data: id });
  const clearCart = () => dispatch({ type: 'RESET' });
  return (
    <MainContext.Provider
      value={{ ...state, addToCart, dispatch, removeFromCart, clearCart }}
    >
      {children}
    </MainContext.Provider>
  );
};
