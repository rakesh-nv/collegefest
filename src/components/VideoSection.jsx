import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoSection = () => {
    return (
        <section id="video" style={{ background: 'var(--dark-surface)' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Feel the <span className="text-gradient">Vibe</span></h2>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    style={{
                        position: 'relative',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        aspectRatio: '16/9',
                        background: '#000',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}
                >
                    {/* Placeholder for video */}
                    <img
                        src="https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=2070&auto=format&fit=crop"
                        alt="Video Preview"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                    />

                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                        <motion.button
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                background: 'var(--gradient-primary)',
                                border: 'none',
                                color: 'white',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 0 30px rgba(188, 19, 254, 0.6)'
                            }}
                        >
                            <Play fill="white" size={32} />
                        </motion.button>
                    </div>

                    <div style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '0',
                        width: '100%',
                        padding: '0 40px',
                        textAlign: 'left'
                    }}>
                        <p style={{ fontWeight: 800, fontSize: '1.2rem', textTransform: 'uppercase' }}>Aftermovie 2025</p>
                        <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Relive the magic of our last edition.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoSection;
