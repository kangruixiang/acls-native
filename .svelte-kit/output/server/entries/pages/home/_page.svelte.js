import { E as rest_props, F as value_or_fallback, C as store_get, z as create_anchor, A as slot, G as spread_attributes, D as unsubscribe_stores, x as bind_props, y as pop, H as sanitize_props, t as push, I as spread_props, J as attr, K as stringify, L as escape, M as store_set, N as ensure_array_like, B as escape_text, v as copy_payload, w as assign_payload } from "../../../chunks/index2.js";
import "@capacitor/preferences";
import { s as setCtx, g as getAttrs, a as setCtx$1, b as getAttrs$1, c as getCtx, B as Button } from "../../../chunks/Button.js";
import "clsx";
import { twMerge } from "tailwind-merge";
import { w as writable } from "../../../chunks/index.js";
import { c as cn } from "../../../chunks/utils.js";
import { c as createEventDispatcher } from "../../../chunks/main-client.js";
function createDispatcher() {
  const dispatch = createEventDispatcher();
  return (e) => {
    const { originalEvent } = e.detail;
    const { cancelable } = e;
    const type = originalEvent.type;
    const shouldContinue = dispatch(type, { originalEvent, currentTarget: originalEvent.currentTarget }, { cancelable });
    if (!shouldContinue) {
      e.preventDefault();
    }
  };
}
function Separator$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "orientation",
    "decorative",
    "asChild",
    "el",
    "$$props"
  ]);
  push(false);
  const $$store_subs = {};
  let builder;
  let orientation = value_or_fallback($$props["orientation"], "horizontal");
  let decorative = value_or_fallback($$props["decorative"], true);
  let asChild = value_or_fallback($$props["asChild"], false);
  let el = value_or_fallback($$props["el"], void 0);
  const { elements: { root }, updateOption } = setCtx({ orientation, decorative });
  const attrs = getAttrs("root");
  updateOption("orientation", orientation);
  updateOption("decorative", decorative);
  builder = store_get($$store_subs, "$root", root);
  Object.assign(builder, attrs);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  if (asChild) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `${anchor_1}`;
    slot(
      $$payload,
      $$props.children,
      {
        get builder() {
          return builder;
        }
      },
      null
    );
    $$payload.out += `${anchor_1}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    $$payload.out += `<div${spread_attributes([builder, $$restProps], true, false, "")}></div>`;
  }
  $$payload.out += `${anchor}`;
  unsubscribe_stores($$store_subs);
  bind_props($$props, { orientation, decorative, asChild, el });
  pop();
}
function Tabs($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "orientation",
    "activateOnFocus",
    "loop",
    "autoSet",
    "value",
    "onValueChange",
    "asChild",
    "el",
    "$$props"
  ]);
  push(false);
  const $$store_subs = {};
  let builder;
  let orientation = value_or_fallback($$props["orientation"], void 0);
  let activateOnFocus = value_or_fallback($$props["activateOnFocus"], void 0);
  let loop = value_or_fallback($$props["loop"], void 0);
  let autoSet = value_or_fallback($$props["autoSet"], void 0);
  let value = value_or_fallback($$props["value"], void 0);
  let onValueChange = value_or_fallback($$props["onValueChange"], void 0);
  let asChild = value_or_fallback($$props["asChild"], false);
  let el = value_or_fallback($$props["el"], void 0);
  const {
    elements: { root },
    states: { value: localValue },
    updateOption
  } = setCtx$1({
    orientation,
    activateOnFocus,
    loop,
    autoSet,
    defaultValue: value,
    onValueChange: ({ next }) => {
      if (value !== next) {
        onValueChange?.(next);
        value = next;
      }
      return next;
    }
  });
  const attrs = getAttrs$1("root");
  value !== void 0 && localValue.set(value);
  updateOption("orientation", orientation);
  updateOption("activateOnFocus", activateOnFocus);
  updateOption("loop", loop);
  updateOption("autoSet", autoSet);
  builder = store_get($$store_subs, "$root", root);
  Object.assign(builder, attrs);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  if (asChild) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `${anchor_1}`;
    slot(
      $$payload,
      $$props.children,
      {
        get builder() {
          return builder;
        },
        get value() {
          return store_get($$store_subs, "$localValue", localValue);
        }
      },
      null
    );
    $$payload.out += `${anchor_1}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `<div${spread_attributes([builder, $$restProps], true, false, "")}>${anchor_2}`;
    slot(
      $$payload,
      $$props.children,
      {
        get builder() {
          return builder;
        },
        get value() {
          return store_get($$store_subs, "$localValue", localValue);
        }
      },
      null
    );
    $$payload.out += `${anchor_2}</div>`;
  }
  $$payload.out += `${anchor}`;
  unsubscribe_stores($$store_subs);
  bind_props($$props, {
    orientation,
    activateOnFocus,
    loop,
    autoSet,
    value,
    onValueChange,
    asChild,
    el
  });
  pop();
}
function Tabs_content$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["value", "asChild", "el", "$$props"]);
  push(false);
  const $$store_subs = {};
  let builder;
  let value = $$props["value"];
  let asChild = value_or_fallback($$props["asChild"], false);
  let el = value_or_fallback($$props["el"], void 0);
  const { elements: { content } } = getCtx();
  const attrs = getAttrs$1("content");
  builder = store_get($$store_subs, "$content", content)(value);
  Object.assign(builder, attrs);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  if (asChild) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `${anchor_1}`;
    slot(
      $$payload,
      $$props.children,
      {
        get builder() {
          return builder;
        }
      },
      null
    );
    $$payload.out += `${anchor_1}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `<div${spread_attributes([builder, $$restProps], true, false, "")}>${anchor_2}`;
    slot(
      $$payload,
      $$props.children,
      {
        get builder() {
          return builder;
        }
      },
      null
    );
    $$payload.out += `${anchor_2}</div>`;
  }
  $$payload.out += `${anchor}`;
  unsubscribe_stores($$store_subs);
  bind_props($$props, { value, asChild, el });
  pop();
}
function Tabs_list$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["asChild", "el", "$$props"]);
  push(false);
  const $$store_subs = {};
  let builder;
  let asChild = value_or_fallback($$props["asChild"], false);
  let el = value_or_fallback($$props["el"], void 0);
  const { elements: { list } } = getCtx();
  const attrs = getAttrs$1("list");
  builder = store_get($$store_subs, "$list", list);
  Object.assign(builder, attrs);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  if (asChild) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `${anchor_1}`;
    slot(
      $$payload,
      $$props.children,
      {
        get builder() {
          return builder;
        }
      },
      null
    );
    $$payload.out += `${anchor_1}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `<div${spread_attributes([builder, $$restProps], true, false, "")}>${anchor_2}`;
    slot(
      $$payload,
      $$props.children,
      {
        get builder() {
          return builder;
        }
      },
      null
    );
    $$payload.out += `${anchor_2}</div>`;
  }
  $$payload.out += `${anchor}`;
  unsubscribe_stores($$store_subs);
  bind_props($$props, { asChild, el });
  pop();
}
function Tabs_trigger$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "value",
    "disabled",
    "asChild",
    "el",
    "$$props"
  ]);
  push(false);
  const $$store_subs = {};
  let builder;
  let value = $$props["value"];
  let disabled = value_or_fallback($$props["disabled"], void 0);
  let asChild = value_or_fallback($$props["asChild"], false);
  let el = value_or_fallback($$props["el"], void 0);
  const { elements: { trigger } } = getCtx();
  createDispatcher();
  const attrs = getAttrs$1("trigger");
  builder = store_get($$store_subs, "$trigger", trigger)({ value, disabled });
  Object.assign(builder, attrs);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  if (asChild) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `${anchor_1}`;
    slot(
      $$payload,
      $$props.children,
      {
        get builder() {
          return builder;
        }
      },
      null
    );
    $$payload.out += `${anchor_1}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `<button${spread_attributes([builder, { "type": "button" }, $$restProps], true, false, "")}>${anchor_2}`;
    slot(
      $$payload,
      $$props.children,
      {
        get builder() {
          return builder;
        }
      },
      null
    );
    $$payload.out += `${anchor_2}</button>`;
  }
  $$payload.out += `${anchor}`;
  unsubscribe_stores($$store_subs);
  bind_props($$props, { value, disabled, asChild, el });
  pop();
}
function Tabs_content($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "value", "$$props"]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  let value = $$props["value"];
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Tabs_content$1($$payload, spread_props([
    {
      class: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
      value
    },
    $$restProps,
    {
      children: ($$payload2, $$slotProps) => {
        const anchor_1 = create_anchor($$payload2);
        $$payload2.out += `${anchor_1}`;
        slot($$payload2, $$props.children, {}, null);
        $$payload2.out += `${anchor_1}`;
      }
    }
  ]));
  $$payload.out += `${anchor}`;
  bind_props($$props, { class: className, value });
  pop();
}
function Tabs_list($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Tabs_list$1($$payload, spread_props([
    {
      class: cn("inline-flex h-12 items-center justify-center rounded-lg bg-muted p-1 px-2 text-muted-foreground", className)
    },
    $$restProps,
    {
      children: ($$payload2, $$slotProps) => {
        const anchor_1 = create_anchor($$payload2);
        $$payload2.out += `${anchor_1}`;
        slot($$payload2, $$props.children, {}, null);
        $$payload2.out += `${anchor_1}`;
      }
    }
  ]));
  $$payload.out += `${anchor}`;
  bind_props($$props, { class: className });
  pop();
}
function Tabs_trigger($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "value", "$$props"]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  let value = $$props["value"];
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Tabs_trigger$1($$payload, spread_props([
    {
      class: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow", className),
      value
    },
    $$restProps,
    {
      children: ($$payload2, $$slotProps) => {
        const anchor_1 = create_anchor($$payload2);
        $$payload2.out += `${anchor_1}`;
        slot($$payload2, $$props.children, {}, null);
        $$payload2.out += `${anchor_1}`;
      }
    }
  ]));
  $$payload.out += `${anchor}`;
  bind_props($$props, { class: className, value });
  pop();
}
const Root = Tabs;
function MedRow($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  let minutes, seconds;
  let time = value_or_fallback($$props["time"], 120);
  let pause = value_or_fallback($$props["pause"], false);
  let rowType = value_or_fallback($$props["rowType"], "med");
  let displayTime = value_or_fallback($$props["displayTime"], true);
  let className = value_or_fallback($$props["class"], void 0);
  let localTime = time;
  let pulseIntervalID = null;
  let epiIntervalID = null;
  function epiCountDown(med) {
    if (med === "epi") {
      store_set(epi, [
        ...store_get($$store_subs, "$epi", epi),
        { name: "epinephrine", time: Date.now() }
      ]);
    }
    if (med === "amio") {
      store_set(amio, [
        ...store_get($$store_subs, "$amio", amio),
        { name: "amiodarone", time: Date.now() }
      ]);
    }
    if (med === "lido") {
      store_set(lido, [
        ...store_get($$store_subs, "$lido", lido),
        { name: "lidocaine", time: Date.now() }
      ]);
    }
    if (med === "shock") {
      store_set(shock, [
        ...store_get($$store_subs, "$shock", shock),
        { name: "cardioversion", time: Date.now() }
      ]);
      return;
    }
    if (epiIntervalID) {
      clearInterval(epiIntervalID);
    }
    localTime = time;
    epiIntervalID = setInterval(
      () => {
        localTime--;
      },
      1e3
    );
    pause = false;
  }
  function pulseCheckCountDown(pulse) {
    store_set(rhythms, [
      ...store_get($$store_subs, "$rhythms", rhythms),
      { name: pulse, time: Date.now() }
    ]);
    if (pulseIntervalID) {
      clearInterval(pulseIntervalID);
    }
    localTime = time;
    pulseIntervalID = setInterval(
      () => {
        localTime--;
      },
      1e3
    );
    pause = false;
  }
  function pauseIntervals() {
    if (epiIntervalID) {
      clearInterval(epiIntervalID);
    }
    if (pulseIntervalID) {
      clearInterval(pulseIntervalID);
    }
  }
  function restartIntervals() {
    pause = false;
    localTime = time;
    if (rowType == "pulse") {
      if (pulseIntervalID) {
        clearInterval(pulseIntervalID);
      }
      pulseIntervalID = setInterval(
        () => {
          localTime--;
        },
        1e3
      );
      return;
    }
    if (epiIntervalID) {
      clearInterval(epiIntervalID);
    }
    epiIntervalID = setInterval(
      () => {
        localTime--;
      },
      1e3
    );
  }
  restartIntervals();
  minutes = Math.floor(localTime / 60);
  minutes > 0 ? minutes = minutes : minutes = 0;
  seconds = Math.round((localTime / 60 - minutes) * 60);
  pause ? pauseIntervals() : "";
  const anchor = create_anchor($$payload);
  const anchor_1 = create_anchor($$payload);
  const anchor_3 = create_anchor($$payload);
  $$payload.out += `<div${attr("class", twMerge("flex w-full flex-col gap-2 px-4", className), false)}><div id="countdown_and_timer" class="flex w-full flex-col items-center gap-2"><div class="w-full text-left">${anchor}`;
  slot($$payload, $$props.$$slots?.["title"], {}, null);
  $$payload.out += `${anchor}</div> ${anchor_1}`;
  if (displayTime) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `<div id="countdown_and_refresh" class="mb-2 flex w-full items-center gap-4"><div${attr("class", `${stringify(localTime > 0 ? "bg-[#4a7845]" : "bg-[#784545]")} flex min-w-[80%] grow items-center whitespace-nowrap rounded-md px-8 py-4 text-5xl text-neutral-100`, false)}>${anchor_2}`;
    if (minutes) {
      $$payload.out += "<!--ssr:if:true-->";
      $$payload.out += `${escape(minutes)} m`;
    } else {
      $$payload.out += "<!--ssr:if:false-->";
    }
    $$payload.out += `${anchor_2} ${escape(seconds >= 10 ? seconds : "0" + seconds)} s</div> <div class="flex cursor-pointer items-center">Reset Timer</div></div>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
  }
  $$payload.out += `${anchor_1}</div> ${anchor_3}`;
  slot($$payload, $$props.children, { epiCountDown, pulseCheckCountDown }, null);
  $$payload.out += `${anchor_3}</div>`;
  unsubscribe_stores($$store_subs);
  bind_props($$props, {
    time,
    pause,
    rowType,
    displayTime,
    class: className
  });
  pop();
}
function HT($$payload, $$props) {
  push(false);
  let title = value_or_fallback($$props["title"], "");
  const anchor = create_anchor($$payload);
  $$payload.out += `<div class="flex items-center justify-between py-2">${escape(title)} ${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</div>`;
  bind_props($$props, { title });
  pop();
}
function Summary($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  let minutes, seconds, items, interventions;
  let intervalTime = value_or_fallback($$props["intervalTime"], 0);
  let codeStartTime = value_or_fallback($$props["codeStartTime"], Date.now());
  let summary = value_or_fallback($$props["summary"], "");
  const newDate = new Date(Date.now()).toLocaleString();
  function getInterventionTime(codeStartTime2, longInterventionTime) {
    const date = new Date(longInterventionTime);
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (second < 10) {
      second = "0" + second;
    }
    const time = `${hour}:${minute}:${second}`;
    return time;
  }
  minutes = Math.floor(intervalTime / 1e3 / 60);
  seconds = Math.floor((intervalTime / 1e3 / 60 - minutes) * 60);
  items = [
    {
      name: "epinephrine",
      value: store_get($$store_subs, "$epi", epi).length
    },
    {
      name: "shock",
      value: store_get($$store_subs, "$shock", shock).length
    },
    {
      name: "amiodarone",
      value: store_get($$store_subs, "$amio", amio).length
    },
    {
      name: "lidocaine",
      value: store_get($$store_subs, "$lido", lido).length
    },
    {
      name: "intravenous fluid",
      value: store_get($$store_subs, "$fluid", fluid).length
    },
    {
      name: "magnesium",
      value: store_get($$store_subs, "$mag", mag).length
    },
    {
      name: "calcium",
      value: store_get($$store_subs, "$ca", ca).length
    },
    {
      name: "TPA",
      value: store_get($$store_subs, "$tpa", tpa).length
    },
    {
      name: "needle decompression",
      value: store_get($$store_subs, "$needle", needle).length
    },
    {
      name: "dextrose",
      value: store_get($$store_subs, "$dextrose", dextrose).length
    },
    {
      name: "pericardiocentesis",
      value: store_get($$store_subs, "$pericard", pericard).length
    },
    {
      name: "bicarb",
      value: store_get($$store_subs, "$bicarb", bicarb).length
    }
  ];
  interventions = [
    ...store_get($$store_subs, "$amio", amio),
    ...store_get($$store_subs, "$epi", epi),
    ...store_get($$store_subs, "$lido", lido),
    ...store_get($$store_subs, "$fluid", fluid),
    ...store_get($$store_subs, "$airway", airway),
    ...store_get($$store_subs, "$mag", mag),
    ...store_get($$store_subs, "$ca", ca),
    ...store_get($$store_subs, "$tpa", tpa),
    ...store_get($$store_subs, "$needle", needle),
    ...store_get($$store_subs, "$shock", shock),
    ...store_get($$store_subs, "$bicarb", bicarb),
    ...store_get($$store_subs, "$dextrose", dextrose),
    ...store_get($$store_subs, "$pericard", pericard),
    ...store_get($$store_subs, "$rhythms", rhythms)
  ].sort((a, b) => a.time - b.time);
  const anchor = create_anchor($$payload);
  const each_array = ensure_array_like(items);
  const anchor_3 = create_anchor($$payload);
  const anchor_6 = create_anchor($$payload);
  const each_array_2 = ensure_array_like(interventions);
  $$payload.out += `<div class="flex flex-col gap-4 px-4 py-2"><div class="grow"><ul><li><strong>${escape_text(newDate)}</strong></li> <li><strong>Total code time: ${escape(minutes)} min ${escape(seconds)} sec</strong></li> <li>Airway obtained: ${escape(store_get($$store_subs, "$airway", airway).length != 0 ? `at ${getIntervalTime(codeStartTime)} min` : "no")}</li> ${anchor}`;
  for (let $$index = 0; $$index < each_array.length; $$index++) {
    const item = each_array[$$index];
    const anchor_1 = create_anchor($$payload);
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `${anchor_1}${anchor_2}`;
    if (item.value != 0) {
      $$payload.out += "<!--ssr:if:true-->";
      $$payload.out += `<li>${escape(item.value)}x ${escape(item.name)}</li>`;
    } else {
      $$payload.out += "<!--ssr:if:false-->";
    }
    $$payload.out += `${anchor_2}${anchor_1}`;
  }
  $$payload.out += `${anchor} ${anchor_3}`;
  if (store_get($$store_subs, "$rhythms", rhythms).length != 0) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_4 = create_anchor($$payload);
    const each_array_1 = ensure_array_like(store_get($$store_subs, "$rhythms", rhythms));
    $$payload.out += `<li><strong>Rhythms:</strong> <ul>${anchor_4}`;
    for (let $$index_1 = 0; $$index_1 < each_array_1.length; $$index_1++) {
      const rhythm = each_array_1[$$index_1];
      const anchor_5 = create_anchor($$payload);
      $$payload.out += `${anchor_5}<li>${escape(rhythm.name)}: at ${escape(getIntervalTime(codeStartTime))} min</li>${anchor_5}`;
    }
    $$payload.out += `${anchor_4}</ul></li>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
  }
  $$payload.out += `${anchor_3}</ul> <div class="mt-2"><strong>Details</strong> <ul><li></li> <li>${escape(getInterventionTime(codeStartTime, codeStartTime))}: code started</li> ${anchor_6}`;
  for (let $$index_2 = 0; $$index_2 < each_array_2.length; $$index_2++) {
    const intervention = each_array_2[$$index_2];
    const anchor_7 = create_anchor($$payload);
    $$payload.out += `${anchor_7}<li>${escape(getInterventionTime(codeStartTime, intervention.time))}: ${escape(intervention.name)}</li>${anchor_7}`;
  }
  $$payload.out += `${anchor_6}</ul></div></div></div>`;
  unsubscribe_stores($$store_subs);
  bind_props($$props, { intervalTime, codeStartTime, summary });
  pop();
}
function Separator($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "orientation",
    "decorative",
    "$$props"
  ]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  let orientation = value_or_fallback($$props["orientation"], "horizontal");
  let decorative = value_or_fallback($$props["decorative"], void 0);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Separator$1($$payload, spread_props([
    {
      class: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
      orientation,
      decorative
    },
    $$restProps
  ]));
  $$payload.out += `${anchor}`;
  bind_props($$props, { class: className, orientation, decorative });
  pop();
}
function Initial($$payload, $$props) {
  push(true);
  let { codeStartTime, pause } = $$props;
  const codeTimes = [
    { name: "Now", time: 0 },
    { name: "1 min ago", time: 1 },
    { name: "2 min ago", time: 2 },
    { name: "3 min ago", time: 3 },
    { name: "5 min ago", time: 5 },
    { name: "10 min ago", time: 10 },
    { name: "15 min ago", time: 15 },
    { name: "20 min ago", time: 20 },
    { name: "30 min ago", time: 30 }
  ];
  const anchor = create_anchor($$payload);
  const each_array = ensure_array_like(codeTimes);
  const anchor_3 = create_anchor($$payload);
  const anchor_4 = create_anchor($$payload);
  $$payload.out += `<div><div class="mb-2 mt-20 px-4">Code Started</div> <div class="grid grid-cols-1 justify-evenly gap-2 px-4">${anchor}`;
  for (let $$index = 0; $$index < each_array.length; $$index++) {
    const codeTime = each_array[$$index];
    const anchor_1 = create_anchor($$payload);
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `${anchor_1}${anchor_2}`;
    Button($$payload, {
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `${escape_text(codeTime.name)}`;
      }
    });
    $$payload.out += `${anchor_2}${anchor_1}`;
  }
  $$payload.out += `${anchor} ${anchor_3}`;
  Separator($$payload, {});
  $$payload.out += `${anchor_3} ${anchor_4}`;
  Button($$payload, {
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `Previous Codes`;
    }
  });
  $$payload.out += `${anchor_4}</div></div>`;
  bind_props($$props, { codeStartTime, pause });
  pop();
}
function HTCard($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  const HandT = [
    {
      cause: "Hypoxia",
      treatment: "Advanced Airway",
      add: () => {
        store_set(airway, [
          ...store_get($$store_subs, "$airway", airway),
          { name: "airway obtained", time: Date.now() }
        ]);
      }
    },
    {
      cause: "Hypovolemia",
      treatment: "Fluid",
      add: () => {
        store_set(fluid, [
          ...store_get($$store_subs, "$fluid", fluid),
          { name: "fluid", time: Date.now() }
        ]);
      }
    },
    {
      cause: "Hydrogen Ion (acidosis)",
      treatment: "Bicarb",
      add: () => {
        store_set(bicarb, [
          ...store_get($$store_subs, "$bicarb", bicarb),
          { name: "bicarb", time: Date.now() }
        ]);
      }
    },
    {
      cause: "Hypoglycemia",
      treatment: "Dextrose",
      add: () => {
        store_set(dextrose, [
          ...store_get($$store_subs, "$dextrose", dextrose),
          { name: "dextrose", time: Date.now() }
        ]);
      }
    },
    {
      cause: "Hypokalemia",
      treatment: "Magnesium",
      add: () => {
        store_set(mag, [
          ...store_get($$store_subs, "$mag", mag),
          { name: "magnesium", time: Date.now() }
        ]);
      }
    },
    {
      cause: "Hyperkalemia",
      treatment: "Calcium",
      add: () => {
        store_set(ca, [
          ...store_get($$store_subs, "$ca", ca),
          { name: "calcium", time: Date.now() }
        ]);
      }
    },
    { cause: "Hypothermia", treatment: "" },
    {
      cause: "Thrombosis (PE)",
      treatment: "TPA",
      add: () => {
        store_set(tpa, [
          ...store_get($$store_subs, "$tpa", tpa),
          { name: "tpa", time: Date.now() }
        ]);
      }
    },
    { cause: "Thrombosis (MI)", treatment: "" },
    {
      cause: "Tension Pneumothorax",
      treatment: "Needle Decompress",
      add: () => {
        store_set(needle, [
          ...store_get($$store_subs, "$needle", needle),
          {
            name: "needle decompression",
            time: Date.now()
          }
        ]);
      }
    },
    {
      cause: "Tamponade",
      treatment: "Pericardiocentesis",
      add: () => {
        store_set(pericard, [
          ...store_get($$store_subs, "$pericard", pericard),
          {
            name: "pericardiocentesis",
            time: Date.now()
          }
        ]);
      }
    },
    { cause: "Toxins", treatment: "" }
  ];
  const anchor = create_anchor($$payload);
  const each_array = ensure_array_like(HandT);
  $$payload.out += `<div class="px-4"><div class="flex flex-col">${anchor}`;
  for (let $$index = 0; $$index < each_array.length; $$index++) {
    const item = each_array[$$index];
    const anchor_1 = create_anchor($$payload);
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `${anchor_1}${anchor_2}`;
    HT($$payload, {
      title: item.cause,
      children: ($$payload2, $$slotProps) => {
        const anchor_3 = create_anchor($$payload2);
        $$payload2.out += `${anchor_3}`;
        if (item.treatment) {
          $$payload2.out += "<!--ssr:if:true-->";
          const anchor_4 = create_anchor($$payload2);
          $$payload2.out += `${anchor_4}`;
          Button($$payload2, {
            children: ($$payload3, $$slotProps2) => {
              $$payload3.out += `${escape_text(item.treatment)}`;
            }
          });
          $$payload2.out += `${anchor_4}`;
        } else {
          $$payload2.out += "<!--ssr:if:false-->";
        }
        $$payload2.out += `${anchor_3}`;
      }
    });
    $$payload.out += `${anchor_2}${anchor_1}`;
  }
  $$payload.out += `${anchor}</div></div>`;
  unsubscribe_stores($$store_subs);
  pop();
}
function Countdown($$payload, $$props) {
  push(false);
  let minutes = $$props["minutes"];
  let seconds = $$props["seconds"];
  let className = value_or_fallback($$props["class"], void 0);
  $$payload.out += `<div${attr("class", twMerge("mx-4 flex flex-col gap-2", className), false)}><h2 class="text-neutral-100">Total Code Time</h2> <div class="min-w-[80%] rounded-md bg-white px-4 py-8 text-center text-5xl"><strong>${escape(minutes)} min ${escape(seconds >= 10 ? seconds : "0" + seconds)} sec</strong></div></div>`;
  bind_props($$props, { minutes, seconds, class: className });
  pop();
}
const amio = writable([]);
const lido = writable([]);
const epi = writable([]);
const fluid = writable([]);
const airway = writable([]);
const bicarb = writable([]);
const dextrose = writable([]);
const mag = writable([]);
const ca = writable([]);
const tpa = writable([]);
const needle = writable([]);
const pericard = writable([]);
const shock = writable([]);
const rhythms = writable([]);
function getIntervalTime(startTime) {
  const intervalTime = Math.floor((Date.now() - startTime) / 1e3 / 60);
  return intervalTime;
}
function _page($$payload, $$props) {
  push(true);
  const $$store_subs = {};
  let codeStartTime = 0;
  let pause = true;
  let intervalTime = 0;
  let summary = "";
  let minutes = Math.floor(intervalTime / 1e3 / 60);
  let seconds = Math.floor((intervalTime / 1e3 / 60 - minutes) * 60);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const anchor = create_anchor($$payload2);
    const anchor_2 = create_anchor($$payload2);
    $$payload2.out += `<div class="flex flex-col gap-4 overflow-y-auto pt-8">${anchor}`;
    if (!codeStartTime) {
      $$payload2.out += "<!--ssr:if:true-->";
      const anchor_1 = create_anchor($$payload2);
      $$payload2.out += `${anchor_1}`;
      Initial($$payload2, {
        get codeStartTime() {
          return codeStartTime;
        },
        set codeStartTime($$value) {
          codeStartTime = $$value;
          $$settled = false;
        },
        get pause() {
          return pause;
        },
        set pause($$value) {
          pause = $$value;
          $$settled = false;
        }
      });
      $$payload2.out += `${anchor_1}`;
    } else {
      $$payload2.out += "<!--ssr:if:false-->";
    }
    $$payload2.out += `${anchor} ${anchor_2}`;
    if (codeStartTime) {
      $$payload2.out += "<!--ssr:if:true-->";
      const anchor_3 = create_anchor($$payload2);
      $$payload2.out += `${anchor_3}`;
      Root($$payload2, {
        value: "main",
        class: "flex w-full flex-col items-center",
        children: ($$payload3, $$slotProps) => {
          const anchor_4 = create_anchor($$payload3);
          const anchor_9 = create_anchor($$payload3);
          const anchor_22 = create_anchor($$payload3);
          const anchor_24 = create_anchor($$payload3);
          const anchor_26 = create_anchor($$payload3);
          $$payload3.out += `${anchor_4}`;
          Tabs_list($$payload3, {
            children: ($$payload4, $$slotProps2) => {
              const anchor_5 = create_anchor($$payload4);
              const anchor_6 = create_anchor($$payload4);
              const anchor_7 = create_anchor($$payload4);
              const anchor_8 = create_anchor($$payload4);
              $$payload4.out += `${anchor_5}`;
              Tabs_trigger($$payload4, {
                value: "main",
                children: ($$payload5, $$slotProps3) => {
                  $$payload5.out += `Main`;
                }
              });
              $$payload4.out += `${anchor_5} ${anchor_6}`;
              Tabs_trigger($$payload4, {
                value: "HNT",
                children: ($$payload5, $$slotProps3) => {
                  $$payload5.out += `Hs and Ts`;
                }
              });
              $$payload4.out += `${anchor_6} ${anchor_7}`;
              Tabs_trigger($$payload4, {
                value: "summary",
                children: ($$payload5, $$slotProps3) => {
                  $$payload5.out += `Summary`;
                }
              });
              $$payload4.out += `${anchor_7} ${anchor_8}`;
              Tabs_trigger($$payload4, {
                value: "end",
                children: ($$payload5, $$slotProps3) => {
                  $$payload5.out += `End`;
                }
              });
              $$payload4.out += `${anchor_8}`;
            }
          });
          $$payload3.out += `${anchor_4} ${anchor_9}`;
          Tabs_content($$payload3, {
            value: "main",
            class: "w-full",
            children: ($$payload4, $$slotProps2) => {
              const anchor_10 = create_anchor($$payload4);
              const anchor_11 = create_anchor($$payload4);
              const anchor_16 = create_anchor($$payload4);
              const anchor_20 = create_anchor($$payload4);
              $$payload4.out += `<div class="flex flex-col gap-4"><div class="pt-8">${anchor_10}`;
              Countdown($$payload4, { minutes, seconds, class: "text-foreground" });
              $$payload4.out += `${anchor_10}</div> <div>${anchor_11}`;
              MedRow($$payload4, {
                time: 120,
                get pause() {
                  return pause;
                },
                set pause($$value) {
                  pause = $$value;
                  $$settled = false;
                },
                rowType: "pulse",
                class: "bg-[#1f2e4f] pb-6 pt-4",
                children: ($$payload5, $$slotProps3) => {
                  $$slotProps3.pulseCheckCountDown;
                  const anchor_12 = create_anchor($$payload5);
                  const anchor_13 = create_anchor($$payload5);
                  const anchor_14 = create_anchor($$payload5);
                  const anchor_15 = create_anchor($$payload5);
                  $$payload5.out += `<div class="flex justify-between gap-2">${anchor_12}`;
                  Button($$payload5, {
                    grow: true,
                    children: ($$payload6, $$slotProps4) => {
                      $$payload6.out += `PEA`;
                    }
                  });
                  $$payload5.out += `${anchor_12} ${anchor_13}`;
                  Button($$payload5, {
                    grow: true,
                    children: ($$payload6, $$slotProps4) => {
                      $$payload6.out += `Asystole`;
                    }
                  });
                  $$payload5.out += `${anchor_13} ${anchor_14}`;
                  Button($$payload5, {
                    grow: true,
                    children: ($$payload6, $$slotProps4) => {
                      $$payload6.out += `VT/VF`;
                    }
                  });
                  $$payload5.out += `${anchor_14} ${anchor_15}`;
                  Button($$payload5, {
                    grow: true,
                    children: ($$payload6, $$slotProps4) => {
                      $$payload6.out += `ROSC`;
                    }
                  });
                  $$payload5.out += `${anchor_15}</div>`;
                },
                $$slots: {
                  "title": ($$payload5, $$slotProps3) => {
                    {
                      $$payload5.out += `Next Pulse Check`;
                    }
                  }
                }
              });
              $$payload4.out += `${anchor_11} ${anchor_16}`;
              MedRow($$payload4, {
                time: 180,
                get pause() {
                  return pause;
                },
                set pause($$value) {
                  pause = $$value;
                  $$settled = false;
                },
                class: "bg-[#324572] pt-4 ",
                children: ($$payload5, $$slotProps3) => {
                  $$slotProps3.epiCountDown;
                  const anchor_17 = create_anchor($$payload5);
                  const anchor_18 = create_anchor($$payload5);
                  const anchor_19 = create_anchor($$payload5);
                  $$payload5.out += `${anchor_17}`;
                  Button($$payload5, {
                    children: ($$payload6, $$slotProps4) => {
                      $$payload6.out += `Epinephrine`;
                    }
                  });
                  $$payload5.out += `${anchor_17} <div class="flex gap-2">${anchor_18}`;
                  Button($$payload5, {
                    grow: true,
                    children: ($$payload6, $$slotProps4) => {
                      $$payload6.out += `Amiodarone`;
                    }
                  });
                  $$payload5.out += `${anchor_18} ${anchor_19}`;
                  Button($$payload5, {
                    grow: true,
                    children: ($$payload6, $$slotProps4) => {
                      $$payload6.out += `Lidocaine`;
                    }
                  });
                  $$payload5.out += `${anchor_19}</div>`;
                },
                $$slots: {
                  "title": ($$payload5, $$slotProps3) => {
                    {
                      $$payload5.out += `Drugs and Shocks`;
                    }
                  }
                }
              });
              $$payload4.out += `${anchor_16} ${anchor_20}`;
              MedRow($$payload4, {
                time: 180,
                displayTime: false,
                get pause() {
                  return pause;
                },
                set pause($$value) {
                  pause = $$value;
                  $$settled = false;
                },
                class: "bg-[#324572] pb-12",
                children: ($$payload5, $$slotProps3) => {
                  $$slotProps3.epiCountDown;
                  const anchor_21 = create_anchor($$payload5);
                  $$payload5.out += `<div class="flex w-full">${anchor_21}`;
                  Button($$payload5, {
                    grow: true,
                    color: "yellow",
                    children: ($$payload6, $$slotProps4) => {
                      $$payload6.out += `Shock`;
                    }
                  });
                  $$payload5.out += `${anchor_21}</div>`;
                }
              });
              $$payload4.out += `${anchor_20}</div></div>`;
            }
          });
          $$payload3.out += `${anchor_9} ${anchor_22}`;
          Tabs_content($$payload3, {
            value: "HNT",
            class: "w-full",
            children: ($$payload4, $$slotProps2) => {
              const anchor_23 = create_anchor($$payload4);
              $$payload4.out += `${anchor_23}`;
              HTCard($$payload4);
              $$payload4.out += `${anchor_23}`;
            }
          });
          $$payload3.out += `${anchor_22} ${anchor_24}`;
          Tabs_content($$payload3, {
            value: "summary",
            class: "w-full",
            children: ($$payload4, $$slotProps2) => {
              const anchor_25 = create_anchor($$payload4);
              $$payload4.out += `${anchor_25}`;
              Summary($$payload4, {
                intervalTime,
                codeStartTime,
                get summary() {
                  return summary;
                },
                set summary($$value) {
                  summary = $$value;
                  $$settled = false;
                }
              });
              $$payload4.out += `${anchor_25}`;
            }
          });
          $$payload3.out += `${anchor_24} ${anchor_26}`;
          Tabs_content($$payload3, {
            value: "end",
            class: "w-full",
            children: ($$payload4, $$slotProps2) => {
              const anchor_27 = create_anchor($$payload4);
              const anchor_29 = create_anchor($$payload4);
              $$payload4.out += `<div class="mt-10 flex w-full flex-col gap-4 px-4">${anchor_27}`;
              Button($$payload4, {
                grow: true,
                color: "gray",
                children: ($$payload5, $$slotProps3) => {
                  const anchor_28 = create_anchor($$payload5);
                  $$payload5.out += `${anchor_28}`;
                  if (pause) {
                    $$payload5.out += "<!--ssr:if:true-->";
                    $$payload5.out += `Restart`;
                  } else {
                    $$payload5.out += "<!--ssr:if:false-->";
                    $$payload5.out += `Pause`;
                  }
                  $$payload5.out += `${anchor_28} Code`;
                }
              });
              $$payload4.out += `${anchor_27} ${anchor_29}`;
              Button($$payload4, {
                grow: true,
                color: "red",
                children: ($$payload5, $$slotProps3) => {
                  $$payload5.out += `End Code`;
                }
              });
              $$payload4.out += `${anchor_29}</div>`;
            }
          });
          $$payload3.out += `${anchor_26}`;
        }
      });
      $$payload2.out += `${anchor_3}`;
    } else {
      $$payload2.out += "<!--ssr:if:false-->";
    }
    $$payload2.out += `${anchor_2}</div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
