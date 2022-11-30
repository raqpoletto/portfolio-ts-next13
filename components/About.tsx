import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col h-screen text-center sm:text-center sm:text-row mx-w-7xl px-10 justify-evenly mx-auto items-center sm:text-xs"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        /* viewport={{ once: true }} */
        transition={{ duration: 1.2 }}
        src="https://res.cloudinary.com/poletto/image/upload/v1669750858/mylogo_zhyymy.png"
        alt="my logo"
        className="-md-20 md:mb-0 flex-shrink-0 rounded h-60 w-49 mx-auto object-cover bg-center"
        //logo has to be round and centered
        /*  className="rounded h-60 w-49 mx-auto object-cover bg-center" */
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a bit of{" "}
          <span className="underline decoration-[#9134d3]/70">context</span>{" "}
        </h4>
        <p className="text-sm">
          I worked for 13 years in fine dining, in which I helped conquer titles
          and build teams, brands, menus, and concepts. I graduated in Culinary
          Arts, and as a chef, I acquired endurance, multi-task and how to be a
          true team player. During the pandemic I had more time on my hands and
          started to study on my own. That's when I decided to become a
          Developer. As a creative person, bringing imaginations into reality
          and solving problems are two things that inspire me to build a career
          in web development. Recently I graduated from Ironhack's Program where
          I built a strong portfolio and developed three applications, 2 of them
          front and backend created by me and responsive. Currently, I'm working
          on two other projects so I can apply my skills on how to work with
          Meta API, Redux, TypeScript, Angular and VueJS. I strongly believe
          that my mission and what brought me here is to create something from
          scratch and to be able to evolve my technical capacity to bring more
          efficient solutions to people.
        </p>
      </div>
    </motion.div>
  );
}
