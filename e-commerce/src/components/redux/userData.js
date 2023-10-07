import { createSlice } from "@reduxjs/toolkit"



const initialState ={
    email: "",
    FirstName: "",
    image: "",
    LastName: "",
    _id: "",
}
const userSlice = createSlice({
    name : "user",
    initialState,
    reducers :{
        login : (state,action)=>{
            state.FirstName=action.payload.FirstName;
            state.LastName=action.payload.LastName;
            state.email=action.payload.email;
            state.image=action.payload.image;
            state._id=action.payload._id;
        },
        logout:(state,action)=>{
            state.FirstName="";
            state.LastName="";
            state.email="";
            state.image="";
            state._id="";
        }
    }
})

export const {login ,logout } =userSlice.actions;

export default userSlice.reducer;