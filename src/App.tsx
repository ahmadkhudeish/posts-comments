import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Posts from './components/Posts/Posts';
import _ from 'lodash';
import Comments from './components/Comments/Comments';
import { useTypedSelector } from './hooks/TypedUseSelectorHook';

function App() {
  const state = useTypedSelector(state => state.comments);
  
  return (
    <div className="App">
      <header className="App-header">
        {!_.isEmpty(state.comments) ? <Comments/> : <Posts/> }
      </header>
    </div>
  );
}

export default App;
