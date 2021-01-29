export interface ExitPoolFormValues {
    amountIn: string;
}

export default function createDefaultExitPoolFormValues(): ExitPoolFormValues {
    return {
        amountIn: '',
    };
}
