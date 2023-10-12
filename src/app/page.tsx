import Image from "next/image";

export default function Home() {
  const items = [
    {
      text: "Lorem",
      color: "bg-pink-300",
    },
    {
      text: "Lorem",
      color: "bg-red-300",
    },
    {
      text: "Lorem",
      color: "bg-sky-300",
    },
    {
      text: "Lorem",
      color: "bg-orange-300",
    },
  ];

  return (
    <div className="container flex flex-col w-full">
      <div className="h-screen">
        <div className="grid grid-cols-12 items-center justify-between w-full h-full">
          <div className="col-span-6 flex flex-col text-base text-white">
            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
            <p className="text-4xl text-white">Hi Dear ❣️</p>
            <p className="text-4xl text-white">It's Bima Birthday!</p>
            <p className="tracking-wider leading-7 my-2">
              Lorem ipsum dolor sit amet
            </p>
            <p className="tracking-wider leading-7">
              <span className="text-4xl text-white leading-none tracking-normal">
                Happy Birthday,
              </span>{" "}
              lorem ipsum dolor sit amet cupcake ipsum gatau lagi anjing mau
              nulis apa disini bebas deh ya hahahah
            </p>
          </div>
          <div className="col-span-6 flex justify-end">
            <div className="relative h-96 w-96">
              <Image
                priority={true}
                fill={true}
                src="/birthday.svg"
                alt="birthday"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 justify-center items-center w-full -mt-36">
        <p className="text-4xl">Here is ur gift, x!</p>
        <div className="w-full">
          <div className="grid grid-cols-4">
            {items.map((val, index) => (
              <div
                className={`flex flex-col items-center w-full h-screen p-8 ${val.color}`}
                key={index}
              >
                <div className="flex h-full items-center ">
                  <div className="relative h-48 w-48">
                    <Image
                      priority={true}
                      fill={true}
                      src="/birthday.svg"
                      alt="birthday"
                    ></Image>
                  </div>
                </div>
                <p>{val.text}</p>
                <div className="bg-black/10 text-black p-4 w-max">
                  Click To Open
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-2">
          {[1, 2].map((val) => (
            <div
              className={`flex flex-col items-center text-left w-full h-screen p-8 ${
                val === 1 ? "" : "mt-24"
              }`}
              key={val}
            >
              <div className="flex h-full items-center">
                <div className="relative h-96 w-96">
                  <Image
                    priority={true}
                    fill={true}
                    src="/birthday.svg"
                    alt="birthday"
                  ></Image>
                </div>
              </div>
              <div className="flex flex-col gap-4 mx-14">
                <p className="font-bold text-4xl tracking-wider">
                  AS WE ARE TOGETHER,
                </p>
                <p>
                  to have you in my life and to be able to call you my
                  girlfriend. you have a heart of gold and a soul that radiates
                  warmth and kindness. you are the most beautiful person i have
                  ever met, both inside and out.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>tambahan apaaa gituu</div>
    </div>
  );
}
