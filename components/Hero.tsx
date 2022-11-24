import React from "react";
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
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#9134d3" />
      </h1>
    </div>
  );
}
