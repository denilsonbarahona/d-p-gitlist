const intl = new Intl.RelativeTimeFormat("en");
const options = { year: "numeric", month: "short", day: "numeric" };

export const getTimeFormat = (now, update) => {
  const millisecond = now - update;
  switch (true) {
    case millisecond / 1000 < 60:
      return intl.format(Math.floor(-1 * (millisecond / 1000)), "seconds");
    case millisecond / (1000 * 60) < 60:
      return intl.format(
        Math.floor(-1 * (millisecond / (1000 * 60))),
        "minutes"
      );
    case millisecond / (1000 * 60 * 60) < 24:
      return intl.format(
        Math.floor(-1 * (millisecond / (1000 * 60 * 60))),
        "hours"
      );
    case millisecond / (1000 * 60 * 60 * 24) < 30:
      return intl.format(
        Math.floor(-1 * (millisecond / (1000 * 60 * 60 * 24))),
        "days"
      );
    default:
      return `on ${new Intl.DateTimeFormat("en", options).format(update)}`;
  }
};
