import { E as rest_props, F as value_or_fallback, z as create_anchor, G as spread_attributes, A as slot, x as bind_props, y as pop, H as sanitize_props, t as push, N as ensure_array_like, B as escape_text } from "../../../chunks/index2.js";
import { c as cn } from "../../../chunks/utils.js";
import "clsx";
import { B as Button } from "../../../chunks/Button.js";
import "../../../chunks/platform.js";
import "@ionic/core";
import "@ionic/core/components/index.js";
import "@capacitor/preferences";
function Table($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  const anchor = create_anchor($$payload);
  $$payload.out += `<div class="w-full overflow-auto"><table${spread_attributes(
    [
      {
        "class": cn("w-full caption-bottom text-sm", className)
      },
      $$restProps
    ],
    true,
    false,
    ""
  )}>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</table></div>`;
  bind_props($$props, { class: className });
  pop();
}
function Table_body($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  const anchor = create_anchor($$payload);
  $$payload.out += `<tbody${spread_attributes(
    [
      {
        "class": cn("[&_tr:last-child]:border-0", className)
      },
      $$restProps
    ],
    true,
    false,
    ""
  )}>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</tbody>`;
  bind_props($$props, { class: className });
  pop();
}
function Table_cell($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  const anchor = create_anchor($$payload);
  $$payload.out += `<td${spread_attributes(
    [
      {
        "class": cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className)
      },
      $$restProps
    ],
    true,
    false,
    ""
  )}>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</td>`;
  bind_props($$props, { class: className });
  pop();
}
function Table_head($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  const anchor = create_anchor($$payload);
  $$payload.out += `<th${spread_attributes(
    [
      {
        "class": cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className)
      },
      $$restProps
    ],
    true,
    false,
    ""
  )}>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</th>`;
  bind_props($$props, { class: className });
  pop();
}
function Table_header($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  const anchor = create_anchor($$payload);
  $$payload.out += `<thead${spread_attributes(
    [
      { "class": cn("[&_tr]:border-b", className) },
      $$restProps
    ],
    true,
    false,
    ""
  )}>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</thead>`;
  bind_props($$props, { class: className });
  pop();
}
function Table_row($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  const anchor = create_anchor($$payload);
  $$payload.out += `<tr${spread_attributes(
    [
      {
        "class": cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className)
      },
      $$restProps
    ],
    true,
    false,
    ""
  )}>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</tr>`;
  bind_props($$props, { class: className });
  pop();
}
function _page($$payload, $$props) {
  push(true);
  let { data } = $$props;
  let records = data.records.keys.sort().map((oldDate) => {
    const newDate = new Date(parseInt(oldDate)).toLocaleString();
    return { oldDate, newDate };
  });
  const anchor = create_anchor($$payload);
  const anchor_12 = create_anchor($$payload);
  $$payload.out += `<div class="mx-2 my-2 flex flex-col justify-end gap-4 overflow-y-auto">${anchor}`;
  Table($$payload, {
    children: ($$payload2, $$slotProps) => {
      const anchor_1 = create_anchor($$payload2);
      const anchor_5 = create_anchor($$payload2);
      $$payload2.out += `${anchor_1}`;
      Table_header($$payload2, {
        children: ($$payload3, $$slotProps2) => {
          const anchor_2 = create_anchor($$payload3);
          $$payload3.out += `${anchor_2}`;
          Table_row($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              const anchor_3 = create_anchor($$payload4);
              const anchor_4 = create_anchor($$payload4);
              $$payload4.out += `${anchor_3}`;
              Table_head($$payload4, {
                class: "",
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `Date`;
                }
              });
              $$payload4.out += `${anchor_3} ${anchor_4}`;
              Table_head($$payload4, {
                class: "text-right",
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `Delete`;
                }
              });
              $$payload4.out += `${anchor_4}`;
            }
          });
          $$payload3.out += `${anchor_2}`;
        }
      });
      $$payload2.out += `${anchor_1} ${anchor_5}`;
      Table_body($$payload2, {
        children: ($$payload3, $$slotProps2) => {
          const anchor_6 = create_anchor($$payload3);
          const each_array = ensure_array_like(records);
          $$payload3.out += `${anchor_6}`;
          for (let $$index = 0; $$index < each_array.length; $$index++) {
            const item = each_array[$$index];
            const anchor_7 = create_anchor($$payload3);
            const anchor_8 = create_anchor($$payload3);
            $$payload3.out += `${anchor_7}${anchor_8}`;
            Table_row($$payload3, {
              children: ($$payload4, $$slotProps3) => {
                const anchor_9 = create_anchor($$payload4);
                const anchor_10 = create_anchor($$payload4);
                $$payload4.out += `${anchor_9}`;
                Table_cell($$payload4, {
                  class: "cursor-pointer font-medium",
                  children: ($$payload5, $$slotProps4) => {
                    $$payload5.out += `${escape_text(item.newDate)}`;
                  }
                });
                $$payload4.out += `${anchor_9} ${anchor_10}`;
                Table_cell($$payload4, {
                  class: "flex justify-end",
                  children: ($$payload5, $$slotProps4) => {
                    const anchor_11 = create_anchor($$payload5);
                    $$payload5.out += `${anchor_11}`;
                    Button($$payload5, {
                      children: ($$payload6, $$slotProps5) => {
                        $$payload6.out += `Delete`;
                      }
                    });
                    $$payload5.out += `${anchor_11}`;
                  }
                });
                $$payload4.out += `${anchor_10}`;
              }
            });
            $$payload3.out += `${anchor_8}${anchor_7}`;
          }
          $$payload3.out += `${anchor_6}`;
        }
      });
      $$payload2.out += `${anchor_5}`;
    }
  });
  $$payload.out += `${anchor} ${anchor_12}`;
  Button($$payload, {
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `Back to Codes`;
    }
  });
  $$payload.out += `${anchor_12}</div>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
