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
        <ul>
          <motion.li
            whileHover={{ scale: 1.1 }} 
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href="#home">Home</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }} 
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href="#portfolio">Portfolio</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }} 
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href="#contact">Contact</a>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
