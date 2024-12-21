"use client";

import { Button, Label, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import MainImage from "./MainImage";

export function AddCars({ onSubmitCar }) {
  const [carState, setCarState] = useState({
    model: "",
    date: "",
  });

  const [showNotification, setshowNotification] = useState(false);

  const handleChange = (key, value) => {
    setCarState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!carState.model || !carState.date) {
      alert("Please fill all Fields!");
      return;
    }
    onSubmitCar(carState);

    setCarState({
      model: "",
      date: "",
    });

    setshowNotification(true);
    setTimeout(() => {
      setshowNotification(false);
    }, 1000);
  };

  return (
    <>
      <MainImage imageTitle="Rev Up Your Car Inventory" />
      <section className="AddCarsection py-10 px-4">
        <form
          className="flex max-w-md flex-col gap-4 mx-auto bg-yellow-100 p-6 rounded-lg shadow-md overflow-hidden"
          onSubmit={submitForm}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="carmodel" value="Car Model" />
            </div>
            <TextInput
              id="carmodel"
              type="text"
              placeholder="Car Model"
              value={carState.model}
              onChange={(e) => handleChange("model", e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="cardate" value="Manufacturing Date" />
            </div>
            <TextInput
              id="cardate"
              type="date"
              value={carState.date}
              onChange={(e) => handleChange("date", e.target.value)}
            />
          </div>
          <Button type="submit" disabled={showNotification}>
            Submit
          </Button>
        </form>
        {showNotification && (
          <span
            className="bg-yellow-500 p-2 font-semibold text-white text-md rounded-lg fixed top-5 right-5 shadow-md "
            role="alert"
          >
            Car Added successfully!
          </span>
        )}
      </section>
    </>
  );
}
