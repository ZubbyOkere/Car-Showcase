import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="w-full absolute z-10">
      <nav className="mx-auto max-w-[1440px] flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src={"/logo.svg"}
            alt="Car Place"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="sign in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
