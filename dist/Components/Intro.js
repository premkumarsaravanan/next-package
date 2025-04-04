import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
const Intro = ({ data, customClass }) => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
            easing: "ease-in-out",
        });
    }, []);
    return (_jsx("section", { className: `intro-wrapper ${customClass}`, "data-aos": "fade-up", "data-aos-effect": "100", children: _jsx(Container, { children: _jsxs(Row, { children: [_jsx(Col, { xl: 8, className: "order-xl-1 order-2", children: _jsx("div", { className: "intro-text", children: (data === null || data === void 0 ? void 0 : data.content) && _jsx("div", { children: data.content }) }) }), _jsx(Col, { xl: 1, className: "order-xl-2" }), (data === null || data === void 0 ? void 0 : data.logo) && (_jsx(Col, { xl: 3, className: "order-xl-2 order-1", children: _jsx("div", { className: "intro-logo-img-wrapper", children: _jsx("div", { className: "intro-logo-img", children: (data === null || data === void 0 ? void 0 : data.link) ? (_jsx(Link, { href: data.link, target: "_blank", children: _jsx("img", { src: data.logo.url, className: "img-fluid" }) })) : (_jsx("img", { src: data.logo.url, className: "img-fluid" })) }) }) }))] }) }) }));
};
export default Intro;
