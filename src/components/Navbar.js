import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
            className="navbar"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="nav-container">
                <div className="nav-logo">Erdoğan Kervanlı</div>
                <ul className="nav-links">
                    {/* 'spy' highlights link if in that section, 'smooth' for smooth scroll */}
                    <li>
                        <Link to="home" spy={true} smooth={true} offset={-80} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                        >
                            Projects
                        </Link>
                    </li>
                    {/*<li>*/}
                    {/*    <Link to="kitesurf" spy={true} smooth={true} offset={-80} duration={500}>*/}
                    {/*        Kitesurf*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                    <li>

                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
