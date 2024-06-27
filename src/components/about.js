import { BsDot } from "react-icons/bs";
export const About = () => {
  return (
    <div className="bg-[#F9FAFB] w-screen h-fit flex justify-center">
      <div className="bg-[#F9FAFB]  h-[826px] w-[1280px] flex flex-col justify-center items-center ">
        <div className="bg-[#E5E7EB] h-[28px] w-[105px] rounded-lg text-center mb-12">
          About me
        </div>
        <div className="flex">
          <div className="flex-1">
            <img src="/images/Pic2.png" />
          </div>
          <div className="flex flex-col gap-4 flex-1 ">
            <h1>Curious about me? Here you have it:</h1>
            <p>
              I'm a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.
            </p>
            <p>
              Since starting my web development journey in 2015, I've embraced
              challenges and kept up with the latest tech trends. Now in my
              early thirties, seven years in, I'm building cutting-edge web apps
              using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
              more.
            </p>
            <p>
              {" "}
              With a progressive mindset, I enjoy the entire product development
              process, from ideation to execution. Off duty, you'll find me on
              Twitter, tracking startup journeys, or unwinding. Follow me for
              tech insights and public project updates on Twitter or GitHub.
            </p>
            <p>Finally, some quick bits about me.</p>
            <div className="flex flex-wrap gap-12">
              <div className="flex items-center">
                <BsDot />
                <div>B.E. in Computer Engineering </div>
              </div>
              <div className="flex items-center">
                <BsDot />
                <div>Avid learner </div>
              </div>
              <div className="flex items-center">
                <BsDot />
                <div>Full time freelancer</div>
              </div>
            </div>
            <p>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
