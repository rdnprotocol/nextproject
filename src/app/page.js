import { About } from "@/components/about";
import { Landing } from "@/components/landing";
import { Skills } from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Skills />
    </>
  );
}
