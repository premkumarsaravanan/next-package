"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Greeting: () => Greeting_default,
  HelloWorld: () => HelloWorld_default,
  Intro: () => Intro_default
});
module.exports = __toCommonJS(index_exports);

// src/Components/HelloWorld.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var HelloWorld = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Hello World" });
};
var HelloWorld_default = HelloWorld;

// src/Components/Greeting.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Greeting = ({ name }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h2", { children: [
    "Hello, ",
    name,
    "!"
  ] });
};
var Greeting_default = Greeting;

// src/Components/Intro.tsx
var import_react = require("react");
var import_react_bootstrap = require("react-bootstrap");
var import_aos = __toESM(require("aos"));
var import_aos2 = require("aos/dist/aos.css");
var import_link = __toESM(require("next/link"));
var import_jsx_runtime3 = require("react/jsx-runtime");
var Intro = ({ data, customClass }) => {
  (0, import_react.useEffect)(() => {
    import_aos.default.init({
      duration: 500,
      once: true,
      easing: "ease-in-out"
    });
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("section", { className: `intro-wrapper ${customClass}`, "data-aos": "fade-up", "data-aos-effect": "100", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_bootstrap.Container, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react_bootstrap.Row, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_bootstrap.Col, { xl: 8, className: "order-xl-1 order-2", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "intro-text", children: (data == null ? void 0 : data.content) && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: data.content }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_bootstrap.Col, { xl: 1, className: "order-xl-2" }),
    (data == null ? void 0 : data.logo) && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_bootstrap.Col, { xl: 3, className: "order-xl-2 order-1", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "intro-logo-img-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "intro-logo-img", children: (data == null ? void 0 : data.link) ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link.default, { href: data.link, target: "_blank", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { src: data.logo.url, className: "img-fluid" }) }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { src: data.logo.url, className: "img-fluid" }) }) }) })
  ] }) }) });
};
var Intro_default = Intro;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Greeting,
  HelloWorld,
  Intro
});
//# sourceMappingURL=index.js.map