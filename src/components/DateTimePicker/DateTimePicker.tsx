import React, { ReactElement } from 'react';
import { DateTimePicker as MuiDateTimePicker } from "@material-ui/pickers";

interface Props {
    value: Date;
    onChange: (date: Date | null) => void;
}

export default function DateTimePicker({
    value,
    onChange,
}: Props): ReactElement {
    return (
        <MuiDateTimePicker
            label="DateTimePicker"
            inputVariant="outlined"
            value={value}
            onChange={onChange}
        />
    );
}
