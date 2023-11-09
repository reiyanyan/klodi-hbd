import { Variants, motion } from "framer-motion";

import Image from "next/image";
import style from "./masonry.module.css";

const images = [
  // {
  //   title: "Photo title",
  //   img: "/static/1.jpg",
  // },
  {
    title: "Photo title",
    img: "/img/2.jpg",
  },
  {
    title: "Photo title",
    img: "/img/3.jpg",
  },
  {
    title: "Photo title",
    img: "/img/4.jpg",
  },
  {
    title: "Photo title",
    img: "/img/5.jpg",
  },
  {
    title: "Photo title",
    img: "/img/6.jpg",
  },
  {
    title: "Photo title",
    img: "/img/9.jpg",
  },
  {
    title: "Photo title",
    img: "/img/10.jpg",
  },
  {
    title: "Photo title",
    img: "/img/11.jpg",
  },
];

const itemVariants: Variants = {
  hidden: {
    y: "200%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.5 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.2 },
  },
};

export const variantTemplate1: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    // backgroundColor: ['hsl(0, 100, 50)', 'hsl(240, 100, 50)],
    transition: {
      staggerChildren: 0.025,
    },
  },
};

export default function () {
  return (
    <>
      <motion.div
        initial="hidden"
        animate={"visible"}
        variants={variantTemplate1}
        className={"px-5 md:px-8 " + style.masonry}
      >
        {images.map((item) => (
          <motion.div
            className="rounded-lg overflow-hidden mb-8"
            key={item.img}
            variants={itemVariants}
          >
            <div className="relative w-full h-full cursor-pointer">
              {/* <img className="rounded" src={item.img} /> */}
              <img
                alt=""
                className="rounded"
                src={"https://ik.imagekit.io/3592mo0vh/" + item.img}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              {/* <div
                className={
                  "absolute bottom-0 w-full h-24 px-4 pt-6 " + style.overlay
                }
              >
                <div className="text-white text-lg">{item.title}</div>
                <div className="text-gray-400 text-sm">Photographer</div>
              </div> */}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
