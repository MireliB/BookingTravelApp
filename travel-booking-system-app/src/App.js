import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Stays from "./components/Stays/Stays";
import Flights from "./components/Flights/Flights";
import CarRentals from "./components/CarRentals/CarRentals";
import Attractions from "./components/Attractions/Attractions";
import AirportTaxis from "./components/AirportTaxis/AirportTaxis";

import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/stays" element={<Stays />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/car-rentals" element={<CarRentals />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/airport-taxis" element={<AirportTaxis />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
