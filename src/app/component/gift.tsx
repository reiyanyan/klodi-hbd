"use client";

import { AnimatePresence, motion } from "framer-motion";

import Button from "./button";
import Confetti from "./confetti";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";

type GiftProps = React.HTMLAttributes<HTMLDivElement> & {
  onBoxOpen: Function;
};

export default function ({ onBoxOpen }: GiftProps) {
  const [boxVisible, setBoxVisible] = useState(true);

  function handleOpenBox() {
    setBoxVisible(false);
    onBoxOpen(true);
    window.scroll({
      top: 100,
      left: 0,
      behavior: "smooth",
    });
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
          <div className="min-h-screen">
            <Confetti />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring" }}
              className="h-3/4 w-full flex flex-col justify-center items-center gap-y-8"
            >
              test isi apa nanti deh
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { delay: 3 },
              }}
              className="h-3/4 w-full flex flex-col items-center gap-y-10"
            >
              <p className="text-3xl">wanna go dinner wimme? 🥹</p>
              <div className="flex flex-col gap-y-6">
                <Button>A. LETTTGGGOOOOO</Button>
                <Button>B. NGABISA NOLAK 😛</Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
