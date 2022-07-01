
import PropTypes from 'prop-types';


const PropTypeDemo = ({id}) =>{
    return (
        <div>
            <h1>All Prop types mentioned Here</h1>
        </div>
    );
}

PropTypeDemo.propTypes ={
    name: PropTypes.string,
    id: PropTypes.number.isRequired,
    img: PropTypes.string,
    grades: PropTypes.arrayOf(PropTypes.number),
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number,
        })
    ),
    list: PropTypes.arrayOf(PropTypes.any),
}
PropTypeDemo.defaultProps = {
    img: "https://picsum.phones/200/300",
}

export default PropTypeDemo;