import React from 'react';
import{Provider} from 'react-redux';

import store from './store';
import NoteApp from './NoteApp';

const App = () => {
    return <>
    <Provider store={store}>
        <NoteApp />
    </Provider>
    </>;
}

export default App;