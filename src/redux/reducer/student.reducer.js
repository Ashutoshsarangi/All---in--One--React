import {studentActionTypes} from '../action/student.action.types';

const initialState = {
    student: [],
    class: 'XII'
}


const studentReducer = (state= initialState, {type, payload}) =>{
    switch(type){
        case studentActionTypes.SET_STUDENT:
            return [...state.student, ...payload];
        case studentActionTypes.GET_STUDENT:
            return state;
        case studentActionTypes.UPDATE_STUDENT:
            return state;
        case studentActionTypes.REMOVE_STUDENT:
            return state;
        case studentActionTypes.GET_GRADES:
            return state;
        default:
            return state;

    }
}

export default studentReducer;