export const getTime = (seconds: number) => {
  let output = String();
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  const secs = seconds - hours * 3600 - minutes * 60;
  if (hours > 0) {
    output += `${hours}:`;
  }
  output += `${minutes}:`;
  output += `${secs}`;
  return output;
};
