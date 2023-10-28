import { Variants, motion } from "framer-motion";

import Image from "next/image";
import style from "./masonry.module.css";

const images = [
  {
    title: "Photo title",
    img: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Photo title",
    img: "https://images.unsplash.com/photo-1543297031-d102cd432d54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Photo title",
    img: "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Photo title",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Photo title",
    img: "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Photo title",
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Photo title",
    img: "https://images.unsplash.com/reserve/HgZuGu3gSD6db21T3lxm_San%20Zenone.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Photo title",
    img: "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Photo title",
    img: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
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
              <Image
                alt=""
                className="rounded"
                src={item.img}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              <div
                className={
                  "absolute bottom-0 w-full h-24 px-4 pt-6 " + style.overlay
                }
              >
                <div className="text-white text-lg">{item.title}</div>
                <div className="text-gray-400 text-sm">Photographer</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
