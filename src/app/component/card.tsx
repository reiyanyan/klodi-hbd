import React from "react";
import { useAudioController } from "../utils/useAudioController";

type CardProps = {
  val: {
    key: number;
    title: string;
    img: string;
    artist: string;
    song: string;
    time?: number;
  };
} & React.HTMLAttributes<HTMLDivElement>;

export default function ({ val, ...rest }: CardProps) {
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const { play, playing, stop } = useAudioController(
    audioRef,
    String(val.key),
    val.time
  );

  return (
    <div {...rest} className="bg-gray-900 shadow-lg rounded p-3">
      <audio
        ref={audioRef}
        controls
        className="hidden"
        src={`${val.song}.mp3`}
      ></audio>
      <div className="group relative">
        <img className="w-full md:w-72 block rounded" src={val.img} alt="" />
        <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
          <button
            className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition select-none"
            onClickCapture={() => (playing ? stop() : play())}
          >
            {playing ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 01-1.313-1.313V9.564z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-white text-lg">{val.title}</h3>
        <p className="text-gray-400">{val.artist}</p>
      </div>
    </div>
  );
}
