const asyncHandler = require("express-async-handler");
const carsData = require("../models/carSchema");

//@desc get all cars
//@route GET /carEntries
const getallCars = asyncHandler(async (req, res) => {
  const cars = await carsData.find();
  res.status(200).json(cars);
});

//@desc get single car
//@route GET /carEntries :id
const getCar = asyncHandler(async (req, res) => {
  const car = await carsData.findById(req.params.id);
  if (!car) {
    res.status(400);
    throw new Error("Car not found!");
  }
  res.status(200).json(car);
});

//@desc create car
//@route POST /carEntries
const createcar = asyncHandler(async (req, res) => {
  const { model, date } = req.body;
  if (!model || !date) {
    res.status(400);
    throw new Error("Fields are missing!");
  }
  const car = await carsData.create({
    carModel: model,
    manufacturingDate: date,
  });
  res.status(201).json(car);
});

//@desc update car
//@route PUT /carEntries :id
const updatecar = asyncHandler(async (req, res) => {
  const { model, date } = req.body;
  const car = await carsData.findById(req.params.id);
  if (!car) {
    res.status(400);
    throw new Error("Car not found!");
  }
  const updatedCar = await carsData.findByIdAndUpdate(
    req.params.id,
    {
      carModel: model,
      manufacturingDate: date,
    },
    { new: true }
  );
  res.status(200).json(updatedCar);
});

//@desc update car
//@route DELETE /carEntries :id
const deletecar = asyncHandler(async (req, res) => {
  const car = await carsData.findById(req.params.id);
  if (!car) {
    res.status(400);
    throw new Error("Car not found!");
  }
  const deletedCar = await carsData.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedCar);
});

module.exports = {
  getallCars,
  getCar,
  createcar,
  updatecar,
  deletecar,
};
