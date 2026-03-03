import React from 'react';
import { motion } from 'framer-motion';
import { Music, Mic2, Cpu, Trophy } from 'lucide-react';

const About = () => {
    const features = [
        { icon: <Music size={32} />, title: "Music & Dance", desc: "Electrifying performances that set the stage on fire." },
        { icon: <Mic2 size={32} />, title: "Singing Night", desc: "Soulful melodies and lyrical battles under the stars." },
        { icon: <Cpu size={32} />, title: "Tech & Innovation", desc: "Where creativity meets the future of technology." },
        { icon: <Trophy size={32} />, title: "Sports Arena", desc: "Pure adrenaline and competitive spirit on the field." },
    ];

    return (
        <section id="about" style={{ background: 'var(--dark-bg)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '80px' }}>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '20px' }}
                    >
                        The Heart of <span className="text-gradient">Energy</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ maxWidth: '800px', color: '#888', fontSize: '1.1rem' }}
                    >
                        College Fest 2026 is more than just an event; it's a celebration of talent, culture, and pure joy. Join thousands of students for 3 days of non-stop excitement and unforgettable memories.
                    </motion.p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '30px'
                }}>
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card"
                            style={{ padding: '40px 30px', textAlign: 'center' }}
                        >
                            <div style={{
                                color: 'var(--electric-blue)',
                                marginBottom: '20px',
                                display: 'inline-flex',
                                padding: '15px',
                                background: 'rgba(0, 210, 255, 0.1)',
                                borderRadius: '15px'
                            }}>
                                {item.icon}
                            </div>
                            <h3 style={{ marginBottom: '15px', fontSize: '1.3rem' }}>{item.title}</h3>
                            <p style={{ color: '#888' }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
