import {combineReducers} from 'redux';
import productReducer from './product.reducer';
import studentReducer from './student.reducer';

const reducer = combineReducers({
    productReducer,
    studentReducer,
})

export default reducer;