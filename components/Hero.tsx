"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

type Props = {};

const Hero = (props: Props) => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding">
        <h1 className="hero__title">Rent a car, all the time</h1>
        <p>Streamline your car experience with out effortless process</p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src={"/hero.png"}
            alt="hero-image"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
