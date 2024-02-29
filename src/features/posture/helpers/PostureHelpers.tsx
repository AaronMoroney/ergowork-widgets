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

export const createUserSettings = (inputValue: string, activeAlarm: string, volume: number | number[], time: number, alert: boolean) => {
  return {
      label: inputValue,
      activeAlarm: activeAlarm,
      volume: Array.isArray(volume) ? volume[0] : volume, 
      time: time,
      alert: alert
  };
};