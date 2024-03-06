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

export const formatTimeString = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

export const formatTimeNumber = (timeString: string) => {
  // Split the time string into minutes and seconds
  const parts = timeString.split(':');

  // Convert minutes and seconds to numbers
  const minutes = parseInt(parts[0], 10);
  const seconds = parseInt(parts[1], 10);

  return minutes * 60 + seconds;
}
