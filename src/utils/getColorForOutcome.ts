const COLORS = [
    'var(--c-green)',
    'var(--c-red)',
    'var(--c-light-purple)',
    'var(--c-pink)',
    'var(--c-purple)',
    'var(--c-blue)',
    'var(--c-medium-blue)',
    'var(--c-dark-purple)',
];

export function getColorForOutcome(outcomeId: number) {
    return COLORS[outcomeId];
}
