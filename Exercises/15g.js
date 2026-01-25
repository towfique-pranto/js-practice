export default function isWeekend(date) {
  const time = date.format("dddd");

  return time === "Saturday" || time === "Sunday";
}

