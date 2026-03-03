import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import danceImg from '../assets/images/dance.png';
import fashionImg from '../assets/images/fashion.png';
import crowdImg from '../assets/images/crowd.png';

const slides = [
    { id: 1, img: danceImg, title: "Grand Finale", text: "The most awaited performance of the year." },
    { id: 2, img: fashionImg, title: "Fashion Night", text: "Elegance meets energy on the grand stage." },
    { id: 3, img: crowdImg, title: "Concert Night", text: "A night beneath the stars with top artists." },
];

const Highlights = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="highlights" style={{ padding: '0', height: '600px', overflow: 'hidden' }}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={current}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slides[current].img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}
                    >
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            style={{ maxWidth: '800px', padding: '20px' }}
                        >
                            {/* <h2 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', marginBottom: '10px' }}>{slides[current].title}</h2>
                            <p style={{ fontSize: '1.2rem', color: '#eee' }}>{slides[current].text}</p> */}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                <div style={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '10px',
                    zIndex: 10
                }}>
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setCurrent(i)}
                            style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                background: current === i ? 'var(--neon-purple)' : 'rgba(255,255,255,0.3)',
                                cursor: 'pointer',
                                transition: '0.3s'
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
