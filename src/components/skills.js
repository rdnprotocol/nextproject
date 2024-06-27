import { data } from "./data";
export const Skills = () => {
  return (
    <div className="bg-[#FFFFFF] w-screen h-fit flex justify-center">
      <div className="  h-[826px] w-[1280px] flex flex-col justify-center items-center gap-10">
        <div className="bg-[#E5E7EB] h-[28px] w-[105px] rounded-lg text-center mb-4">
          Skills
        </div>
        <div>The skills, tools and technologies I am really good at:</div>
        <div className="grid grid-rows-2 grid-flow-col gap-24 ">
          {data.map((item) => (
            <div className=" flex flex-col items-center justify-center">
              {item.source}
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
