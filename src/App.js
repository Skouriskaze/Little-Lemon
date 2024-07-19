import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import Nav from './Components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
