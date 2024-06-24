import { GrLocation } from "react-icons/gr";
import { TbPointFilled } from "react-icons/tb";
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialTwitter } from "react-icons/sl";
import { FaFigma } from "react-icons/fa";
export const Landing = () => {
  return (
    <div className="w-screen h-[556px] border border-sky-800 flex justify-center ">
      <div className="flex w-[1280px] h-[556px] border border-sky-800 ">
        <div className="flex-1  border border-sky-800 text-black py-24 ">
          <div className="pb-12">
            {" "}
            <div className="font-bold text-[72px]">Hi, I’m Tom 👋</div>
            <div>
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </div>
          </div>

          <div className="flex flex-col pb-12">
            <div className="flex items-center gap-2 ">
              <GrLocation /> <div>Ulaanbaatar, Mongolia</div>
            </div>
            <div className="flex items-center gap-2 ">
              <TbPointFilled color="green" />{" "}
              <div>Available for new projects</div>
            </div>
          </div>
          <div className="flex gap-3">
            <VscGithubAlt />
            <SlSocialTwitter />
            <FaFigma />
          </div>
        </div>
        <div className="flex-1 flex justify-end relative border border-sky-800 py-24">
          <div className=" relative right-14">
            <img src="/images/Pic.png" />{" "}
          </div>{" "}
          <div
            className="-z-50 absolute right-3
          top-32"
          >
            <img src="/images/Background.png" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
