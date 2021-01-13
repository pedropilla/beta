import React, { useEffect, useRef } from 'react';
import { ReactElement } from 'react';
import { PriceHistoryData } from '../../models/PriceHistoryData';
import generateLineChart, { generateChartData } from './utils/generateLineChart';

interface Props {
    pricesHistory: PriceHistoryData[];
}


export default function LineChart({
    pricesHistory,
}: Props): ReactElement {
    const canvas = useRef<HTMLCanvasElement>(null);
    const chart = useRef<Chart | null>(null);

    useEffect(() => {
        if (!canvas.current) {
            return;
        }

        chart.current = generateLineChart(canvas.current);
    }, [canvas]);

    useEffect(() => {
        if (!chart.current) return;

        chart.current.data = generateChartData(pricesHistory);
        chart.current.update();
    }, [chart, pricesHistory]);

    return (
        <canvas ref={canvas} />
    );
}
