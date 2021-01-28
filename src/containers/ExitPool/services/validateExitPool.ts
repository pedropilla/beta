import Big from 'big.js';
import { PoolToken } from '../../../models/PoolToken';
import { toCollateralToken } from '../../../services/CollateralTokenService';
import trans from '../../../translation/trans';
import { ExitPoolFormValues } from './createDefaultExitPoolFormValues';

interface ExitPoolFormErrors {
    amountIn: string;
    canSubmit: boolean;
}

export default function validateExitPool(formValues: ExitPoolFormValues, poolToken: PoolToken) {
    const errors: ExitPoolFormErrors = {
        canSubmit: true,
        amountIn: '',
    }

    if (formValues.amountIn !== '') {

        const amountIn = toCollateralToken(formValues.amountIn);

        if (new Big(poolToken.balance).lt(amountIn)) {
            errors.amountIn = trans('exitPool.validation.amountIn.tooHigh');
            errors.canSubmit = false;
        }

        if (new Big(amountIn).lte(0)) {
            errors.amountIn = trans('exitPool.validation.amountIn.negative');
            errors.canSubmit = false;
        }
    } else {
        errors.canSubmit = false;
    }

    return errors;
}
