import Image from "next/image";
import { FiInstagram, FiFacebook, FiGithub, FiGlobe } from "react-icons/fi";
import { FaEnvelope, FaLocationArrow, FaSuitcase } from "react-icons/fa";
export default function Home() {
  return (
    <div className="text-white">
      {/* header */}
      <header className="w-full space-x-8 h-40  flex items-center justify-center p-4">
        <div className="w-11/12 flex">
          {/* logo */}
          <div className="">
            <Image
              src={"/logo.jpeg"}
              alt="logo"
              width={90}
              height={60}
              style={{ borderRadius: "50%" }}
            />
          </div>
          {/* navigatoe */}
          <div className="flex-1 justify-end flex ">
            <ul className="flex space-x-8 items-center justify-center">
              {/* Home */}
              <li>
                <button className="hover:text-[#12F7D6]">Home</button>
              </li>

              {/* blog */}
              <li>
                <button className="hover:text-[#12F7D6]">Blogs</button>
              </li>

              {/* instagram */}
              <li className="hidden md:block">
                <button>
                  <FiInstagram color="#12F7D6" />
                </button>
              </li>
              {/* facebook */}
              <li className="hidden md:block">
                <button>
                  <FiFacebook color="#12F7D6" />
                </button>
              </li>
              {/* github */}
              <li className="hidden md:block">
                <button>
                  <FiGithub color="#12F7D6" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="w-full flex justify-center">
        <div className="w-11/12 h-[0.2px] bg-gray-500"></div>
      </div>

      {/* body */}
      <main className="w-full flex flex-1 justify-center p-4">
        <div className="grid grid-cols-1">
          <div className="w-[320px] h-[520px] rounded-br-[160px] rounded-tl-[160px] border-[4px] border-t-[#12F7D6] border-l-[#12F7D6] shadow-xl shaddow-[#12F7D6] flex flex-col justify-center items-center space-y-4">
            {/* my pic */}
            <div className="w-[96px] h-[96px] rounded-full border-[3px] border-[#12F7D6] ">
              <img src="/jad.jpeg" alt="my-pic" className="w-full h-full rounded-full"/>
            </div>
            {/* title */}
            <div className="flex flex-col items-center">
              <h1 className="text-xl">Judah Dore</h1>
              <h1 className="underline">Full - Stack developer</h1>
            </div>

            {/* other details */}
            <div className="flex flex-col space-y-2">
              {/* email */}
              <div className="flex items-center justify-center w-full space-x-4 ">
                <FaEnvelope color="#12F7D6" />
                <h1>judahdore@gmail.com</h1>
              </div>
              {/* location */}
              <div className="flex items-center justify-start w-full space-x-4 ">
                <FaLocationArrow color="#12F7D6" />
                <h1>Sierra Leone</h1>
              </div>

              {/* job */}
              <div className="flex items-center justify-start w-full space-x-4 ">
                <FaSuitcase color="#12F7D6" />
                <h1>Full-time / Freelancer</h1>
              </div>
              {/*  site*/}
              <div className="flex items-center justify-start w-full space-x-4 ">
                <FiGlobe color="#12F7D6" />
                <h1>judah.com</h1>
              </div>
              <div className="flex flex-row space-x-2">
                {/* html */}
                <div className="w-[50px] items-center justify-center text-[12px] flex h-[18px] rounded-[8px] bg-[#12F7D6] text-[#292F36]">
                  HTML
                </div>
                {/* css */}
                <div className="w-[50px] items-center justify-center  text-[12px] flex h-[18px] rounded-[8px] bg-[#12F7D6] text-[#292F36]">
                  CSS
                </div>{" "}
                {/* js */}
                <div className="w-[50px] items-center justify-center text-[12px] flex h-[18px] rounded-[8px] bg-[#12F7D6] text-[#292F36]">
                  JS
                </div>{" "}
                {/* react */}
                <div className="w-[50px] items-center justify-center text-[12px] flex h-[18px] rounded-[8px] bg-[#12F7D6] text-[#292F36]">
                  REACT
                </div>{" "}
              </div>
              {/* cv download */}
              <button className="w-[227px] h-[56px] rounded-[32px] bg-white text-[#292F36]">
                Download CV 
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* footer */}
      <footer></footer>
    </div>
  );
}
