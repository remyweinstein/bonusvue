import { Preferences } from "@capacitor/preferences";

export const set = async (key, value) => {
  await Preferences.set({
    key,
    value: JSON.stringify(value),
  });
};

export const get = async (key) => {
  return await JSON.parse(Preferences.get({ key }));
};

export const removeName = async (key) => {
  await Preferences.remove({ key });
};
