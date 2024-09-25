import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: JSON.parse(localStorage.getItem("cartProducts")) || [],
    cartTotal: 0,
};

const saveToLocalStorage = (products) => {
    localStorage.setItem("cartProducts", JSON.stringify(products));
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const existingProduct = state.products.find(
                (product) => product.id === action.payload.id
            );
        
            if (existingProduct) {
                existingProduct.quantity += 1; 
            } else {
                const newProduct = { ...action.payload, quantity: 1 };
                state.products.push(newProduct);
            }
           
            state.cartTotal = state.products.reduce((total, product) => {
                const price = product.discountedPrice || product.price;
                return total + price * product.quantity;
            }, 0);
            saveToLocalStorage(state.products);
        },
        removeProduct: (state, action) => {
            const productId = action.payload;
            const updatedProducts = state.products.filter(
                (item) => item.id !== productId
            );
            state.products = updatedProducts;
            state.cartTotal = updatedProducts.reduce((total, product) => {
                const price = product.discountedPrice || product.price;
                return total + price * product.quantity;
            }, 0);
            saveToLocalStorage(state.products);
        },
        clearCart: (state) => {
            state.products = [];
            state.cartTotal = 0;
            saveToLocalStorage(state.products);
        },
        incrementQuantity: (state, action) => {
            const product = state.products.find((item) => item.id === action.payload);
            if (product) {
                product.quantity += 1;
            }
            state.cartTotal = state.products.reduce((total, product) => {
                const price = product.discountedPrice || product.price;
                return total + price * product.quantity;
            }, 0);
            saveToLocalStorage(state.products);
        },
        decrementQuantity: (state, action) => {
            const product = state.products.find((item) => item.id === action.payload);
            if (product) {
                if (product.quantity > 1) {
                    product.quantity -= 1;
                } else {
                    state.products = state.products.filter((item) => item.id !== action.payload);
                }
            }
            state.cartTotal = state.products.reduce((total, product) => {
                const price = product.discountedPrice || product.price;
                return total + price * product.quantity;
            }, 0);
            saveToLocalStorage(state.products);
        },
    },
});


export const getTotalQuantity = (state) => {
    return state.cart.products.reduce((total, product) => total + product.quantity, 0);
};

export const { 
    addProduct, 
    removeProduct, 
    clearCart, 
    incrementQuantity, 
    decrementQuantity 
} = cartSlice.actions;

export default cartSlice.reducer;
