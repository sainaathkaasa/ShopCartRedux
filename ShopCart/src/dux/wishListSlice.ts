import { createSlice } from "@reduxjs/toolkit";
 
const initialState:any = {
    wishList: [],
};
 
const wishListSlice = createSlice({
    name: "wishLists",
    initialState,
    reducers: {
        addTowishList: (state, { payload }) => {
            state.wishList.push(payload)
 
            // const existingItem = state.find((item:any) => item.id === payload.id);
 
 
            // if (!existingItem) {
            //     state = [...state, payload];
            // }
        },
        removeFromWishlist : (state,{payload})=>{
           state.wishList = state.wishList.filter((item : any) => item.id !== payload.id)
        }
    },
});
 
 
export const wishListItems = (state: any) => state.wishLists.wishList;
export const { addTowishList, removeFromWishlist } = wishListSlice.actions;
export default wishListSlice.reducer;