import {connect} from 'react-redux';
import Note from './Note';
import {removeTodo} from '../actions';

const mapStateToProps = state => ({
    notes:state
})

const mapDispatchToProps = dispatch => ({
    removeTodo: id => dispatch(removeTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Note)
