const yana = (val, plus, notnull) => {
  const format = new Intl.NumberFormat("ru-RU").format(Math.trunc(val));
  if (notnull) {
    return "";
  }
  if (plus && val > 0) {
    return plus + format;
  }
  return format;
};

export default yana;