export const start = (audioRef: React.RefObject<HTMLAudioElement>) => {
  if (audioRef.current !== null) {
    audioRef.current.play();
  }
}

export const stop = (audioRef: React.RefObject<HTMLAudioElement>) => {
  if (audioRef.current !== null) {
    audioRef.current.pause();
    audioRef.current.currentTime = 0.0;
  }
}