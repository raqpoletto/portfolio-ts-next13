import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex relative flex-col h-screen text-center md:text-left md:text-row mx-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500  text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        /* viewport={{ once: true }} */
        transition={{ duration: 1.2 }}
        src="https://media-exp1.licdn.com/dms/image/C5603AQGWwy5kqUx_sQ/profile-displayphoto-shrink_400_400/0/1659038970603?e=1674691200&v=beta&t=UCTqGIVAz5DlidbTlfiDe563MtBpv-Kpv5eQLrNz_MU"
        alt="my logo"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover rounded-full md:rounded-lg md:w-64 md:h-95"
      />
    </div>
  );
}
