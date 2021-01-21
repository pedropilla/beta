import { SeedPoolFormValues } from "../../../services/PoolService";
import trans from "../../../translation/trans";

export interface SeedPoolFormErrors {
    outcomePercentages: string[];
    canSubmit: boolean;
    message: string;
}

export function validateSeedPool(formValues: SeedPoolFormValues) {
    const errors: SeedPoolFormErrors = {
        outcomePercentages: [],
        canSubmit: true,
        message: '',
    }

    errors.outcomePercentages = formValues.outcomePercentages.map(percentage => {
        if (percentage <= 0) return trans('seedPool.inputZero');
        if (percentage >= 100) return trans('seedPool.input100');

        return '';
    });

    const hasOutcomeErrors = errors.outcomePercentages.some(item => item !== '');
    const percentageTogether = formValues.outcomePercentages.reduce((prev, cur) => prev + cur, 0);

    if (hasOutcomeErrors || percentageTogether !== 100) {
        errors.canSubmit = false;
    }

    if (percentageTogether !== 100) {
        errors.message = trans('seedPool.not100Percent', {
            percentage: percentageTogether.toString(),
        });
    }

    return errors;
}
