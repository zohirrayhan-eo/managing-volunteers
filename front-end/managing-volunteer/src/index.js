import React from 'react';
import ReactDOM from 'react-dom';

//components 

import AppComponent from './App';

class App extends React.Component{
    render(){
        return (
        <div>
            <AppComponent />
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

