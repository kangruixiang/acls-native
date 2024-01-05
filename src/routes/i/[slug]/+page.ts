import { Preferences } from '@capacitor/preferences'

export async function load({ params }) {
  const key = params.slug
  const record = await Preferences.get({ key: key })

  return {
    record
  }
}
