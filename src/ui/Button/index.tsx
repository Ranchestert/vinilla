import type { FC, HTMLAttributes } from "react";
import "./style.css"
import type React from "react";

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
    kind?: "secondary"|"primary",
    children?: React.ReactNode
}

export const Button: FC<IButtonProps> = ({
    kind="primary",
    children,
    ...rest
}) => {
    return <button {...rest} className={kind+" button"}>{children}</button>
}