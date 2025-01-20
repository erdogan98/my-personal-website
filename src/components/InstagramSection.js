import React from "react";
import { motion } from "framer-motion";

const InstagramSection = () => {
    // Replace these placeholder images with real images or embed code
    const images = [
        {
            src: "https://www.instagram.com/erdogankervanli/reel/C_8XShjoRx-/",
            alt: "Kitesurf Action 1",
        },
        {
            src: "https://www.instagram.com/erdogankervanli/p/C-pEig6Ipw0/",
            alt: "Kitesurf Action 2",
        },
        {
            src: "https://www.instagram.com/erdogankervanli/reel/C06-3F9o883/",
            alt: "Kitesurf Action 3",
        },

    ];

    return (
        <section className="instagram-section">
            <div className="wave-divider-top">
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path
                        fill="#111"
                        d="M0,96L60,117.3C120,139,240,181,360,197.3C480,213,600,203,720,176C840,149,960,107,1080,85.3C1200,64,1320,64,1380,64H1440V0H1380C1320,0,1200,0,1080,0H0V0Z"
                    ></path>
                </svg>
            </div>

            <motion.div
                className="instagram-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <h2>Kitesurfing Highlights</h2>
                <p className="instagram-intro">
                    When I’m not innovating in AI, you might find me conquering the waves
                    on my kiteboard. Check out some of my favorite kitesurfing moments,
                    and feel free to follow me on Instagram for more!
                </p>
                <div className="instagram-grid">
                    {images.map((img, index) => (
                        <motion.div
                            className="instagram-card"
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <img src={img.src} alt={img.alt} />
                        </motion.div>
                    ))}
                </div>
                <a
                    href="https://www.instagram.com/erdogankervanli/"
                    target="_blank"
                    rel="noreferrer"
                    className="instagram-link"
                >
                    Visit My Instagram
                </a>
            </motion.div>

            <div className="wave-divider-bottom">
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path
                        fill="#111"
                        d="M0,64L60,85.3C120,107,240,149,360,176C480,203,600,213,720,186.7C840,160,960,96,1080,101.3C1200,107,1320,181,1380,213.3L1440,245V0H1380C1320,0,1200,0,1080,0H0V0Z"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default InstagramSection;
