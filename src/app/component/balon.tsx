"use client";

import { motion } from "framer-motion";
export default function () {
  function randomBalon() {
    const balons = ["balon1", "balon2", "balon3"];
    const numberRand = Math.floor(Math.random() * balons.length);
    return balons[numberRand];
  }

  function randomX() {
    const min = 0;
    const max = Math.floor(document.body.clientWidth - 100);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomY() {
    const min = 0;
    const max = 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
      <motion.img
        src={`/${randomBalon()}.svg`}
        className="h-max w-28"
        initial={{ y: 1000, x: randomX(), position: "absolute" }}
        animate={{ y: randomY() }}
        transition={{
          type: "spring",
          duration: 3,
        }}
      ></motion.img>
    </>
  );
}
