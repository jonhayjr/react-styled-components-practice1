import './App.css';
import {createGlobalStyle} from 'styled-components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

/*Import components*/
import Navbar from './components/Navbar/index';

/*Import Pages*/
import {Home, About, Contact, NotFound} from './pages/index'

/*Import Data*/
import routeData from './data/routeData';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-size: 1rem;
  }
`

const App = () => {

  return (
    <>
      <GlobalStyle/>
        <Router>
            <Navbar routes={routeData}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    </>
  );
}

export default App;
