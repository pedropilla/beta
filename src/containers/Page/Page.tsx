import React, { PropsWithChildren, ReactElement } from "react";
import classnames from 'classnames';

import Menu from "../Menu";

import styles from './Page.module.scss';
import Footer from "../Footer";

interface Props {
    className?: string;
    bodyClassName?: string;
    hasNavigation?: boolean;
    size?: 'large' | 'medium' | 'unrestricted';
}

export default function Page({
    children,
    hasNavigation = false,
    size = 'medium',
    className = '',
    bodyClassName = '',
}: PropsWithChildren<Props>): ReactElement {
    const pageBodyClassName = classnames(styles.page__body, bodyClassName, {
        [styles['page__body--large']]: size === 'large',
        [styles['page__body--unrestricted']]: size === 'unrestricted',
    });

    return (
        <div className={`${styles.page} ${className}`}>
            {hasNavigation && <Menu />}
            <main className={pageBodyClassName}>
                {children}
            </main>
            <Footer />
        </div>
    );
}
