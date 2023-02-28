
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Books from './pages/Books';
import Add from './pages/Add.jsx';
import Update from './pages/Update.jsx';


function App() {
  return (
    
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Books/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/update' element={<Update/>}/>
     </Routes>
    </BrowserRouter>
   
  )
    
   
}

export default App;
