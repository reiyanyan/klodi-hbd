"use client";

import React, { useEffect } from "react";
import { Variants, motion } from "framer-motion";

import { AnimatedTextTemplate1 } from "./component/animated";
import ArrowLongRight from "./component/icon/arrow-long-right";
import Balon from "@/app/component/balon";
import Button from "./component/button";
import DateInput from "./component/date-input";
import Gallery from "./component/gallery";
import Gift from "./component/gift";
import Input from "./component/input";
import Label from "./component/label";
import { Player } from "@lottiefiles/react-lottie-player";
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
  const [balons, setBalon] = useState([<Balon />]);
  const [isName, setIsName] = useState(true);
  const [greetings, setGreetings] = useState([
    {
      id: randomString(),
      text: "",
    },
  ]);

  const [form, setForm] = useState<Form>({
    name: "",
    age: "",
    state: "FORM",
  });

  function handleAdd() {
    if (balons.length <= 26) {
      setBalon([...balons, <Balon />]);
    }
  }

  useEffect(() => {
    const { state } = form;
    if (state === "GREETINGS") {
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

  useEffect(() => {
    const src = "/shabba.mp3";
    var audio = document.createElement("audio");
    audio.autoplay = true;
    audio.load();
    audio.addEventListener("load", () => audio.play(), true);
    audio.volume = 0.7;
    audio.src = src;
  }, []);

  return (
    <div
      className="h-screen select-none pt-10 relative text-white overflow-x-hidden"
      onClick={() => (form.state === "FINAL" ? handleAdd() : {})}
    >
      {form.state === "FORM" && (
        <div className="px-5 flex flex-col gap-y-10 items-center justify-center h-full">
          <div className="flex flex-col-reverse gap-y-16 md:grid grid-cols-12 w-full">
            <div className="hidden md:block col-span-1"></div>
            <motion.div
              animate={isName ? "open" : "closed"}
              variants={variants}
              transition={{ duration: 0.6 }}
              className={`col-span-1 md:col-span-5 flex-col gap-10 w-full h-full ${
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
              className={`col-span-1 md:col-span-5 flex-col gap-10 w-full h-full ${
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
              <Player loop autoplay src="/lottie/rock-band.json"></Player>
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
            <AnimatedTextTemplate1
              key={val.id}
              text={val.text}
            ></AnimatedTextTemplate1>
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
                <div className="h-screen flex flex-col items-center text-center justify-center px-4 md:px-8">
                  <p>letter birthday nantinya disini</p>
                </div>
                <div className="h-screen flex flex-col items-center text-center justify-center px-4 md:px-8">
                  <Gift />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
