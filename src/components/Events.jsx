import React from 'react';
import { motion } from 'framer-motion';
import danceImg from '../assets/images/dance.png';
import fashionImg from '../assets/images/fashion.png';
import techImg from '../assets/images/tech.png';
import sportsImg from '../assets/images/sports.png';

const Events = () => {
    const events = [
        { title: "Dance Battle", img: danceImg, date: "March 5th", category: "Performance" },
        { title: "Vogue Night", img: fashionImg, date: "March 6th", category: "Fashion" },
        { title: "Code Rush", img: techImg, date: "March 5th", category: "Technical" },
        { title: "Slam Dunk", img: sportsImg, date: "March 7th", category: "Sports" },
    ];

    return (
        <section id="events" style={{ background: 'var(--dark-surface)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem' }}>Upcoming <span className="text-gradient">Highlights</span></h2>
                    <p style={{ color: '#888' }}>Mark your calendars for the main stages.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px'
                }}>
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="glass"
                            style={{ overflow: 'hidden', padding: 0 }}
                        >
                            <div style={{ height: '250px', position: 'relative', overflow: 'hidden' }}>
                                <img src={event.img} alt={event.title} style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease'
                                }} />
                                <div style={{
                                    position: 'absolute',
                                    top: '15px',
                                    right: '15px',
                                    zIndex: 2
                                }}>
                                    <span style={{
                                        background: 'var(--neon-purple)',
                                        padding: '5px 12px',
                                        borderRadius: '20px',
                                        fontSize: '0.7rem',
                                        fontWeight: 700
                                    }}>
                                        {event.category}
                                    </span>
                                </div>
                            </div>
                            <div style={{ padding: '25px' }}>
                                <h3 style={{ marginBottom: '5px' }}>{event.title}</h3>
                                <p style={{ color: 'var(--electric-blue)', fontSize: '0.9rem', fontWeight: 600 }}>{event.date}</p>
                                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <button style={{
                                        background: 'transparent',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        color: 'white',
                                        padding: '8px 15px',
                                        borderRadius: '10px',
                                        fontSize: '0.8rem',
                                        cursor: 'pointer'
                                    }}>
                                        Details
                                    </button>
                                    <span style={{ fontSize: '0.8rem', color: '#666' }}>Seats limited</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
