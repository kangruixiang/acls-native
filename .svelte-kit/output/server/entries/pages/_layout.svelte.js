import { z as create_anchor, A as slot, y as pop, t as push } from "../../chunks/index2.js";
import "../../chunks/platform.js";
import "@ionic/core";
import { initialize } from "@ionic/core/components/index.js";
import "ionic-svelte/components/all.js";
const setupIonicBase = async (config) => {
  initialize(config);
  if (typeof document !== "undefined") {
    document.documentElement.classList.add("ion-ce");
  }
};
function _layout($$payload, $$props) {
  push(false);
  setupIonicBase();
  const anchor = create_anchor($$payload);
  $$payload.out += `<ion-app>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</ion-app>`;
  pop();
}
export {
  _layout as default
};
