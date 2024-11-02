"use client"

import React from 'react';
import styles from '../app/Style/Contact.module.css';
import { FaEnvelope, FaPhone } from 'react-icons/fa'; // Import specific icons

const Contact: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contactInfo}>
                <h2 className={styles.contactHeading}>Contact Information</h2>
                <div className={styles.infoItem}>
                    <FaEnvelope className={styles.icon} /> {/* Email icon */}
                    <span className={styles.infoText}>nimratalha@gmail.com</span>
                </div>
                <div className={styles.infoItem}>
                    <FaPhone className={styles.icon} /> {/* Phone icon */}
                    <span className={styles.infoText}>+923349766531</span>
                </div>
            </div>
            <form className={styles.contactForm}>
                <h2 className={styles.formHeading}>Get in Touch</h2>
                <div className={styles.formGroup}>
                    <label className={styles.formGroupLabel} htmlFor="name">Name</label>
                    <input className={styles.formGroupInput} type="text" id="name" required />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formGroupLabel} htmlFor="email">Email</label>
                    <input className={styles.formGroupInput} type="email" id="email" required />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formGroupLabel} htmlFor="message">Message</label>
                    <textarea className={styles.messageTextarea} id="message" required></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
