import type { FC, HTMLAttributes, ReactElement } from "react";

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
    kind: "secondary"|"primary",
    children?: ReactElement
}

export const Button: FC<IButtonProps> = ({
    kind="primary",
    children,
    ...rest
}) => {
    return <button {...rest} className={kind}>{children}</button>
}