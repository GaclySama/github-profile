export const getDaysAgo = (dataString: string): number => {
  const pastDate = new Date(dataString);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - pastDate.getTime();
  return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
};
