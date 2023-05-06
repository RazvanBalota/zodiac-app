import React, { useState } from "react";
import "./App.css";
import { SelectSign } from "./components/SelectSign";
import { SelectTimeFrame } from "./components/SelectTimeFrame";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import { Horoscope } from "./components/Horoscope";

function App() {
  const [selectedSign, setSelectedSign] = useState(null);
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(null);
  const restart = () => {
    setSelectedSign(null);
    setSelectedTimeFrame(null);
  };

  return (
    <div className=" font-bold text-white">
      {!selectedSign && <SelectSign onSignSelected={setSelectedSign} />}
      {selectedSign && !selectedTimeFrame && <SelectTimeFrame onTimeFrameSelected={setSelectedTimeFrame} />}

      {selectedSign && selectedTimeFrame && <Horoscope sign={selectedSign} timeframe={selectedTimeFrame} />}
      {selectedSign && <Horoscope sign={selectedSign} timeframe={selectedTimeFrame} /> && (
        <motion.div
          variants={fadeIn("down", "tween", 1.4, 1)}
          initial="hidden"
          whileInView={"show"}
          className="flex items-center justify-center mt-20">
          <button
            className="transition-all duration-300 flex items-center justify-center capitalize border-2 rounded-lg
            hover:text-red-400 p-2 hover:border-red-400 "
            onClick={restart}>
            Reset
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default App;
