import React from "react";
import { motion } from "framer-motion";

const Services = () => {
    const serviceData = [
        {
            title: "AI Engineering",
            description:
                "Building robust and scalable machine learning pipelines, deploying models to production, and exploring new paradigms in AI.",
            icon: "⚙️",
        },
        {
            title: "Data Science",
            description:
                "Expert in extracting actionable insights from large datasets using statistical analysis and advanced machine learning algorithms.",
            icon: "📊",
        },
        {
            title: "Research",
            description:
                "As a PhD student in AI, I specialize in bridging theoretical concepts with real-world applications and knowledge sharing.",
            icon: "🎓",
        },
    ];

    return (
        <section className="services-section">
            <h2>What I Do</h2>
            <div className="services-container">
                {serviceData.map((service, index) => (
                    <motion.div
                        className="service-card glass"
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
