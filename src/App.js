import './App.scss';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
