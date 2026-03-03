import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroImg from '../assets/images/hero.png';

const Hero = () => {
    return (
        <section id="hero" style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            overflow: 'hidden',
            padding: 0
        }}>
            {/* Background with overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `linear-gradient(rgba(10, 10, 12, 0.7), rgba(10, 10, 12, 0.9)), url(${heroImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1
            }} />

            {/* Animated Gradient Background Effect */}
            <div className="animate-pulse" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100vw',
                height: '100vh',
                background: 'radial-gradient(circle, rgba(188, 19, 254, 0.15) 0%, rgba(0, 210, 255, 0.05) 50%, rgba(10, 10, 12, 0) 70%)',
                zIndex: -1
            }} />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 style={{
                    fontSize: 'clamp(3rem, 10vw, 7rem)',
                    lineHeight: 0.9,
                    marginBottom: '20px',
                    fontWeight: 900
                }}>
                    COLLEGE <br />
                    <span className="text-gradient">FEST 2026</span>
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                        color: '#ccc',
                        maxWidth: '600px',
                        margin: '0 auto 40px'
                    }}
                >
                    Unforgettable Moments, Endless Memories. Experience the pulse of the year.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}
                >
                    <button
                        className="glow-btn"
                        onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Explore Gallery
                    </button>

                </motion.div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ position: 'absolute', bottom: '40px', cursor: 'pointer' }}
                onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
            >
                <ChevronDown size={40} color="var(--neon-purple)" />
            </motion.div>
        </section>
    );
};

export default Hero;
