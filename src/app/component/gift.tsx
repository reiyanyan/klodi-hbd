"use client";

import { AnimatePresence, motion } from "framer-motion";

import Confetti from "./confetti";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";

export default function () {
  const [boxVisible, setBoxVisible] = useState(true);

  function handleOpenBox() {
    setBoxVisible(false);
  }

  return (
    <>
      <AnimatePresence>
        {boxVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring" }}
            className="h-max"
            onClick={() => handleOpenBox()}
          >
            <Player
              loop
              autoplay
              src="/lottie/gift.json"
              style={{ width: "350px", height: "350px" }}
            />
          </motion.div>
        )}
        {!boxVisible && (
          <>
            <Confetti />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring" }}
            >
              test isi apa nanti deh
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
