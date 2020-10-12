import React from 'react'

import './App.scss';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';

const App = () => {
    return ( 
        <div className="app">
            <Main/>
            <Sidebar/>
        </div>
     );
}
 
export default App;