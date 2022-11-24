import React from "react";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../components/BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Raquel Poletto",
      "I'm a Full Stack Developer",
      "TypeScript-Enthusiast.tsx",
      "<FormerChefDeCuisine />",
      "Aspiring Salsa dancer",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media-exp1.licdn.com/dms/image/C5603AQGWwy5kqUx_sQ/profile-displayphoto-shrink_400_400/0/1659038970603?e=1674691200&v=beta&t=UCTqGIVAz5DlidbTlfiDe563MtBpv-Kpv5eQLrNz_MU"
        alt="my profile picture"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Junior Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#9134d3" />
        </h1>
        <div className="pt-7">
          {/* I need to make the href of the links to reference to a specific area on the page */}

          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
