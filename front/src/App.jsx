import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Footerr } from "./Components/Footer";
import { AddCars } from "./Components/AddCars";
import ListCars from "./Components/ListCars";
import axios from "axios";

const App = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:5000/carentries/");
        setCars(response.data);
      } catch (err) {
        console.log("Error: ", err);
      }
    };
    fetchCars();
  }, []);

  const handleCarData = async (newCar) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/carentries/",
        newCar
      );
      setCars((prevCars) => [...prevCars, response.data]);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const handleDeleteCar = async (carId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/carentries/${carId}`
      );
      setCars((prevCars) => prevCars.filter((car) => car._id !== carId));
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <>
      <Router>
        <header>
          <Header />
        </header>
        <main className="min-h-screen bg-blue-200">
          <Routes>
            <Route path="/" element={<AddCars onSubmitCar={handleCarData} />} />
            <Route
              path="/carslist"
              element={<ListCars cars={cars} onDeleteCar={handleDeleteCar} />}
            />

            <Route
              path="*"
              element={
                <h1 className="text-3xl py-11 text-center text-red-700 font-bold">
                  404 Not Found
                </h1>
              }
            />
          </Routes>
        </main>
        <Footerr />
      </Router>
    </>
  );
};

export default App;
