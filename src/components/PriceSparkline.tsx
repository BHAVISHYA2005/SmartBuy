import React from 'react';
import { PricePoint } from '../types/product';
import { generateSparklinePath, getPriceTrend } from '../utils/priceHelpers';

interface PriceSparklineProps {
    history: PricePoint[];
    width?: number;
    height?: number;
}

const PriceSparkline: React.FC<PriceSparklineProps> = ({
    history,
    width = 100,
    height = 30
}) => {
    if (!history || history.length < 2) return null;

    const path = generateSparklinePath(history, width, height);
    const trend = getPriceTrend(history);

    // Green for falling prices (good!), red for rising
    const strokeColor = trend === 'down' ? '#10b981' : trend === 'up' ? '#ef4444' : '#64748b';

    return (
        <div className="price-sparkline" title={`Price trend: ${trend}`}>
            <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
                <path
                    d={path}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};

export default PriceSparkline;
