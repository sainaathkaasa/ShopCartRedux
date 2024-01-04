import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
    wishList: [],
};
 
const wishListSlice = createSlice({
    name: "wishLists",
    initialState,
    reducers: {
        addTowishList: (state, { payload }) => {
 
            const existingItem = state.wishList.find(item => item.id === payload.id);
 
 
            if (!existingItem) {
                state.wishList = [...state.wishList, payload];
            }
        },
    },
});
 
 
export const wishListItems = (state: any) => state.wishLists.wishList;
export const { addTowishList } = wishListSlice.actions;
export default wishListSlice.reducer;