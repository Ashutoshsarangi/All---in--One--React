import {studentActionTypes} from './student.action.types';


export const setStudent = student =>{
    return {
        type: studentActionTypes.SET_STUDENT,
        payload: student
    };
}

export const getStudent = () =>{
    return {
        type: studentActionTypes.GET_STUDENT,
    };
}

export const updateStudent = (id, student) =>{
    return {
        type: studentActionTypes.UPDATE_STUDENT,
        payload: {id, student}
    };
}

export const removeStudent = id =>{
    return {
        type: studentActionTypes.REMOVE_STUDENT,
        payload: {id}
    };
}


export const getGrades = () =>{
    return {
        type: studentActionTypes.GET_GRADES
    };
}