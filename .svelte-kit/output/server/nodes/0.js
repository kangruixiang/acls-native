import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.JkiM8n5q.js","_app/immutable/chunks/0.k7bwmVTZ.js","_app/immutable/chunks/disclose-version.15-3dQtY.js","_app/immutable/chunks/runtime.w64avLmG.js","_app/immutable/chunks/render.fVPzZyBR.js","_app/immutable/chunks/platform.Kym0gPAi.js","_app/immutable/chunks/index.zUa3ZUDx.js","_app/immutable/chunks/preload-helper.0HuHagjb.js"];
export const stylesheets = ["_app/immutable/assets/0.bh5Obajk.css","_app/immutable/assets/platform.Tz7HYKiE.css"];
export const fonts = [];
