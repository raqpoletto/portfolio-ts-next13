import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article>
      <motion.img
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://res.cloudinary.com/poletto/image/upload/v1669831045/kisspng-google-logo-5b02bbe210fa26.4684376415269058260696_kt1yek.png"
      />
    </article>
  );
}
