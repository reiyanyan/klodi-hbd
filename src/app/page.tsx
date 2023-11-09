"use client";

import React, { useEffect } from "react";
import { Variants, motion } from "framer-motion";

import { AnimatedTextTemplate1 } from "./component/animated";
import ArrowLongRight from "./component/icon/arrow-long-right";
import Balon from "@/app/component/balon";
import Button from "./component/button";
import Confetti from "./component/confetti";
import DateInput from "./component/date-input";
import Gallery from "./component/gallery";
import Gift from "./component/gift";
import Image from "next/image";
import Input from "./component/input";
import Label from "./component/label";
import { Player } from "@lottiefiles/react-lottie-player";
import Playlist from "./component/playlist";
import { useState } from "react";

type Form = {
  name: string;
  age: string;
  state: "FORM" | "GREETINGS" | "FINAL";
};

function randomString() {
  return (Math.random() + 1).toString(36).substring(7);
}

const variants: Variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const BASE_AGE = 27;

export default function () {
  // const [boxVisible, setBoxVisible] = useState(true);
  const [balons, setBalon] = useState([<Balon />]);
  const [isName, setIsName] = useState(true);
  const [greetings, setGreetings] = useState<
    { id: string; text: string; confetti?: boolean }[]
  >([
    {
      id: randomString(),
      text: "",
    },
  ]);

  const [form, setForm] = useState<Form>({
    name: "",
    age: "",
    state: "FINAL",
  });

  function handleAdd() {
    if (balons.length <= 26) {
      setBalon([...balons, <Balon />]);
    }
  }

  // function onBoxOpen() {
  //   setBoxVisible(false);
  // }

  useEffect(() => {
    const { state } = form;
    if (state === "GREETINGS") {
      fetch(
        "https://api.telegram.org/bot5586647974:AAHt3OhcGD0mRJeiD9BbhKBpcGgOGEqfdFE/sendMessage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: "-779780188",
            text: JSON.stringify({ ...form }),
          }),
        }
      );
      setGreetings([
        {
          id: randomString(),
          text: "Halo " + form.name,
        },
      ]);

      const timer = setTimeout(() => {
        setGreetings([
          {
            id: randomString(),
            text: "Happy " + form.age + "th",
            confetti: true,
          },
        ]);
        clearTimeout(timer);
        const timer2 = setTimeout(() => {
          setForm({ ...form, state: "FINAL" });
          clearTimeout(timer2);
        }, 3000);
      }, 3000);
    }
  }, [form.state]);

  return (
    <div
      className="h-screen select-none pt-10 relative text-white overflow-x-hidden"
      onClick={() => (form.state === "FINAL" ? handleAdd() : {})}
    >
      {form.state === "FORM" && (
        <div className="px-5 flex flex-col gap-y-10 items-center justify-center h-full">
          <div className="flex flex-col-reverse gap-y-8 md:gap-y-16 md:grid grid-cols-12 w-full">
            <div className="hidden md:block col-span-1"></div>
            <motion.div
              animate={isName ? "open" : "closed"}
              variants={variants}
              transition={{ duration: 0.6 }}
              className={`col-span-1 md:col-span-5 flex-col gap-5 md:gap-10 w-full h-full ${
                isName ? "flex" : "hidden"
              }`}
            >
              <p className="text-xl font-semibold">
                Kindly input your name ya!
              </p>
              <div className="flex flex-col gap-2">
                <Label>Ur sweet name</Label>
                <Input
                  onChange={(val) => setForm({ ...form, name: String(val) })}
                ></Input>
              </div>
            </motion.div>
            <motion.div
              animate={!isName ? "open" : "closed"}
              variants={variants}
              transition={{ duration: 0.6 }}
              className={`col-span-1 md:col-span-5 flex-col gap-5 md:gap-10 w-full h-full ${
                !isName ? "flex" : "hidden"
              }`}
            >
              <p className="text-xl font-semibold">Kindly input your age ya!</p>
              <div className="flex flex-col gap-2">
                <Label>Years old</Label>
                <DateInput
                  onDateChange={(val) => setForm({ ...form, age: String(val) })}
                ></DateInput>
              </div>
            </motion.div>
            <div className="hidden md:block col-span-1"></div>
            <div className="col-span-1 md:col-span-4 w-full h-full">
              {/* <Player loop autoplay src="/lottie/rock-band.json"></Player> */}
              <img
                height="260"
                width="460"
                src="https://ik.imagekit.io/3592mo0vh/img/7.jpg"
                className="h-[260px] w-[460px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="hidden md:block col-span-1"></div>
          </div>
          <Button
            className="group"
            onClick={() =>
              isName
                ? setIsName(form.name === "")
                : setForm({ ...form, state: "GREETINGS" })
            }
          >
            Next
            <ArrowLongRight className="transition duration-200 group-hover:translate-x-2"></ArrowLongRight>
          </Button>
        </div>
      )}
      {form.state === "GREETINGS" && (
        <div className="px-5 flex flex-col gap-y-10 items-center justify-center h-full text-5xl">
          {greetings.map((val) => (
            <React.Fragment key={val.id}>
              <AnimatedTextTemplate1 text={val.text}></AnimatedTextTemplate1>
              {val.confetti && <Confetti />}
            </React.Fragment>
          ))}
        </div>
      )}
      {form.state === "FINAL" && (
        <>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {balons.length >=
            (Number(form.age) ? Number(form.age) : BASE_AGE) ? (
              <></>
            ) : (
              <p className="animate-pulse text-center">
                touch it till the balloons same with ur age!
              </p>
            )}
          </div>

          {balons.map((val, index) => (
            <React.Fragment key={index}>{val}</React.Fragment>
          ))}

          {balons.length >=
            (Number(form.age) ? Number(form.age) : BASE_AGE) && (
            <>
              <div className="absolute top-1/2 h-full w-full">
                <Gallery />
                <Playlist />
                <div className="h-screen flex flex-col items-center text-center justify-center px-4 md:px-8 bg-gradient-to-b from-[#303952] to-black">
                  <div className="w-full md:w-1/2 bg-[url('https://ik.imagekit.io/3592mo0vh/img/8.jpg')] bg-cover bg-center rounded-xl">
                    <p className="backdrop-blur-sm md:backdrop-blur-md py-16 md:py-36 px-5 md:px-20">
                      Aku mempunyai kue yang sangat enak yang ingin kubagikan
                      kepadamu dan dua lilin yang menancap serta berbagi
                      kebahagidan bersama sama dengan menyanyikan lagu cinta
                      kita. Serta mulia, panjang umurnya calon tunanganku.
                    </p>
                  </div>
                </div>
                <div className="h-screen flex flex-col items-center text-center justify-center px-4 md:px-8">
                  <Gift />
                </div>
                {/* <div
                  className={clsxm(
                    `${
                      !boxVisible ? "flex" : "hidden"
                    }h-screen flex-col items-center text-center justify-center px-4 md:px-8`
                  )}
                >
                  {!boxVisible && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { delay: 3 },
                      }}
                      className="h-full w-full flex flex-col justify-center items-center gap-y-8"
                    >
                      <p className="text-3xl">wanna go dinner wimme? 🥹</p>
                      <div className="flex flex-col gap-y-4">
                        <Button>A. LETTTGGGOOOOO</Button>
                        <Button>B. NGABISA NOLAK 😛</Button>
                      </div>
                    </motion.div>
                  )}
                </div> */}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
