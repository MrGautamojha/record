import React from 'react';
import './App.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './components/reducer/rootReducer'
import Category from './components/Category';
import Credit from './components/Credit';
import Debit from './components/Debit';
import DisplayAll from './components/DisplayAll'
import AllView from './components/AllView';




function App() {
  const store=createStore(rootReducer)
  return (
    <div >
       <Provider store={store} >
      <AllView/>
     </Provider>
    
    </div>
  );
}

export default App;
