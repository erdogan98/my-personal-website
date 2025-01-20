import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for reaching out! (Replace with real contact logic)");
        // Reset or further logic
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="contact-section">
            <motion.div
                className="contact-container"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2>Contact Me</h2>
                <p>
                    I’m always interested in connecting with like-minded professionals,
                    potential collaborators, and anyone curious about AI.
                </p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Message:
                        <textarea
                            name="message"
                            rows="4"
                            required
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit">Send</button>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;
