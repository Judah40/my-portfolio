import React from "react";

const page = () => {
  return (
    <div className="flex flex-col space-y-24">
      {/* Landing section */}
      <div className="md:h-[700px] h-[650px]  w-full  flex flex-col justify-end items-center relative ">
        <div className="z-100 mb-[460px] items-center flex flex-col space-y-2">
          <div className="p-1 w-20 rounded-full border-black border">
            <p className="text-xl text-black text-center">Hello</p>
          </div>
          <p className="text-4xl text-black text-center md:text-6xl">
            I'm <span className="text-blue-500">Judah Alvin Dore</span>
          </p>
          <p className="text-4xl text-black text-center md:text-6xl">
            Software Engineer
          </p>
        </div>
        <div className="w-8/12   rounded-t-full flex justify-center ">
          <img
            src="/images/img.png"
            className=" h-[500px] absolute bottom-0"
            alt="img"
          />
        </div>
      </div>
      {/**section 2 */}
      <div
        className="w-full  bg-red-500 rounded-2xl"
        style={{
          backgroundImage:
            'url("/images/close-up-modern-office-buildings.jpg")',
          // Set the height of the div
          width: "100%", // Set the width of the div
          backgroundSize: "cover", // Make sure the image covers the whole div
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-[600px] flex justify-center">
          <div className="w-11/12 flex flex-col lg:flex-row lg:justify-between h-32  items-center">
            <p className=" text-xl text-white">
              My <span className="text-blue-500">Services</span>
            </p>
            <p className="text-white w-96">
              A software engineer designs, develops, and maintains software
              systems and applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
