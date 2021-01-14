import React, { ReactElement } from 'react';
import classnames from 'classnames';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import s from './TabBar.module.scss';
import { useHistory, useLocation } from 'react-router';

interface TabBarItem {
    href: string;
    label: string;
}

interface Props {
    items: TabBarItem[];
    className?: string;
}

export default function TabBar({
    items,
    className = '',
}: Props): ReactElement {
    const history = useHistory();
    const location = useLocation();

    function onTabClick(href: string) {
        history.push(href);
    }

    return (
        <Tabs
            classes={{ indicator: s.indicator }}
            className={classnames(s.root, className)}
            variant="fullWidth"
            value={location.pathname}
        >
            {items.map(tab => (
                <Tab
                    key={tab.href}
                    onClick={() => onTabClick(tab.href)}
                    className={s.tab}
                    label={tab.label}
                    value={tab.href}
                />
            ))}
        </Tabs>
    );
}
