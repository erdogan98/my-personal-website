import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="about-section">
            {/* Wave shape divider at the top */}
            <div className="wave-divider-top">
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path
                        fill="#111"
                        fillOpacity="1"
                        d="M0,128L60,117.3C120,107,240,85,360,74.7C480,64,600,64,720,85.3C840,107,960,149,1080,176C1200,203,1320,213,1380,218.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                    ></path>
                </svg>
            </div>

            <motion.div
                className="about-content"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <h2>About Me</h2>
                <p>
                    I am an enthusiastic AI Engineer, Data Scientist, and
                    PhD student specializing in Artificial Intelligence.
                </p>
                <p>
                    My mission is to build scalable, explainable, and efficient
                    AI solutions that address real-world problems. I am driven by a
                    constant desire to innovate, collaborate, and push the boundaries
                    of what’s possible.
                </p>
            </motion.div>

            {/* Wave shape divider at the bottom */}
            <div className="wave-divider-bottom">
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path
                        fill="#111"
                        fillOpacity="1"
                        d="M0,64L60,74.7C120,85,240,107,360,144C480,181,600,235,720,256C840,277,960,267,1080,224C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default About;
