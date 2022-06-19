import React from "react";
import { Button as AntButton } from "antd";

export interface ButtonProps {
    shape?: "circle" | "round";
    type?: "primary" | "ghost" | "default" | "dashed" | "link" | "text";
    buttonType?: "button" | "submit" | "reset";
    onClick?: () => void;
    size?: "small" | "default";
    label?: string;
    className: string;
    href?: string;
}

const Button: React.FC<ButtonProps> = ({
    type = "primary",
    shape,
    buttonType = "button",
    className,
    label,
    onClick,
    href
}) => {
    return (
        <div className="buttonWrapper">
            <AntButton
                shape={shape}
                type={type} 
                htmlType={buttonType} 
                className={className}
                onClick={onClick}
                href={href}
             >
                {label}
            </AntButton>
        </div>
    )
}

export default Button;
