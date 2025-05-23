"use client";
import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";

interface carCardProps {
  car: CarProps;
}

const CarCard = ({ car }: carCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h1>
          {make} {model}
        </h1>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt={"car model"}
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex flex-col w-full justify-center items-center gap-2 group-hover:invisible">
          <Image
            src={"/steering-wheel.svg"}
            width={20}
            height={20}
            alt="steering wheel"
          />
          <p className="text-[14px]">
            {transmission === "a" ? "Automatic" : "Manual"}
          </p>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-2 group-hover:invisible">
          <Image
            src={"/tire.svg"}
            width={20}
            height={20}
            alt="steering wheel"
          />
          <p className="text-[14px]">{drive}</p>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-2 group-hover:invisible">
          <Image src={"/gas.svg"} width={20} height={20} alt="steering wheel" />
          <p className="text-[14px]">{city_mpg} MPG</p>
        </div>
      </div>
      <div className="car-card__btn-container">
        <CustomButton
          title="view more"
          containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
          textStyles="text-white text-[14px] leading-[17px] font-bold"
          rightIcon="/right-arrow.svg"
          handleClick={() => setIsOpen(true)}
        />
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(!true)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
