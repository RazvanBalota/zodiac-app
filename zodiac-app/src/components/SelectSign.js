import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useState, useEffect } from "react";
import { getSigns } from "../service/Api";

export const SelectSign = ({ onSignSelected }) => {
  const [signs, setSigns] = useState([]);

  useEffect(() => {
    getSigns().then(setSigns);
  }, []);

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
          <p>Please select your sign :)</p>
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
        <div className="grid grid-cols-3 gap-x-10 gap-y-5">
          {signs?.map((sign, index) => {
            return (
              <button
                key={index}
                className="transition-all duration-300 flex items-center justify-center capitalize border-2 rounded-lg hover:text-red-400 p-2 hover:border-red-400 "
                onClick={() => onSignSelected(sign)}>
                {sign}
              </button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
