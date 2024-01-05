import * as universal from '../entries/pages/recordList/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/recordList/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/recordList/+page.ts";
export const imports = ["_app/immutable/nodes/5.0KvErJVX.js","_app/immutable/chunks/index.1bWqMHnH.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/disclose-version.15-3dQtY.js","_app/immutable/chunks/runtime.w64avLmG.js","_app/immutable/chunks/render.fVPzZyBR.js","_app/immutable/chunks/index.zUa3ZUDx.js","_app/immutable/chunks/singletons.4BqFHK6D.js","_app/immutable/chunks/main-client.pYAxlQny.js","_app/immutable/chunks/utils.SAwglRJT.js","_app/immutable/chunks/navigation.BLoEt74k.js","_app/immutable/chunks/platform.Kym0gPAi.js"];
export const stylesheets = ["_app/immutable/assets/platform.Tz7HYKiE.css"];
export const fonts = [];
