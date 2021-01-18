import React, { ReactNode } from 'react';
import { default as MuiButton } from '@material-ui/core/Button';

import s from './Button.module.scss';

interface ButtonProps {
    children: ReactNode | string;
    className?: string;
    onClick?: () => void;
    type?: string;
    variant?: "text" | "outlined" | "contained";
};

export default function Button({
    className = '',
    children,
    type,
    ...props
}: ButtonProps) {
    return (
        <MuiButton {...props} className={`${s.button} ${className}`}>{children}</MuiButton>
    );
}
