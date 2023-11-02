import { AudioProvider } from "../utils/useAudioController";
import Card from "./card";
import { useState } from "react";

export default function () {
  const [audioList, _] = useState([
    {
      title: "The Way I Loved You",
      artist: "Taylor's",
      img: "https://i.scdn.co/image/ab67616d00001e02a48964b5d9a3d6968ae3e0de",
      song: "the_way",
      time: 187,
    },
    {
      title: "Enchanted",
      artist: "Taylor's",
      img: "https://i.scdn.co/image/ab67616d00001e020b04da4f224b51ff86e0a481",
      song: "enc",
      time: 334,
    },
    {
      title: "You Belong With Me",
      artist: "Taylor's",
      img: "https://i.scdn.co/image/ab67616d00001e02a48964b5d9a3d6968ae3e0de",
      song: "belong",
      time: 194,
    },
  ]);

  return (
    <AudioProvider>
      <div className="grid place-items-center min-h-screen bg-gradient-to-b from-black to-[#303952] p-5">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5">
            Made for you
          </h1>
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {audioList.map((val, index) => (
              <Card key={index} val={{ ...val, key: index }} />
            ))}
          </section>
        </div>
      </div>
    </AudioProvider>
  );
}
