
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Books from './pages/Books.js';
import Add from './pages/Add.js';
import Update from './pages/Update.js';


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
