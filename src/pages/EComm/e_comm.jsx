import {useSelector, useDispatch} from 'react-redux';
import {setProduct} from '../../redux/action/product.action';
import {setStudent} from '../../redux/action/student.action';
import './e_comm.css';

const EComm = () =>{
    const allStore = useSelector(state => state );
   const dispatch = useDispatch();
   const dispatchProduct = () =>{
        alert('product');
        dispatch(setProduct([
            {id: '123', productName: 'Speekar', category: 'Electonics'},
            {id: '234', productName: 'Laptop', category: 'Electonics'}
        ]));
   }

   const dispatchStudent = () =>{
        alert('Student');
        dispatch(setStudent([
            {id: '235', name:'Ashutosh', grade: 'O'},
            {id: '460', name:'Bashudev', grade: 'A'},
        ]));
   }
    return (
        <div>
            <h3>Multiple reducer Demo</h3>
            <pre>
                {JSON.stringify(allStore, null, 2)}
            </pre>
            <div style={{'position': 'relative'}}>
            <button className='product' onClick={dispatchProduct}>Dispatch Some action to Produce(Set Product)</button>
            <button className='student' onClick={dispatchStudent}>Dispatch Some action to Student(Set Student)</button>
            </div>
        </div>
    );
}

export default EComm;