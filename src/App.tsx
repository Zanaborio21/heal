import NavbarSito from "./components/navegate/navbar";
import Home from "./components/pages/home";
import { Route, Routes , Router } from "react-router-dom";
import './App.css';
import { BrowserRouter } from 'react-router-dom';

export default function App(){
  return(
    <div className="App"> 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarSito />}>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

