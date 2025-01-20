import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-overlay" />
            <motion.div
                className="hero-content"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1>Hello, I'm Erdoğan</h1>
                <p>AI Engineer | Data Scientist | PhD Student | Kitesurfer </p>
                <a href="#about" className="hero-cta">
                    Learn More
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
