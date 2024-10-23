
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Components/Header'
import {Route, Routes} from 'react-router-dom';
import Cards from './Components/Cards';
import CardsDetails from './Components/CardsDetails';


function App() {
 
  return (
    <>
     <Header/>
     <Routes>
       <Route path='/' element={<Cards/>}/>
       <Route path='/Cart/:id' element={<CardsDetails/>}/>
     </Routes>
        
    </>
  );
}

export default App;
