export const getPhoneNumbers = (value) => {
  let phone = value.replace(/\D/g, "");

  if (phone) {
    phone = phone.replace(/^([^7])/, "7$1").replace(/^(\d{11})(.+)/, "$1");
  } else {
    phone = "7";
  }

  return phone;
};

const getValueByMask = (value, mask, full) => {
  const phone = value.match(/\d/g);
  let newPhone = mask;

  phone.map((e) => (newPhone = newPhone.replace(/_/, e)));

  if (!full) {
    newPhone = newPhone.replace(/\)_|-_|_/g, "");
  }

  return newPhone;
};

const setPhoneMask = (inp, mask) => {
  let phone = inp.value;

  if (phone === "") {
    phone = "7";
  }
  if (!mask) {
    mask = "+_(___)___-__-__";
  }

  phone = getPhoneNumbers(phone);

  inp.value = getValueByMask(phone, mask);
  inp.previousSibling.value = getValueByMask(phone, mask, true);
};

export const clickMask = (inp) => {
  inp.selectionStart = inp.value.length;
};

export const inputMask = (inp) => {
  setPhoneMask(inp);
  //C("#reset_button").el.disabled = phone.length === 16;
};
