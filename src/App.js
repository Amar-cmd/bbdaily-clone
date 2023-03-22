import Header from "./Header/Header";
import Home from "./Home/Home";
import './App.css';
import Promotion from "./Promotion/Promotion";
import Working from "./Working/Working";
import Use from "./Use/Use";
import Range from "./Range/Range";
import Guarantee from "./Guarantee/Guarantee";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Promotion/>
      <Home />
      <Working />
      <Use />
      <Range />
      <Guarantee />
      <Footer/>
    </div>
  );
}

export default App;
