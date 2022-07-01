import productActionTypes from "./product.action.types";

export const setProduct = product =>{
    return {
        type: productActionTypes.SET_PRODUCT,
        payload: product
    };
};

export const getProduct = () =>{
    return {
        type: productActionTypes.GET_PRODUCT
    };
}

export const updateProduct = (id, product) =>{
    return {
        type: productActionTypes.UPDATE_PRODUCT,
        payload: {id, product}
    };
}

export const removeProduct = id =>{
    return{
        type: productActionTypes.REMOVE_PRODUCT,
        payload: id
    };
}