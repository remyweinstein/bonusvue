export const yana = (val, plus, notnull) => {
  const format = new Intl.NumberFormat("ru-RU").format(Math.trunc(val));
  if (notnull) {
    return "";
  }
  if (plus && val > 0) {
    return plus + format;
  }
  return format;
};

export const promiseTimeout = async (fn, ms) => {
  await new Promise((resolve) => setTimeout(resolve, ms));
  return fn();
};
