import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ViewStudent from './components/ViewStudent';
import Adds from './components/Adds';


function App() {
  return (
    <div className="App">
     <Navbar/>
    <Routes>
      <Route path='/' element={<Adds  data={{id:'',name:'',age:'',dept:''}}/>}/>
      <Route path='s' element={<ViewStudent/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
