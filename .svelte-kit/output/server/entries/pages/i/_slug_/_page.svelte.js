import { z as create_anchor, x as bind_props, y as pop, t as push } from "../../../../chunks/index2.js";
import { B as Button } from "../../../../chunks/Button.js";
import "clsx";
import "@capacitor/share";
import "turndown";
function _page($$payload, $$props) {
  push(true);
  let { data } = $$props;
  const anchor = create_anchor($$payload);
  const anchor_1 = create_anchor($$payload);
  const anchor_2 = create_anchor($$payload);
  $$payload.out += `<div class="flex flex-col gap-10 overflow-y-auto px-4 py-8"><div>${anchor}${data.record.value}${anchor}</div> <div class="flex flex-col gap-2">${anchor_1}`;
  Button($$payload, {
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `Copy`;
    }
  });
  $$payload.out += `${anchor_1} ${anchor_2}`;
  Button($$payload, {
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `Back to Previous Codes`;
    }
  });
  $$payload.out += `${anchor_2}</div></div>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
