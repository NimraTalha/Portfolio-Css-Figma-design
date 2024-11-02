"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from '../app/Style/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 60 }}
    >
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <motion.img
            src="/path/to/logo.png"
            alt="Logo"
            className={styles.logo}
            whileHover={{ scale: 1.1 }} // Scale up on hover
            transition={{ type: "spring", stiffness: 300 }} // Smooth transition
          />
        </div>
        <ul>
          <li>
            <motion.a
              href="#home"
              whileHover={{ scale: 1.1 }} // Scale up on hover
              transition={{ type: "spring", stiffness: 300 }}
            >
              Home
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.1 }} // Scale up on hover
              transition={{ type: "spring", stiffness: 300 }}
            >
              Portfolio
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }} // Scale up on hover
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contact
            </motion.a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
