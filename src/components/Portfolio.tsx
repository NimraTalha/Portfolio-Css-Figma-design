"use client";

import { motion } from "framer-motion";
import styles from "../app/Style/Portfolio.module.css"; 
import Image, { StaticImageData } from "next/image"; 

// Import images directly
import dominoImage from "../images/domino.png";
import project2Image from "../images/figma.png";
import project3Image from "../images/portfolio.png";
import project4Image from "../images/resume.png";
import project5Image from "../images/portfol.png";

interface Project {
  id: number;
  title: string;
  link: string; 
  image: StaticImageData; 
}

const Portfolio: React.FC = () => {
 
  const projects: Project[] = [
    { id: 1, title: "Project 1", link: "https://dominopizza-nrl9.vercel.app/", image: dominoImage },
    { id: 2, title: "Project 2", link: "https://e-commerce-furniture-website-l67o.vercel.app/", image: project2Image },
    { id: 3, title: "Project 3", link: "https://my-webpage-five-sable.vercel.app/", image: project3Image },
    { id: 4, title: "Project 4", link: "https://resume-pdf-chi.vercel.app/", image: project4Image },
    { id: 5, title: "Project 5", link: "https://my-portfolio-orpin-three-56.vercel.app/", image: project5Image },
  ];

  return (
    <section className={styles.portfolio} id="portfolio">
      <h2 className={styles.portfolioHeading}>Portfolio</h2>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <motion.a
            key={project.id}
            className={styles.projectCard}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
              width={200}
              height={200}
              priority // Added priority prop
            />
            <h3 className={styles.projectTitle}>{project.title}</h3>
          </motion.a>
        ))}
      </div>

      {/* About Me Section */}
      <section className={styles.aboutMe}>
        <h2 className={styles.aboutMeHeading}>About Me</h2>
        <hr className={styles.aboutMeLine} />
        <div className={styles.aboutMeContent}>
          <div className={styles.aboutMeDetails}>
            <p className={styles.aboutMeParagraph}>
              I am a passionate web developer with a focus on creating interactive and user-friendly applications. I enjoy exploring new technologies and continuously improving my skills. My goal is to build projects that not only meet user needs but also deliver an excellent user experience. 
              Previously, I worked as a Branch Manager at Breadwork Media in Boston (Online), where I honed my skills in project management and client communication.
            </p>
          </div>

          {/* Skills Section */}
          <div className={styles.skills}>
            <h3 className={styles.skillsHeading}>Skills</h3>
            <div className={styles.skill}>
              <span className={styles.skillNumber}>1</span>
              <h4 className={styles.skillTitle}>Website Design</h4>
              <div className={styles.skillLine} />
              <p className={styles.skillDescription}>
                Technologies: Next.js, TypeScript, HTML5, CSS, Tailwind CSS, JavaScript, Figma
              </p>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillNumber}>2</span>
              <h4 className={styles.skillTitle}>Teaching</h4>
              <div className={styles.skillLine} />
              <p className={styles.skillDescription}>
                Teaching Urdu language to foreigners, focusing on practical communication skills.
              </p>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillNumber}>3</span>
              <h4 className={styles.skillTitle}>Project Management</h4>
              <div className={styles.skillLine} />
              <p className={styles.skillDescription}>
                Experience managing projects and teams effectively to achieve desired outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Skills List in One Line */}
        <div className={styles.skillsList}>
          <span>• Next.js</span>
          <span>• TypeScript</span>
          <span>• HTML5</span>
          <span>• CSS</span>
          <span>• Tailwind CSS</span>
          <span>• JavaScript</span>
          <span>• Figma</span>
        </div>
      </section>
    </section>
  );
};

export default Portfolio;
