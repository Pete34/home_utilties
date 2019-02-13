export interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}

// uses modulus.
// https://stackoverflow.com/questions/1322732/convert-seconds-to-hh-mm-ss-with-javascript
export const secondsToTime = function(totalSeconds: number): Time {
  // calculate hours.
  const hours = Math.floor(totalSeconds / 3600);
  // get remainder (if you divide by 3600) in seconds.
  totalSeconds = totalSeconds % 3600;
  // calculate minutes from remaining seconds
  const minutes = Math.floor(totalSeconds / 60);
  // get remainder (if you divide by 60) (will be left over seconds).
  const seconds = totalSeconds % 60;
  return { hours: hours, minutes: minutes, seconds: seconds };
};
