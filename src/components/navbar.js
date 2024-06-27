import { FiSun } from "react-icons/fi";
import { DonwloadButton } from "./download.js";
import { TiThMenu } from "react-icons/ti";

export const Navbar = () => {
  return (
    <div className="relative lg:w-screen m-auto h-16  content-center flex justify-center ">
      <div className="flex w-[1280px] ">
        <div className="flex-1  ps-6 flex items-center">
          <img src="/images/Tom.png" />
        </div>
        <div className="hidden  gap-7 flex-1 justify-end items-center pe-6 lg:flex ">
          <div>About</div>
          <div>Work</div>
          <div>Testimonials</div>
          <div>Contact</div>
          <FiSun size={22} />
          <DonwloadButton />
          {/* <div className="bg-black text-white rounded-md py-1 px-2">
            Download CV
          </div> */}
        </div>
        <div className=" lg:hidden justify-end content-center pe-6">
          {" "}
          <TiThMenu size={30} />{" "}
        </div>
      </div>
    </div>
  );
};
