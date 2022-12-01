import React from "react";
const Button = ({ border, color, children, height, onClick, radius, width }) => {
    return (React.createElement("button", { onClick: onClick, style: {
            backgroundColor: color,
            border,
            borderRadius: radius,
            height,
            width
        } }, children));
};
export default Button;
