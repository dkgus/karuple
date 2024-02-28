const colorGenerator = (length: number, color: string[]) => {
  const newBadgeColors = Array.from(
    { length },
    () => color[Math.floor(Math.random() * color.length)]
  );
  return newBadgeColors;
};
export { colorGenerator };
