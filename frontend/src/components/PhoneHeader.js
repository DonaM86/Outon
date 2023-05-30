import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import WebcamImage from '../components/Screenshot';
import '../styles/Phone.css';
import { Camera, Reply, Person, Trash } from 'react-bootstrap-icons';
const PhoneHeader = () => {
    const [showButtons, setShowButtons] = useState(false);
    const handleCameraButtonClick = () => {
        setShowButtons(!showButtons);
    };
    return (_jsxs("div", Object.assign({ className: "container" }, { children: [_jsxs("div", Object.assign({ className: "phone" }, { children: [_jsxs("div", Object.assign({ className: "screen" }, { children: [_jsx("div", Object.assign({ className: "carousel-container" }, { children: _jsx(WebcamImage, {}) })), _jsx("div", Object.assign({ className: `hidden-box ${showButtons ? 'show' : ''}` }, { children: _jsx("div", { className: "hidden-content" }) }))] })), _jsxs("div", Object.assign({ className: "buttons" }, { children: [_jsxs("div", Object.assign({ className: `half-circle ${showButtons ? 'show' : ''}` }, { children: [_jsx("div", Object.assign({ className: "round-button" }, { children: _jsx(Reply, {}) })), _jsx("div", Object.assign({ className: "round-button" }, { children: _jsx(Person, {}) })), _jsx("div", Object.assign({ className: "round-button" }, { children: _jsx(Trash, {}) }))] })), _jsx("div", Object.assign({ className: "camera-button", onClick: handleCameraButtonClick }, { children: _jsx(Camera, { size: 24 }) }))] }))] })), _jsxs("div", Object.assign({ className: "text-container" }, { children: [_jsx("h1", Object.assign({ className: "heading-text" }, { children: "Try it before you buy it!" })), _jsx("div", Object.assign({ className: "beeauty-teext" }, { children: _jsx("p", Object.assign({ className: "beeauty-line" }, { children: "Beauty is in the eye of the beholder or as we like to say, OutOn the eyes of the beholder! Style yourself like the gorgeous sunshine cosmonaut that you are!" })) })), _jsxs("div", Object.assign({ className: "circle-row" }, { children: [_jsx("div", Object.assign({ className: "circle circle-selfie", style: { backgroundColor: '#eee565' } }, { children: "Selfie time" })), _jsx("div", Object.assign({ className: "circle circle-shades", style: { backgroundColor: '#b68657' } }, { children: "Select shades" }))] })), _jsxs("div", Object.assign({ className: "circle-row" }, { children: [_jsx("div", Object.assign({ className: "circle circle-shot", style: { backgroundColor: '#9dacaa' } }, { children: "Snap a shot" })), _jsx("div", Object.assign({ className: "circle circle-inbox", style: { backgroundColor: '#9f8ea2' } }, { children: "Send to inbox" }))] }))] }))] })));
};
export default PhoneHeader;
//# sourceMappingURL=PhoneHeader.js.map