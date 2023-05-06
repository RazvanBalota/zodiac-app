import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export const SelectTimeFrame = ({ onTimeFrameSelected }) => {
  return (
    <div className="container mx-auto max-w-[780px] h-full ">
      <div>
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
          <p>Please select a day :)</p>
        </motion.div>
        <motion.div
          variants={fadeIn("down", "tween", 1.2, 1)}
          initial="hidden"
          whileInView={"show"}
          className="mb-10 rounded-md border bg-gradient-to-r from-black via-white to-black py-[0.5px] border-none "></motion.div>
      </div>

      <motion.div
        variants={fadeIn("down", "tween", 1.2, 1)}
        initial="hidden"
        whileInView={"show"}
        className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-x-10 gap-y-5 mt-10">
          {["yesterday", "today", "tomorrow"].map((timeframes, index) => {
            return (
              <button
                key={index}
                className="transition-all duration-300 flex items-center justify-center capitalize border-2 rounded-lg hover:text-red-400 p-2 hover:border-red-400 "
                onClick={() => onTimeFrameSelected(timeframes)}>
                {timeframes}
              </button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
