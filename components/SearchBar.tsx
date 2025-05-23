"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      return alert("fill in the search bar");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    }
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <button type="submit" className={`-ml-3 z-30 S`}>
          <Image
            src={"/magnifying-glass.svg"}
            alt="magnifying glass"
            width={40}
            height={40}
            className="object-contain"
          />
        </button>
      </div>
      <div className="searchbar__item">
        <Image
          src={"/model-icon.png"}
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Porsche"
          className="searchbar__input"
        />
        <button type="submit" className={`-ml-3 z-30 `}>
          <Image
            src={"/magnifying-glass.svg"}
            alt="magnifying glass"
            width={40}
            height={40}
            className="object-contain"
          />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
