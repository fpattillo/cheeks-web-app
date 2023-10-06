"use client";
import React from "react";
import SigninButton from "./SigninButton";
import CheeksLogo from "../../assets/cheeks-logo.png";
import Image from "next/image";

const Appbar = () => {
  return (
    <header className="flex justify-between bg-gradient-to-b from-white to-gray-200 shadow">
      <div className="flex">
        <Image
          src={CheeksLogo}
          alt="Cheeks"
          height={56}
          onClick={() => window.location.href = "/"}
          className="cursor-pointer"
        />
        <button className="p-4 ml-6 text-black" onClick={() => window.location.href = "/exercises"}>
          Exercises
        </button>
      </div>
      <div className="p-4">
        <SigninButton />
      </div>
    </header>
  );
};

export default Appbar;
