import { useEffect, useState } from "react";
import { getHoroscope } from "../service/Api";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

export const Horoscope = ({ sign, timeframe }) => {
  const [horoscope, setHoroscope] = useState(null);

  useEffect(() => {
    getHoroscope(sign, timeframe).then(setHoroscope);
  }, [sign, timeframe]);
  return (
    <div className="container mx-auto max-w-[540px]">
      <motion.div
        variants={fadeIn("down", "tween", 0.8, 1)}
        initial="hidden"
        whileInView={"show"}
        className="flex items-center justify-center">
        <h1 className="text-5xl mt-10 mb-6">
          Sig
          <span className=" text-red-400">nu</span>s<span className=" text-red-400">.</span>
        </h1>
      </motion.div>
      <motion.div
        variants={fadeIn("down", "tween", 1, 1)}
        initial="hidden"
        whileInView={"show"}
        className="flex items-center justify-center mb-10">
        <p>
          <span className="text-red-400 capitalize font-bold">{sign}</span> horoscope for{" "}
          <span className="text-red-400">{timeframe}</span> is :
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("down", "tween", 1.2, 1)}
        initial="hidden"
        whileInView={"show"}
        className="mb-10 rounded-md border bg-gradient-to-r from-black via-white to-black py-[0.5px] border-none "></motion.div>
      <motion.div
        variants={fadeIn("down", "tween", 1.4, 1)}
        initial="hidden"
        whileInView={"show"}
        className="flex justify-center items-center text-center">
        {horoscope}
      </motion.div>
    </div>
  );
};
