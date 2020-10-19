import React from 'react';
import {connect} from 'react-redux';

import Header from './components/Header';
import Footer from './components/Footer';
import CreateNote from './components/CreateNote';
import NoteList from './components/Notelist';
import {addTodo} from './actions';

import './Csss/App.css';

const NoteApp = () => {

    return <>

        <Header />
        <CreateNote />
        <NoteList />
        <Footer />

    </>;
}

const mapDispatchToProps = dispatch => ({
    addTodo: note => dispatch(addTodo(note))
})

export default  connect(mapDispatchToProps)(NoteApp);
