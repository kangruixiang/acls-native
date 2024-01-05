/** @type {import('./$types').PageLoad} */
import { Preferences } from '@capacitor/preferences'

export async function load() {

  const records = await Preferences.keys()
  return {
    records
  }
}