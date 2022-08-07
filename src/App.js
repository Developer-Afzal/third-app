import './App.css';
import Header  from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {createContext} from "react";
import Thanks from './components/Thanks';
const userdata = createContext();
let name =["Home"," ","Solution"];
function App() {
  return (
    <>
     <BrowserRouter>
              <Header/>
    <userdata.Provider value={name} >
                <Routes>
                <Route path="/third-app" element={<Home/>}></Route>
                <Route path="/About" element={<About/>}></Route>
                <Route path="/Services" element={<Services/>}></Route>
                <Route path="/Contact" element={<Contact/>}></Route>
                <Route path="/Thanks" element={<Thanks/>}></Route>
              </Routes>
    </userdata.Provider>
               <Footer/>
       </BrowserRouter>
    </>
  );
}

export default App;
export {userdata};
