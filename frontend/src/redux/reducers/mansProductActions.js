import * as actonTypes from "../constants/productConstants";
export const getManProdReducer=(state={products:[]},action)=>{
    switch (action.type){
        case actonTypes.GET_PRODUCTS_REQUEST:
            return{
                loading:true,
                products: []
            };
        case actonTypes.GET_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case actonTypes.GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error:action.payload
            }
        default: return state;
    }
}