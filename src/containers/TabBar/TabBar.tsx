import React, { ReactElement } from 'react';
import classnames from 'classnames';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import s from './TabBar.module.scss';
export interface TabBarItem {
    id: string;
    label: string;
}

interface Props {
    items: TabBarItem[];
    activeId: string;
    onTabClick: (item: TabBarItem) => void;
    className?: string;
    variant?: 'standard' | 'scrollable' | 'fullWidth';
}

export default function TabBar({
    items,
    onTabClick,
    activeId,
    variant = 'standard',
    className = '',
}: Props): ReactElement {
    return (
        <Tabs
            classes={{ indicator: s.indicator }}
            className={classnames(s.root, className)}
            variant={variant}
            value={activeId}
        >
            {items.map(tab => (
                <Tab
                    key={tab.id}
                    onClick={() => onTabClick(tab)}
                    className={s.tab}
                    label={tab.label}
                    value={tab.id}
                />
            ))}
        </Tabs>
    );
}
