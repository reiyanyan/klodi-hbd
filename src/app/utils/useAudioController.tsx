import React from "react";
import { createContext } from "../component/context";

type IDCard = string;

/* -------------------------------------------------------------------------- */
/*                                   Context                                  */
/* -------------------------------------------------------------------------- */

type AudioContextProps = {
  setAudioState: React.Dispatch<React.SetStateAction<AudioStateProvider>>;
  audioState: AudioStateProvider;
};

type AudioStateProvider = {
  lastAudioPlayed: IDCard | null;
  audioPlayed: IDCard | null;
};

const defaultValueProvider: AudioStateProvider = {
  lastAudioPlayed: null,
  audioPlayed: null,
};

const AUDIO_CONTROLLER_PROVIDER = "AUDIO_CONTROLLER_PROVIDER";

const [Provider, useContext] = createContext<AudioContextProps>(
  AUDIO_CONTROLLER_PROVIDER
);

function AudioProvider({ children }: { children: React.ReactNode }) {
  const [audioState, setAudioState] =
    React.useState<AudioStateProvider>(defaultValueProvider);

  const value = React.useMemo(() => {
    return {
      audioState,
      setAudioState,
    };
  }, [audioState, setAudioState]);
  return <Provider {...value}>{children}</Provider>;
}

/* -------------------------------------------------------------------------- */
/*                                  Consumer                                  */
/* -------------------------------------------------------------------------- */

const AUDIO_CONTROLLER_CONSUMER = "AUDIO_CONTROLLER_CONSUMER";

export type UseAudioController = ReturnType<typeof useAudioController>;

function useAudioController(
  ref: React.RefObject<HTMLAudioElement>,
  id: IDCard,
  time: number = 0
) {
  const { audioState, setAudioState } = useContext(AUDIO_CONTROLLER_CONSUMER);
  const [playing, setPlaying] = React.useState(false);

  React.useEffect(() => {
    if (audioState.audioPlayed == id) {
      setPlaying(true);
      ref.current?.play();
      ref.current && (ref.current.currentTime = time);
    } else {
      setPlaying(false);
      ref.current?.pause();
      ref.current?.load();
    }
  }, [audioState, id, ref]);

  const play = React.useCallback(() => {
    setAudioState((val) => ({ ...val, audioPlayed: id }));
  }, [id]);

  const stop = React.useCallback(() => {
    setAudioState((val) => ({ ...val, audioPlayed: null }));
  }, [id]);

  return { playing, setPlaying, play, stop };
}

export { AudioProvider, useAudioController };
