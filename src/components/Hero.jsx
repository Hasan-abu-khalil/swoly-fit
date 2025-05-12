import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center">
      <div className="flex flex-col gap-4 max-w-[800] w-full mx-auto p-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl">
          SWOLE<span className="text-blue-400">NORMOUS</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light  ">
        i hereby acknowledgement that i may become
        <span className="text-blue-400 font-medium">
          unbelievably swolenormous
        </span>
        and accepit all risks of becoming the local
        <span className="text-blue-400 font-medium">mass momtrosity</span>
        afflicted with server body dismorphia, unable to fit through doors.
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept & Begin"}
      ></Button>
    </div>
  );
}

export default Hero;
