import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import {BrowserRouter} from "react-router-dom";
import Navlogo from "./components/Navlogo";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Navlogo/>
          <Search />
          <Category />
          <Pages />
       </BrowserRouter>
     
    </div>
  );
}

export default App;
