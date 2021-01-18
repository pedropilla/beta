import React, { FormEvent, ReactElement, useMemo, useState } from 'react';
import DateTimePicker from '../../components/DateTimePicker';
import OptionSwitch from '../../components/OptionSwitch';
import Tag from '../../components/Tag';
import TextArea from '../../components/TextArea';
import Dialog from '../../compositions/Dialog';
import { MarketCategory } from '../../models/Market';
import { MarketFormValues } from '../../services/MarketService';
import trans from '../../translation/trans';

import s from './MarketCreationDialog.module.scss';
import createDefaultMarketFormValues from './utils/createDefaultMarketFormValues';

export default function MarketCreationDialog(): ReactElement {
    const [formValues, setFormValues] = useState(createDefaultMarketFormValues());
    const marketCategories = useMemo(() => Object.values(MarketCategory).filter(category => category !== MarketCategory.Unknown), []);

    function handleCategoryClick(category: MarketCategory) {
        let activeCategories = formValues.categories;

        if (activeCategories?.includes(category)) {
            activeCategories = activeCategories.filter(cat => cat !== category);
        } else {
            activeCategories?.push(category);
        }

        setFormValues({
            ...formValues,
            categories: activeCategories,
        });
    }

    function handleResolutionDateChange(date: Date | null) {
        if (!date) return;

        setFormValues({
            ...formValues,
            resolutionDate: date,
        });
    }

    return (
        <Dialog title="">
            <div className={s.filters}>
                <div className={s.inputsWrapper}>
                    <label className={s.label}>
                        {trans('marketCreation.label.categorySelect')}
                    </label>
                    <div className={s.categories}>
                        {marketCategories.map((category) => (
                            <Tag
                                key={category}
                                category={category}
                                className={s.filter}
                                active={formValues.categories.includes(category)}
                                onClick={() => handleCategoryClick(category)}
                                type="button"
                            />
                        ))}
                    </div>
                </div>
                <div className={s.inputsWrapper}>
                    <label className={s.label}>
                        {trans('marketCreation.label.description')}
                    </label>
                    <TextArea />
                </div>
                <div className={s.inputsWrapper}>
                    <label className={s.label}>
                        {trans('marketCreation.label.marketType')}
                    </label>
                    <OptionSwitch
                        labelA={trans('marketCreation.label.binary')}
                        labelB={trans('marketCreation.label.categorical')}
                    />
                </div>
                <div className={s.inputsWrapper}>
                    <label className={s.label}>
                        {trans('marketCreation.label.resolutionDate')}
                    </label>

                    <DateTimePicker
                        value={formValues.resolutionDate}
                        onChange={handleResolutionDateChange}
                    />
                </div>
            </div>
        </Dialog>
    );
}
