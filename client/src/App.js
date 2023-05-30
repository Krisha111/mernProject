
import './App.css';
import AddUsers from './components/AddUsers';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser';
import CodeForInterviews from './components/CodeForInterviews';

import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route exact path="/" element={<AllUsers/>}/>
      <Route exact  path="/inter" element={<CodeForInterviews/>}/>
      <Route exact  path="/add" element={<AddUsers/>}/>
      <Route exact  path="/all" element={<AllUsers/>}/>
      <Route exact  path="/edit/:id" element={<EditUser/>}/>
    


        
      
     </Routes>
    </BrowserRouter>
    </>
    );
  }

export default App;
  
  
  
