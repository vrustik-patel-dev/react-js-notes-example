import React from 'react';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import '../Csss/Note.css';

const Note = ({notes, removeTodo}) => {

    return <>
    {notes.map((val, index)=>{
            return(
        <div className='note' key={index}>
            <h1> {val.title} </h1>
            <br />
            <p> {val.content} </p>
            <div className="btn_container">
                <Button onClick={()=>removeTodo(index)} variant="contained" color="secondary">
                    <DeleteIcon className="deleteIcon"/>
                </Button>
            </div>
        </div>
            );})
    }
    </>;
}

export default Note;