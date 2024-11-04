"use client";

import React from "react";
import Image from "next/image";
import profilepic from "@/images/logo.png"; 
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import styles from "@/app/Style/Home.module.css"; 
import Footer from "@/components/Footer";

const detailsText = "I am a creative developer from Pakistan, with a passion for design and coding.";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className={styles.homeContainer}>
                <section id="home" className={styles.homeSection}>
                    {/* Profile Details */}
                    <div className={styles.profileDetails}>
                        <h1 className={styles.name}>Nimra Talha</h1>
                        <p className={styles.jobTitle}>Creative Developer</p>
                        <p className={styles.details}>
                            {detailsText}
                        </p>
                    </div>

                    {/* Profile Image */}
                    <div className={styles.profileImageContainer}>
                        <Image
                            src={profilepic}
                            alt="Profile"
                            className={styles.profileImage}
                            height={350} 
                            width={350}  
                        />
                    </div>
                </section>

                {/* Hero Section */}
                <section id="portfolio">
                    <Hero />
                </section>

                {/* Portfolio Section */}
                <section id="portfolio">
                    <Portfolio />
                </section>

                {/* Contact Section */}
                <section id="contact">
                    <Contact />
                </section>

                <Footer />
            </div>
        </>
    );
}
