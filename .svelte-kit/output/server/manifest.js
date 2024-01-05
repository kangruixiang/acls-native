export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["concourse_3_bold.woff2","concourse_3_bold_italic.woff2","concourse_3_italic.woff2","concourse_3_regular.woff2","concourse_4_bold.woff2","concourse_4_regular.woff2","equity_a_bold.woff2","equity_a_bold_italic.woff2","equity_a_italic.woff2","equity_a_regular.woff2","favicon.png"]),
	mimeTypes: {".woff2":"font/woff2",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.qFc2DmPU.js","app":"_app/immutable/entry/app.b1w32KVN.js","imports":["_app/immutable/entry/start.qFc2DmPU.js","_app/immutable/chunks/main-client.pYAxlQny.js","_app/immutable/chunks/runtime.w64avLmG.js","_app/immutable/chunks/singletons.4BqFHK6D.js","_app/immutable/chunks/index.zUa3ZUDx.js","_app/immutable/entry/app.b1w32KVN.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/runtime.w64avLmG.js","_app/immutable/chunks/render.fVPzZyBR.js","_app/immutable/chunks/disclose-version.15-3dQtY.js","_app/immutable/chunks/main-client.pYAxlQny.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/i/[slug]",
				pattern: /^\/i\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/recordList",
				pattern: /^\/recordList\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
