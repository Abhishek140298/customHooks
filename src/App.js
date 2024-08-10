import React, { useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import { useOnlineStatus } from './hooks/useOnline';

function App() {
const isOnline=useOnlineStatus()

 

  return (
    <div className="App">
    <span style={{height:'50px',width:'50px',background:isOnline?'green':'red'}}>{isOnline?"Online":"Offline"}</span>
    </div>
  );
}

export default App;
