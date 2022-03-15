import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import Footer from './Components/footer/Footer';
function App() {
  return (
    <>
    <Header/>
  
    <div className="App">
        <Home/>
    </div>
    <Footer/>
  </>
  );
}

export default App;
