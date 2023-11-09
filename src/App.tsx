import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Compaign from "./components/Compaign";
import Products from "./components/Products";
import Customer from "./components/Customer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<Home />} />
          <Route path="/campaign" element={<Compaign />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customer" element={<Customer />} />
        </Route>

        {/* <Route path="/x" element={<x/>}/>
        <Route path="/y" element={<y/>}/>
        <Route path="/z" element={<z/>}/>
        <Route path="/*" element={<NotFound/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
