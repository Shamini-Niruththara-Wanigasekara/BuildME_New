import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import RootRouter from "./routes";
import NavigationBar from "./Components/NavigtionBar/navigationBar";

function App() {
  return (
    <div >
      <NavigationBar/>
     <div style={{marginTop:70}} className="container-fluid">
       <BrowserRouter>
         <RootRouter/>
       </BrowserRouter>
     </div>
    </div>
  );
}

export default App;
