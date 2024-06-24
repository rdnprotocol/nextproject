import { FiSun } from "react-icons/fi";
import { DonwloadButton } from "./download.js";

export const Navbar = () => {
  return (
    <div className="w-[1440px] m-auto h-16 border border-sky-500 content-center flex justify-center ">
      <div className="flex w-[1280px] ">
        <div className="flex-1 border border-sky-500 ps-6 font-black text-3xl">
          TOM
        </div>
        <div className="flex gap-7 flex-1 justify-end items-center border border-sky-500 pe-6 ">
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
      </div>
    </div>
  );
};
