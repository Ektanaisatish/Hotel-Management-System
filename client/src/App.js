import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Bookingscreen from "./screens/Bookingscreen";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import HotelSearch from "./screens/HotelSearch";
import Menu from './screens/Menu';
import Guest from './screens/Guest';
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homescreen />} />
          <Route path="/hotel" exact element={<HotelSearch />} />
          <Route path="/booking" exact element={<Bookingscreen />} />
          {/* <Route path="/booking/:roomid" component={Bookingscreen} />   */}
          <Route path="/login" exact element={<Loginscreen />} />
          <Route path="/register" exact element={<Registerscreen />} />
          <Route path="/Menu" exact element={<Menu/>} />
          <Route path="/Guest" exact element={<Guest/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
