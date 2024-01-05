import * as universal from '../entries/pages/recordList/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/recordList/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/recordList/+page.ts";
export const imports = ["_app/immutable/nodes/5.nRxQfqxl.js","_app/immutable/chunks/index.yoF47Mt2.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/disclose-version.15-3dQtY.js","_app/immutable/chunks/runtime.w64avLmG.js","_app/immutable/chunks/render.fVPzZyBR.js","_app/immutable/chunks/index.zUa3ZUDx.js","_app/immutable/chunks/singletons.JH8-oqSs.js","_app/immutable/chunks/main-client.pYAxlQny.js","_app/immutable/chunks/utils.-e70oDXM.js","_app/immutable/chunks/navigation.bnsU1CIS.js","_app/immutable/chunks/platform.Kym0gPAi.js"];
export const stylesheets = ["_app/immutable/assets/platform.Tz7HYKiE.css"];
export const fonts = [];
