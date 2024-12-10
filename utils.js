const nearestNextValidDate = (dateString) => {
  const date = new Date(dateString);
  if (isNaN(date)) throw new Error(`Invalid date: ${dateString}`);
  return date.toISOString().split("T")[0]; // Returns the date in "YYYY-MM-DD" format
};

const nearestPrevValidDate = (dateString) => {
  const date = new Date(dateString);
  if (isNaN(date)) throw new Error(`Invalid date: ${dateString}`);
  return date.toISOString().split("T")[0];
};
