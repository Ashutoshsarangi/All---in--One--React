import productActionTypes from "../action/product.action.types";

const initialState = {
    allProducts:[]
};

const productReducer = (state=initialState, {type, payload}) =>{
    switch(type){
        case productActionTypes.SET_PRODUCT:
            return [ ...state.allProducts, ...payload];
        case productActionTypes.GET_PRODUCT:
            return state;
        case productActionTypes.UPDATE_PRODUCT:
            return state;
        case productActionTypes.REMOVE_PRODUCT:
            return state;
        default:
            return state;
    }
};

export default productReducer;