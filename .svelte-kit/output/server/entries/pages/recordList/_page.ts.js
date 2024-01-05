import { Preferences } from "@capacitor/preferences";
async function load() {
  const records = await Preferences.keys();
  return {
    records
  };
}
export {
  load
};
