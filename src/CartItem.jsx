import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development mode
});

export default store;
