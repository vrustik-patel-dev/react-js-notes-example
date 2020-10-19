import React from 'react';

import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

import '../Csss/CreateNote.css';
import {addTodo} from '../actions';
import { connect } from 'react-redux';

class CreateNotes extends React.Component {

    constructor(props){
        super(props);
        
        this.state={
            title:'',
            content:''
        }

        this.addEvent = this.addEvent.bind(this);
    }

    addEvent = (text) => {
        if(this.state.title==='' && this.state.content==='') {
            return ;
        }
        this.props.dispatch(addTodo(text))
        this.setState({ title: '',content:'' })
    }

    render(){
        return<>
        <div className="mainNote">
            <form onSubmit={e => { e.preventDefault(); }} className="noteForm">

                <input 
                    type='text' 
                    name="title"
                    value={this.state.title} 
                    onChange={(e)=>this.setState({title: e.target.value})} 
                    placeholder="Title" 
                    autoComplete="off"
                />

                <textarea 
                    name="content"
                    value={this.state.content} 
                    onChange={(e)=>this.setState({content: e.target.value})} 
                    rows='' 
                    column='' 
                    placeholder="write a note...">
                </textarea>
                <div className="button_container">
                    <Button onClick={()=>{this.addEvent(this.state)}} variant="contained" color="secondary">
                        <AddIcon className="plus_sign" />
                    </Button>
                </div>
            </form>
        </div>
    </>;
    }
}
export default connect()(CreateNotes);