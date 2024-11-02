"use client";
import React from 'react';
import styles from '../app/Style/Footer.module.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Make sure to install react-icons

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.rights}>
                    Nimra Talha © 2024. All Rights Reserved.
                </div>
                <div className={styles.socialIcons}>
                    <a 
                        href="https://www.facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.icon} 
                        title="Check out my Facebook"
                        aria-label="Check out my Facebook"
                    >
                        <FaFacebookF />
                        <span className="sr-only">Facebook</span> {/* Visually hidden text */}
                    </a>
                    <a 
                        href="https://www.instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.icon} 
                        title="Check out my Instagram"
                        aria-label="Check out my Instagram"
                    >
                        <FaInstagram />
                        <span className="sr-only">Instagram</span> {/* Visually hidden text */}
                    </a>
                    <a 
                        href="https://www.linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.icon} 
                        title="Check out my LinkedIn"
                        aria-label="Check out my LinkedIn"
                    >
                        <FaLinkedinIn />
                        <span className="sr-only">LinkedIn</span> {/* Visually hidden text */}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
