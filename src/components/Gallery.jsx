import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import danceImg from '../assets/images/dance.png';
import fashionImg from '../assets/images/fashion.png';
import techImg from '../assets/images/tech.png';
import sportsImg from '../assets/images/sports.png';
import crowdImg from '../assets/images/crowd.png';
import heroImg from '../assets/images/hero.png';

const danceImages = [
    { id: 'd1', src: danceImg, category: 'Dance', title: 'Street Fusion' },
    { id: 'd2', src: danceImg, category: 'Dance', title: 'Urban Flow' },
];

const stageImages = [
    { id: 's1', src: fashionImg, category: 'Stage', title: 'Trendsetters' },
    { id: 's2', src: fashionImg, category: 'Stage', title: 'Vogue Night' },
];

const crowdImages = [
    { id: 'c1', src: crowdImg, category: 'Crowd', title: 'Festival Vibes' },
    { id: 'c2', src: crowdImg, category: 'Crowd', title: 'Evening Energy' },
];

const funMomentsImages = [
    { id: 'f1', src: heroImg, category: 'Fun Moments', title: 'Grand Opening' },
    { id: 'f2', src: heroImg, category: 'Fun Moments', title: 'Backstage Smiles' },
];

const images = [
    ...danceImages,
    ...stageImages,
    ...crowdImages,
    ...funMomentsImages,
];

const categories = ['All', 'Dance', 'Stage', 'Crowd', 'Fun Moments'];

const Gallery = () => {
    const [filter, setFilter] = useState('All');
    const [selectedImg, setSelectedImg] = useState(null);

    const filteredImages = filter === 'All'
        ? images
        : images.filter(img => img.category === filter);

    return (
        <section id="gallery" style={{ background: 'var(--dark-bg)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 style={{ fontSize: '2.5rem' }}>Captured <span className="text-gradient">Moments</span></h2>
                    <div className="filter-grid">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                style={{
                                    background: filter === cat ? 'var(--gradient-primary)' : 'rgba(255,255,255,0.05)',
                                    border: 'none',
                                    color: 'white',
                                    padding: '8px 20px',
                                    borderRadius: '30px',
                                    cursor: 'pointer',
                                    transition: '0.3s',
                                    fontWeight: 600,
                                    fontSize: '0.9rem'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="masonry"
                >
                    <AnimatePresence>
                        {filteredImages.map((img) => (
                            <motion.div
                                key={img.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => setSelectedImg(img)}
                                className="gallery-item"
                            >
                                <img src={img.src} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        background: 'rgba(0,0,0,0.6)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backdropFilter: 'blur(4px)'
                                    }}
                                >
                                    <h4 style={{ color: 'white' }}>{img.title}</h4>
                                    <p style={{ color: 'var(--electric-blue)', fontSize: '0.8rem' }}>{img.category}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedImg && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'rgba(0,0,0,0.95)',
                                zIndex: 1000,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '40px'
                            }}
                            onClick={() => setSelectedImg(null)}
                        >
                            <button
                                onClick={() => setSelectedImg(null)}
                                style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                            >
                                <X size={40} />
                            </button>

                            <motion.img
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                src={selectedImg.src}
                                style={{
                                    maxWidth: '90%',
                                    maxHeight: '90vh',
                                    borderRadius: '10px',
                                    boxShadow: '0 0 50px rgba(188, 19, 254, 0.4)'
                                }}
                            />

                            <div style={{ position: 'absolute', bottom: '40px', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.5rem' }}>{selectedImg.title}</h3>
                                <p style={{ color: '#888' }}>{selectedImg.category}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Gallery;
