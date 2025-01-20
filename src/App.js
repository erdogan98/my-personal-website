import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import InstagramSection from "./components/InstagramSection"; // <-- NEW
import Footer from "./components/Footer";
import { Element } from "react-scroll";
import './App.css'
function App() {
    return (
        <>
            <Navbar />
            <Element name="home">
                <Hero />
            </Element>

            <Element name="about">
                <About />
            </Element>

            <Element name="services">
                <Services />
            </Element>

            <Element name="projects">
                <Projects />
            </Element>

            {/* NEW INSTAGRAM SECTION */}
            {/*<Element name="kitesurf">*/}
            {/*    <InstagramSection />*/}
            {/*</Element>*/}

            <Element name="contact">
                <Contact />
            </Element>

            <Footer />
        </>
    );
}

export default App;
