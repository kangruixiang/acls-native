import { s as setContext, g as getContext } from "./main-client.js";
import { d as derived, w as writable, r as readable, g as get_store_value } from "./index.js";
import { F as value_or_fallback, z as create_anchor, J as attr, A as slot, x as bind_props, y as pop, t as push } from "./index2.js";
import { twMerge } from "tailwind-merge";
function next(array, index, loop = true) {
  if (index === array.length - 1) {
    return loop ? array[0] : array[index];
  }
  return array[index + 1];
}
function prev(array, currentIndex, loop = true) {
  if (currentIndex <= 0) {
    return loop ? array[array.length - 1] : array[0];
  }
  return array[currentIndex - 1];
}
function last(array) {
  return array[array.length - 1];
}
function styleToString$1(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
function disabledAttr(disabled) {
  return disabled ? true : void 0;
}
({
  type: "hidden",
  "aria-hidden": true,
  hidden: true,
  tabIndex: -1,
  style: styleToString$1({
    position: "absolute",
    opacity: 0,
    "pointer-events": "none",
    margin: 0,
    transform: "translateX(-100%)"
  })
});
function lightable(value) {
  function subscribe(run) {
    run(value);
    return () => {
    };
  }
  return { subscribe };
}
const hiddenAction = (obj) => {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      return Reflect.get(target, prop, receiver);
    },
    ownKeys(target) {
      return Reflect.ownKeys(target).filter((key) => key !== "action");
    }
  });
};
const isFunctionWithParams = (fn) => {
  return typeof fn === "function";
};
function builder(name2, args) {
  const { stores, action, returned } = args ?? {};
  const derivedStore = (() => {
    if (stores && returned) {
      return derived(stores, (values) => {
        const result = returned(values);
        if (isFunctionWithParams(result)) {
          const fn = (...args2) => {
            return hiddenAction({
              ...result(...args2),
              [`data-melt-${name2}`]: "",
              action: action ?? noop
            });
          };
          fn.action = action ?? noop;
          return fn;
        }
        return hiddenAction({
          ...result,
          [`data-melt-${name2}`]: "",
          action: action ?? noop
        });
      });
    } else {
      const returnedFn = returned;
      const result = returnedFn?.();
      if (isFunctionWithParams(result)) {
        const resultFn = (...args2) => {
          return hiddenAction({
            ...result(...args2),
            [`data-melt-${name2}`]: "",
            action: action ?? noop
          });
        };
        resultFn.action = action ?? noop;
        return lightable(resultFn);
      }
      return lightable(hiddenAction({
        ...result,
        [`data-melt-${name2}`]: "",
        action: action ?? noop
      }));
    }
  })();
  const actionFn = action ?? (() => {
  });
  actionFn.subscribe = derivedStore.subscribe;
  return actionFn;
}
function createElHelpers(prefix) {
  const name2 = (part) => part ? `${prefix}-${part}` : prefix;
  const attribute = (part) => `data-melt-${prefix}${part ? `-${part}` : ""}`;
  const selector2 = (part) => `[data-melt-${prefix}${part ? `-${part}` : ""}]`;
  const getEl = (part) => document.querySelector(selector2(part));
  return {
    name: name2,
    attribute,
    selector: selector2,
    getEl
  };
}
const isBrowser = typeof document !== "undefined";
function isHTMLElement(element) {
  return element instanceof HTMLElement;
}
function executeCallbacks(...callbacks) {
  return (...args) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
function noop() {
}
function addEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  events.forEach((_event) => target.addEventListener(_event, handler, options));
  return () => {
    events.forEach((_event) => target.removeEventListener(_event, handler, options));
  };
}
function addMeltEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  if (typeof handler === "function") {
    const handlerWithMelt = withMelt((_event) => handler(_event));
    events.forEach((_event) => target.addEventListener(_event, handlerWithMelt, options));
    return () => {
      events.forEach((_event) => target.removeEventListener(_event, handlerWithMelt, options));
    };
  }
  return () => noop();
}
function dispatchMeltEvent(originalEvent) {
  const node = originalEvent.currentTarget;
  if (!isHTMLElement(node))
    return null;
  const customMeltEvent = new CustomEvent(`m-${originalEvent.type}`, {
    detail: {
      originalEvent
    },
    cancelable: true
  });
  node.dispatchEvent(customMeltEvent);
  return customMeltEvent;
}
function withMelt(handler) {
  return (event) => {
    const customEvent = dispatchMeltEvent(event);
    if (customEvent?.defaultPrevented)
      return;
    return handler(event);
  };
}
function getElemDirection(elem) {
  const style = window.getComputedStyle(elem);
  const direction = style.getPropertyValue("direction");
  return direction;
}
function omit(obj, ...keys) {
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
const overridable = (store, onChange) => {
  const update = (updater, sideEffect) => {
    store.update((curr) => {
      const next2 = updater(curr);
      let res = next2;
      if (onChange) {
        res = onChange({ curr, next: next2 });
      }
      sideEffect?.(res);
      return res;
    });
  };
  const set = (curr) => {
    update(() => curr);
  };
  return {
    ...store,
    update,
    set
  };
};
const kbd = {
  ALT: "Alt",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  BACKSPACE: "Backspace",
  CAPS_LOCK: "CapsLock",
  CONTROL: "Control",
  DELETE: "Delete",
  END: "End",
  ENTER: "Enter",
  ESCAPE: "Escape",
  F1: "F1",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  HOME: "Home",
  META: "Meta",
  PAGE_DOWN: "PageDown",
  PAGE_UP: "PageUp",
  SHIFT: "Shift",
  SPACE: " ",
  TAB: "Tab",
  CTRL: "Control",
  ASTERISK: "*",
  A: "a",
  P: "p"
};
const getNextKey = (dir = "ltr", orientation = "horizontal") => {
  return {
    horizontal: dir === "rtl" ? kbd.ARROW_LEFT : kbd.ARROW_RIGHT,
    vertical: kbd.ARROW_DOWN
  }[orientation];
};
const getPrevKey = (dir = "ltr", orientation = "horizontal") => {
  return {
    horizontal: dir === "rtl" ? kbd.ARROW_RIGHT : kbd.ARROW_LEFT,
    vertical: kbd.ARROW_UP
  }[orientation];
};
const getDirectionalKeys = (dir = "ltr", orientation = "horizontal") => {
  return {
    nextKey: getNextKey(dir, orientation),
    prevKey: getPrevKey(dir, orientation)
  };
};
function toWritableStores(properties) {
  const result = {};
  Object.keys(properties).forEach((key) => {
    const propertyKey = key;
    const value = properties[propertyKey];
    result[propertyKey] = writable(value);
  });
  return result;
}
readable(void 0, (set) => {
  function clicked(event) {
    set(event);
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "pointerup", clicked, {
    passive: false,
    capture: true
  });
  return unsubscribe;
});
readable(void 0, (set) => {
  function keydown(event) {
    if (event && event.key === kbd.ESCAPE) {
      set(event);
    }
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "keydown", keydown, {
    passive: false
  });
  return unsubscribe;
});
const defaults$1 = {
  orientation: "horizontal",
  decorative: false
};
const createSeparator = (props) => {
  const withDefaults = { ...defaults$1, ...props };
  const options = toWritableStores(withDefaults);
  const { orientation, decorative } = options;
  const root = builder("separator", {
    stores: [orientation, decorative],
    returned: ([$orientation, $decorative]) => {
      const ariaOrientation = $orientation === "vertical" ? $orientation : void 0;
      return {
        role: $decorative ? "none" : "separator",
        "aria-orientation": ariaOrientation,
        "aria-hidden": $decorative,
        "data-orientation": $orientation
      };
    }
  });
  return {
    elements: {
      root
    },
    options
  };
};
const defaults = {
  orientation: "horizontal",
  activateOnFocus: true,
  loop: true,
  autoSet: true
};
const { name, selector } = createElHelpers("tabs");
function createTabs(props) {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(omit(withDefaults, "defaultValue", "value", "onValueChange", "autoSet"));
  const { orientation, activateOnFocus, loop } = options;
  const valueWritable = withDefaults.value ?? writable(withDefaults.defaultValue);
  const value = overridable(valueWritable, withDefaults?.onValueChange);
  let ssrValue = withDefaults.defaultValue ?? get_store_value(value);
  const root = builder(name(), {
    stores: orientation,
    returned: ($orientation) => {
      return {
        "data-orientation": $orientation
      };
    }
  });
  const list = builder(name("list"), {
    stores: orientation,
    returned: ($orientation) => {
      return {
        role: "tablist",
        "aria-orientation": $orientation,
        "data-orientation": $orientation
      };
    }
  });
  const parseTriggerProps = (props2) => {
    if (typeof props2 === "string") {
      return { value: props2 };
    } else {
      return props2;
    }
  };
  const trigger = builder(name("trigger"), {
    stores: [value, orientation],
    returned: ([$value, $orientation]) => {
      return (props2) => {
        const { value: tabValue, disabled } = parseTriggerProps(props2);
        if (!$value && !ssrValue && withDefaults.autoSet) {
          ssrValue = tabValue;
          $value = tabValue;
          value.set(tabValue);
        }
        const sourceOfTruth = isBrowser ? $value : ssrValue;
        const isActive = sourceOfTruth === tabValue;
        return {
          type: "button",
          role: "tab",
          "data-state": isActive ? "active" : "inactive",
          tabindex: isActive ? 0 : -1,
          "data-value": tabValue,
          "data-orientation": $orientation,
          "data-disabled": disabledAttr(disabled),
          disabled: disabledAttr(disabled)
        };
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "focus", () => {
        const disabled = node.dataset.disabled === "true";
        const tabValue = node.dataset.value;
        if (get_store_value(activateOnFocus) && !disabled && tabValue !== void 0) {
          value.set(tabValue);
        }
      }), addMeltEventListener(node, "click", (e) => {
        node.focus();
        e.preventDefault();
        const disabled = node.dataset.disabled === "true";
        if (disabled)
          return;
        const tabValue = node.dataset.value;
        node.focus();
        if (tabValue !== void 0) {
          value.set(tabValue);
        }
      }), addMeltEventListener(node, "keydown", (e) => {
        const tabValue = node.dataset.value;
        if (!tabValue)
          return;
        const el = e.currentTarget;
        if (!isHTMLElement(el))
          return;
        const rootEl = el.closest(selector());
        if (!isHTMLElement(rootEl))
          return;
        const $loop = get_store_value(loop);
        const triggers = Array.from(rootEl.querySelectorAll('[role="tab"]')).filter((trigger2) => isHTMLElement(trigger2));
        const enabledTriggers = triggers.filter((el2) => !el2.hasAttribute("data-disabled"));
        const triggerIdx = enabledTriggers.findIndex((el2) => el2 === e.target);
        const dir = getElemDirection(rootEl);
        const { nextKey, prevKey } = getDirectionalKeys(dir, get_store_value(orientation));
        if (e.key === nextKey) {
          e.preventDefault();
          const nextEl = next(enabledTriggers, triggerIdx, $loop);
          nextEl.focus();
        } else if (e.key === prevKey) {
          e.preventDefault();
          const prevEl = prev(enabledTriggers, triggerIdx, $loop);
          prevEl.focus();
        } else if (e.key === kbd.ENTER || e.key === kbd.SPACE) {
          e.preventDefault();
          value.set(tabValue);
        } else if (e.key === kbd.HOME) {
          e.preventDefault();
          const firstTrigger = enabledTriggers[0];
          firstTrigger.focus();
        } else if (e.key === kbd.END) {
          e.preventDefault();
          const lastTrigger = last(enabledTriggers);
          lastTrigger.focus();
        }
      }));
      return {
        destroy: unsub
      };
    }
  });
  const content = builder(name("content"), {
    stores: value,
    returned: ($value) => {
      return (tabValue) => {
        return {
          role: "tabpanel",
          // TODO: improve
          "aria-labelledby": tabValue,
          hidden: isBrowser ? $value === tabValue ? void 0 : true : ssrValue === tabValue ? void 0 : true,
          tabindex: 0
        };
      };
    }
  });
  return {
    elements: {
      root,
      list,
      trigger,
      content
    },
    states: {
      value
    },
    options
  };
}
function createBitAttrs(bit, parts) {
  const attrs = {};
  parts.forEach((part) => {
    attrs[part] = {
      [`data-${bit}-${part}`]: ""
    };
  });
  return (part) => attrs[part];
}
function removeUndefined(obj) {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (value !== void 0) {
      result[key] = value;
    }
  }
  return result;
}
function styleToString(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
styleToString({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0"
});
styleToString({
  position: "absolute",
  width: "25px",
  height: "25px",
  opacity: "0",
  margin: "0px",
  pointerEvents: "none",
  transform: "translateX(-100%)"
});
function getOptionUpdater(options) {
  return function(key, value) {
    if (value === void 0)
      return;
    const store = options[key];
    if (store) {
      store.set(value);
    }
  };
}
const NAME$q = "accordion";
const PARTS$s = ["root", "content", "header", "item", "trigger"];
createBitAttrs(NAME$q, PARTS$s);
const NAME$p = "alert-dialog";
const PARTS$r = [
  "action",
  "cancel",
  "content",
  "description",
  "overlay",
  "portal",
  "title",
  "trigger"
];
createBitAttrs(NAME$p, PARTS$r);
const NAME$o = "avatar";
const PARTS$q = ["root", "image", "fallback"];
createBitAttrs(NAME$o, PARTS$q);
const NAME$n = "calendar";
const PARTS$p = [
  "root",
  "prev-button",
  "next-button",
  "heading",
  "grid",
  "day",
  "header",
  "grid-head",
  "head-cell",
  "grid-body",
  "cell",
  "grid-row"
];
createBitAttrs(NAME$n, PARTS$p);
const NAME$m = "checkbox";
const PARTS$o = ["root", "input", "indicator"];
createBitAttrs(NAME$m, PARTS$o);
const NAME$l = "collapsible";
const PARTS$n = ["root", "content", "trigger"];
createBitAttrs(NAME$l, PARTS$n);
const PARTS$m = [
  "arrow",
  "checkbox-indicator",
  "checkbox-item",
  "content",
  "group",
  "item",
  "label",
  "radio-group",
  "radio-item",
  "separator",
  "sub-content",
  "sub-trigger",
  "trigger"
];
createBitAttrs("menu", PARTS$m);
const PARTS$l = [
  "arrow",
  "checkbox-indicator",
  "checkbox-item",
  "content",
  "group",
  "item",
  "label",
  "radio-group",
  "radio-item",
  "radio-indicator",
  "separator",
  "sub-content",
  "sub-trigger",
  "trigger"
];
createBitAttrs("menu", PARTS$l);
const NAME$k = "date-field";
const PARTS$k = ["label", "input", "segment"];
createBitAttrs(NAME$k, PARTS$k);
const NAME$j = "popover";
const PARTS$j = ["arrow", "close", "content", "trigger"];
createBitAttrs(NAME$j, PARTS$j);
const NAME$i = "date-field";
const PARTS$i = ["label", "field", "input", "segment"];
createBitAttrs(NAME$i, PARTS$i);
const NAME$h = "calendar";
const PARTS$h = [
  "root",
  "prev-button",
  "next-button",
  "heading",
  "grid",
  "day",
  "header",
  "grid-head",
  "head-cell",
  "grid-body",
  "cell",
  "grid-row"
];
createBitAttrs(NAME$h, PARTS$h);
const NAME$g = "dialog";
const PARTS$g = ["close", "content", "description", "overlay", "portal", "title", "trigger"];
createBitAttrs(NAME$g, PARTS$g);
const NAME$f = "label";
const PARTS$f = ["root"];
createBitAttrs(NAME$f, PARTS$f);
const NAME$e = "link-preview";
const PARTS$e = ["arrow", "content", "trigger"];
createBitAttrs(NAME$e, PARTS$e);
const NAME$d = "menubar";
const PARTS$d = [
  "arrow",
  "checkbox-indicator",
  "checkbox-item",
  "content",
  "group",
  "item",
  "label",
  "radio-group",
  "radio-item",
  "separator",
  "sub-content",
  "sub-trigger",
  "trigger"
];
createBitAttrs(NAME$d, ["root"]);
createBitAttrs("menu", PARTS$d);
const NAME$c = "pagination";
const PARTS$c = ["root", "prev-button", "next-button", "page"];
createBitAttrs(NAME$c, PARTS$c);
const NAME$b = "pin-input";
const PARTS$b = ["root", "input", "hidden-input"];
createBitAttrs(NAME$b, PARTS$b);
const NAME$a = "progress";
const PARTS$a = ["root"];
createBitAttrs(NAME$a, PARTS$a);
const NAME$9 = "radio-group";
const PARTS$9 = ["root", "item", "input", "item-indicator"];
createBitAttrs(NAME$9, PARTS$9);
const NAME$8 = "select";
const PARTS$8 = [
  "arrow",
  "content",
  "group",
  "item",
  "indicator",
  "input",
  "label",
  "trigger",
  "value"
];
createBitAttrs(NAME$8, PARTS$8);
const NAME$7 = "separator";
const PARTS$7 = ["root"];
const getAttrs$1 = createBitAttrs(NAME$7, PARTS$7);
function setCtx$1(props) {
  const separator = createSeparator(removeUndefined(props));
  return {
    ...separator,
    updateOption: getOptionUpdater(separator.options)
  };
}
const NAME$6 = "slider";
const PARTS$6 = ["root", "input", "range", "thumb", "tick"];
createBitAttrs(NAME$6, PARTS$6);
const NAME$5 = "switch";
const PARTS$5 = ["root", "input", "thumb"];
createBitAttrs(NAME$5, PARTS$5);
const NAME$4 = "tabs";
const PARTS$4 = ["root", "content", "list", "trigger"];
const getAttrs = createBitAttrs(NAME$4, PARTS$4);
function setCtx(props) {
  const tabs = createTabs(removeUndefined(props));
  setContext(NAME$4, tabs);
  return {
    ...tabs,
    updateOption: getOptionUpdater(tabs.options)
  };
}
function getCtx() {
  return getContext(NAME$4);
}
const NAME$3 = "toggle";
const PARTS$3 = ["root", "input"];
createBitAttrs(NAME$3, PARTS$3);
const NAME$2 = "toggle-group";
const PARTS$2 = ["root", "item"];
createBitAttrs(NAME$2, PARTS$2);
const NAME$1 = "toolbar";
const PARTS$1 = ["root", "button", "link", "group", "group-item"];
createBitAttrs(NAME$1, PARTS$1);
const NAME = "tooltip";
const PARTS = ["arrow", "content", "trigger"];
createBitAttrs(NAME, PARTS);
function Button($$payload, $$props) {
  push(false);
  let btnClass;
  let grow = value_or_fallback($$props["grow"], false);
  let color = value_or_fallback($$props["color"], "default");
  const baseClass = "rounded px-2 py-2 shadow-[2px_2px_0px_0px_black,0px_0px_0px_1px_black] active:shadow-[inset_0px_1px_0px_0px_black,0px_0px_0px_1px_black]";
  const colorClasses = {
    default: "bg-muted text-neutral-500 hover:text-neutral-900 hover:text-neutral-700 hover:bg-neutral-100 active:bg-neutral-300  ",
    yellow: "bg-yellow-400 text-neutral-900 hover:bg-yellow-500 active:bg-yellow-600 dark:bg-yellow-500",
    gray: "bg-[#515458] hover:bg-[#3e4146] active:bg-[#3e4146] text-neutral-50",
    red: "bg-[#a52222] hover:bg-[#8d1c1c] active:bg-[#811a1a] text-neutral-50  "
  };
  btnClass = twMerge(baseClass, colorClasses[color], grow && "w-full grow");
  const anchor = create_anchor($$payload);
  $$payload.out += `<button${attr("class", btnClass, false)}>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</button>`;
  bind_props($$props, { grow, color });
  pop();
}
export {
  Button as B,
  setCtx as a,
  getAttrs as b,
  getCtx as c,
  getAttrs$1 as g,
  setCtx$1 as s
};
