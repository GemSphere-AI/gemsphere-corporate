import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ShootingStar = ({ id, onComplete }) => {
    const startX = Math.random() * 100;
    const startY = Math.random() * 50;
    const duration = 1.5 + Math.random() * 1.5;

    return (
        <motion.div
            key={id}
            initial={{ 
                x: `${startX}vw`, 
                y: `${startY}vh`, 
                opacity: 0, 
                width: 0 
            }}
            animate={{ 
                x: `${startX - 40}vw`, 
                y: `${startY + 40}vh`, 
                opacity: [0, 1, 0],
                width: ['0px', '200px', '0px']
            }}
            transition={{ duration, ease: "easeOut" }}
            onAnimationComplete={() => onComplete(id)}
            style={{
                position: 'fixed',
                height: '2px',
                background: 'linear-gradient(90deg, rgba(0, 212, 255, 0.8), transparent)',
                zIndex: -5,
                transform: 'rotate(-45deg)',
                boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)'
            }}
        />
    );
};

const ShootingStars = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (stars.length < 5) {
                const id = Math.random().toString(36).substr(2, 9);
                setStars(prev => [...prev, id]);
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [stars]);

    const removeStar = (id) => {
        setStars(prev => prev.filter(starId => starId !== id));
    };

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <AnimatePresence>
                {stars.map(id => (
                    <ShootingStar key={id} id={id} onComplete={removeStar} />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default ShootingStars;
