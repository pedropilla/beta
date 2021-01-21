import React, { ReactElement } from 'react';
import Button from '../../components/Button';
import trans from '../../translation/trans';


export default function ClaimFees(): ReactElement {
    return (
        <div>
            <p>
                {trans('market.claimFees.description', {
                    amount: '$800',
                })}
            </p>
            <Button>
            {trans('market.action.claimFees', {
                amount: '$800',
            })}
            </Button>
        </div>
    );
}
