import React from 'react';
import Form from './components/Form';
import AuthContext from './components/AuthContext';
import './App.css';

function App() {
  return (
    <AuthContext.Provider value={{ isAuth : false}}>
      <div className="App">
        <Form />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
