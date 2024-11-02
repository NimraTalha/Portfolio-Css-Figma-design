"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import profilepic from "@/images/logo.png"; // Ensure this path is correct
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import styles from "@/app/Style/Home.module.css"; // Adjust the path accordingly
import Footer from "@/components/Footer";

const detailsText = "I’m a creative developer from Pakistan, with a passion for design and coding.";

export default function Home() {
    const [displayedWords, setDisplayedWords] = useState<string[]>([]);
    const words = detailsText.split(" "); // Split the text into words

    useEffect(() => {
        let index = 0; // Index for the current word
        const interval = setInterval(() => {
            if (index < words.length) {
                setDisplayedWords((prev) => [...prev, words[index]]);
                index++;
            } else {
                setTimeout(() => {
                    setDisplayedWords([]); // Clear words after they are displayed
                    index = 0; // Reset index
                }, 2000); // Delay before clearing
            }
        }, 1000); // Change word every second

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, [words]); // Add words to the dependency array

    return (
        <>
            <Navbar />
            <div className={styles.homeContainer}>
                <section className={styles.homeSection}>
                    {/* Profile Details */}
                    <div className={styles.profileDetails}>
                        <h1 className={styles.name}>Nimra Talha</h1>
                        <p className={styles.jobTitle}>Creative Developer</p>
                        <p className={styles.details}>
                            {displayedWords.map((word, index) => (
                                <span key={index} className={styles.word}>
                                    {word}&nbsp; {/* Add a non-breaking space here */}
                                </span>
                            ))}
                        </p>
                    </div>

                    {/* Profile Image */}
                    <div className={styles.profileImageContainer}>
                        <Image
                            src={profilepic}
                            alt="Profile"
                            className={styles.profileImage}
                            height={350} // Customize height here
                            width={350}  // Customize width here
                        />
                    </div>
                </section>

                <Hero />
                <Portfolio />
                <Contact />
                <Footer/>
            </div>
        </>
    );
}
