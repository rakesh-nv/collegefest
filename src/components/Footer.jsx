import React from 'react';
import { Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--dark-bg)',
            padding: '80px 5% 40px',
            borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '40px',
                marginBottom: '60px'
            }}>
                <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>FEST<span className="text-gradient">2026</span></h3>
                    <p style={{ color: '#888', marginBottom: '25px' }}>
                        The premier college festival of the year. Music, technology, art, and pure energy collide for an unforgettable experience.
                    </p>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                style={{
                                    color: 'white',
                                    background: 'rgba(255,255,255,0.05)',
                                    padding: '10px',
                                    borderRadius: '10px',
                                    transition: '0.3s'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = 'var(--neon-purple)';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 style={{ marginBottom: '20px', color: 'var(--electric-blue)' }}>Quick Links</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {['About Us', 'Event Schedule', 'Photography', 'Registration', 'Sponsors'].map(link => (
                            <li key={link} style={{ marginBottom: '12px' }}>
                                <a href="#" style={{ color: '#888', textDecoration: 'none', transition: '0.3s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#888'}>
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 style={{ marginBottom: '20px', color: 'var(--electric-blue)' }}>Contact Info</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ display: 'flex', gap: '10px', alignItems: 'center', color: '#888', marginBottom: '15px' }}>
                            <MapPin size={18} /> University Campus, Main Stage, City
                        </li>
                        <li style={{ display: 'flex', gap: '10px', alignItems: 'center', color: '#888', marginBottom: '15px' }}>
                            <Phone size={18} /> +1 234 567 890
                        </li>
                        <li style={{ display: 'flex', gap: '10px', alignItems: 'center', color: '#888', marginBottom: '15px' }}>
                            <Mail size={18} /> support@fest2026.com
                        </li>
                    </ul>
                </div>
            </div>

            <div style={{
                textAlign: 'center',
                paddingTop: '40px',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                color: '#555',
                fontSize: '0.9rem'
            }}>
                &copy; 2026 College Fest. Designed with energy and passion.
            </div>
        </footer>
    );
};

export default Footer;
