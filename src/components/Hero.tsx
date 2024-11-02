"use client";

import style from "@/app/Style/Hero.module.css"; 

export default function Hero() {
  return (
    <div className={style.hero}> {/* Apply the hero class from CSS */}
      <h1>Welcome to My Portfolio</h1> {/* Use an h1 element for the main title */}
      <p>Explore my projects and experience in web development.</p> {/* Paragraph description */}
    </div>
  );
}
