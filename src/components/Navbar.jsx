import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`fixed top-0 left-0 w-full z-navbar glass transition-all duration-500 ${scrolled ? 'py-2 shadow-2xl' : 'py-4'
                }`}
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: '5%',
                paddingRight: '5%',
                borderTop: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                borderRadius: '0 0 20px 20px'
            }}
        >
            <div className="logo cursor-pointer" style={{ fontSize: '1.5rem', fontWeight: 800 }}>
                FEST<span className="text-gradient">2026</span>
            </div>

            <ul style={{
                display: 'flex',
                gap: '30px',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                fontWeight: 600,
                fontSize: '0.9rem'
            }}>
                {['Gallery', 'Highlights'].map((item) => (
                    <li key={item}>
                        <a
                            href={`#${item.toLowerCase()}`}
                            style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s' }}
                            onMouseOver={(e) => e.target.style.color = 'var(--neon-purple)'}
                            onMouseOut={(e) => e.target.style.color = 'white'}
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>


        </motion.nav>
    );
};

export default Navbar;
