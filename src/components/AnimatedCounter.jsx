import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ value, suffix = '', prefix = '', duration = 2, className = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [displayValue, setDisplayValue] = useState(0);

    // Parse numeric value from string like "$4.2B+" or "170+"
    const numericStr = String(value).replace(/[^0-9.]/g, '');
    const targetNum = parseFloat(numericStr) || 0;
    const hasDecimal = numericStr.includes('.');
    const decimalPlaces = hasDecimal ? numericStr.split('.')[1]?.length || 0 : 0;

    // Extract prefix/suffix from the value string
    const valueStr = String(value);
    const autoPrefix = valueStr.match(/^[^0-9.]*/)?.[0] || '';
    const autoSuffix = valueStr.match(/[^0-9.]*$/)?.[0] || '';

    useEffect(() => {
        if (!isInView) return;

        let startTime = null;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * targetNum;
            setDisplayValue(current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, targetNum, duration]);

    const formatted = hasDecimal ? displayValue.toFixed(decimalPlaces) : Math.floor(displayValue).toLocaleString();

    return (
        <motion.span
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
        >
            {prefix || autoPrefix}{formatted}{suffix || autoSuffix}
        </motion.span>
    );
};

export default AnimatedCounter;
