// src/Components/HelloWorld.tsx
import { jsx } from "react/jsx-runtime";
var HelloWorld = () => {
  return /* @__PURE__ */ jsx("h1", { children: "Hello World" });
};
var HelloWorld_default = HelloWorld;

// src/Components/Greeting.tsx
import { jsxs } from "react/jsx-runtime";
var Greeting = ({ name }) => {
  return /* @__PURE__ */ jsxs("h2", { children: [
    "Hello, ",
    name,
    "!"
  ] });
};
var Greeting_default = Greeting;

// src/Components/Intro.tsx
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var Intro = ({ data, customClass }) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: "ease-in-out"
    });
  }, []);
  return /* @__PURE__ */ jsx2("section", { className: `intro-wrapper ${customClass}`, "data-aos": "fade-up", "data-aos-effect": "100", children: /* @__PURE__ */ jsx2(Container, { children: /* @__PURE__ */ jsxs2(Row, { children: [
    /* @__PURE__ */ jsx2(Col, { xl: 8, className: "order-xl-1 order-2", children: /* @__PURE__ */ jsx2("div", { className: "intro-text", children: (data == null ? void 0 : data.content) && /* @__PURE__ */ jsx2("div", { children: data.content }) }) }),
    /* @__PURE__ */ jsx2(Col, { xl: 1, className: "order-xl-2" }),
    (data == null ? void 0 : data.logo) && /* @__PURE__ */ jsx2(Col, { xl: 3, className: "order-xl-2 order-1", children: /* @__PURE__ */ jsx2("div", { className: "intro-logo-img-wrapper", children: /* @__PURE__ */ jsx2("div", { className: "intro-logo-img", children: (data == null ? void 0 : data.link) ? /* @__PURE__ */ jsx2(Link, { href: data.link, target: "_blank", children: /* @__PURE__ */ jsx2("img", { src: data.logo.url, className: "img-fluid" }) }) : /* @__PURE__ */ jsx2("img", { src: data.logo.url, className: "img-fluid" }) }) }) })
  ] }) }) });
};
var Intro_default = Intro;
export {
  Greeting_default as Greeting,
  HelloWorld_default as HelloWorld,
  Intro_default as Intro
};
//# sourceMappingURL=index.mjs.map