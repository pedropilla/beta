const COLORS = [
    '--c-green',
    '--c-red',
    '--c-light-purple',
    '--c-pink',
    '--c-purple',
    '--c-blue',
    '--c-medium-blue',
    '--c-dark-purple',
];

export function getColorForOutcome(outcomeId: number) {
    return COLORS[outcomeId];
}
