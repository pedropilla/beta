import React, { ReactElement } from 'react';
import classnames from 'classnames';

import s from './NonLinkButton.module.scss';

type HTMLButtonProps = JSX.IntrinsicElements['button'];

interface Props extends HTMLButtonProps {

}

export default function NonLinkButton({
    children,
    className = '',
    ...props
}: Props): ReactElement {
    return (
        <button className={classnames(s['non-link-button'], className)}>
            {children}
        </button>
    );
}
