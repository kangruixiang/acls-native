import { Preferences } from "@capacitor/preferences";
async function load({ params }) {
  const key = params.slug;
  const record = await Preferences.get({ key });
  return {
    record
  };
}
export {
  load
};
