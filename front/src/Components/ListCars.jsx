import React from "react";
import { Card } from "flowbite-react";
import MainImage from "./MainImage";

const ListCars = ({ cars, onDeleteCar }) => {
  return (
    <>
      <MainImage imageTitle="Cars List" />
      <section className="ListCarSection py-10 px-4">
        <div className="CardWrapper flex flex-wrap justify-center items-center gap-10">
          {cars.length > 0 ? (
            cars.map((car) => (
              <Card
                key={car._id}
                className="CarCard max-w-sm"
                imgAlt="Car Image"
                imgSrc={car.imgURL}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {car.carModel}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {car.manufacturingDate}
                </p>
                <button
                  onClick={() => onDeleteCar(car._id)}
                  className="mt-4 bg-blue-400 p-1 rounded-lg duration-300 hover:bg-red-400"
                >
                  Delete
                </button>
              </Card>
            ))
          ) : (
            <p className="font-bold text-2xl py-11 text-center">
              No Car Present 🏎️ !
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default ListCars;
