import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUp,
  Mail,
  ExternalLink,
  Menu,
  X,
  Download,
} from "lucide-react";

import { portfolioData as d } from "../data/portfolioData";

const navItems = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      setShowTop(scrollTop > 450);

      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (documentHeight > 0) {
        setScrollProgress(
          (scrollTop / documentHeight) * 100
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const elements =
      document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "reveal-visible"
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site-page">

      {/* ================= SCROLL PROGRESS ================= */}

      <div className="scroll-progress">
        <div
          className="scroll-progress-bar"
          style={{
            width: `${scrollProgress}%`,
          }}
        />
      </div>


      {/* ================= NAVBAR ================= */}

      <header className="site-header">

        <div className="container">

          <nav className="navbar">

            <a
              href="#hero"
              className="brand"
              onClick={closeMenu}
            >
              DAVID.
            </a>


            {/* DESKTOP NAV */}

            <div className="desktop-nav">

              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="nav-link"
                >
                  {label}
                </a>
              ))}

              <Link
                to="/resume"
                className="nav-resume"
              >
                Resume
                <Download size={15} />
              </Link>

            </div>


            {/* MOBILE MENU BUTTON */}

            <button
              className="mobile-menu-button"
              onClick={() =>
                setMenuOpen((value) => !value)
              }
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X size={18} />
              ) : (
                <Menu size={18} />
              )}

              <span>
                {menuOpen ? "CLOSE" : "MENU"}
              </span>
            </button>

          </nav>


          {/* MOBILE NAV */}

          <div
            className={`mobile-nav ${
              menuOpen ? "mobile-nav-open" : ""
            }`}
          >

            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}

            <Link
              to="/resume"
              onClick={closeMenu}
              className="mobile-resume"
            >
              Resume
              <Download size={15} />
            </Link>

          </div>

        </div>

      </header>


      {/* ================= HERO ================= */}

      <main>

        <section
          id="hero"
          className="hero-section"
        >

          <div className="container hero-grid">

            <div className="hero-content">

              <div
                className="reveal"
                style={{
                  transitionDelay: "0ms",
                }}
              >

                <p className="eyebrow">
                  FULL-STACK DEVELOPER · LAGOS,
                  NIGERIA
                </p>

              </div>


              <div
                className="reveal"
                style={{
                  transitionDelay: "100ms",
                }}
              >

                <h1 className="hero-title">
                  Building my{" "}
                  <span>digital future.</span>
                </h1>

              </div>


              <div
                className="reveal"
                style={{
                  transitionDelay: "180ms",
                }}
              >

                <p className="hero-description">
                  {d.profile}
                </p>

              </div>


              <div
                className="hero-actions reveal"
                style={{
                  transitionDelay: "260ms",
                }}
              >

                <a
                  href="#projects"
                  className="primary-button"
                >
                  View My Work
                  <ArrowRight size={16} />
                </a>

                <a
                  href={`mailto:${d.email}`}
                  className="secondary-button"
                >
                  Contact Me
                  <Mail size={16} />
                </a>

              </div>

            </div>


            {/* HERO CARD */}

            <div
              className="hero-card reveal"
              style={{
                transitionDelay: "180ms",
              }}
            >

              <div className="hero-card-top">

                <span className="status">

                  <span className="status-dot">
                    <span />
                  </span>

                  Currently building

                </span>

              </div>


              <div>

                <h2>Learning.</h2>
                <h2>Building.</h2>
                <h2>Experimenting.</h2>

                <div className="hero-card-line" />

                <p>
                  Studying CPISM at APTECH while
                  developing independent software
                  projects.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= ABOUT ================= */}

        <section
          id="about"
          className="section-bordered"
        >

          <div className="container section-padding">

            <div
              className="reveal"
            >
              <SectionLabel
                number="01"
                title="About"
              />
            </div>


            <div className="about-grid">

              <div
                className="reveal"
                style={{
                  transitionDelay: "80ms",
                }}
              >

                <p className="small-green-text">
                  WHO I AM
                </p>

                <h2 className="section-heading">
                  Building useful digital products.
                </h2>

              </div>


              <div
                className="about-description reveal"
                style={{
                  transitionDelay: "160ms",
                }}
              >

                <p>
                  I’m a full-stack developer focused
                  on building modern, responsive and
                  practical digital products. I work
                  across frontend development,
                  backend systems, databases, APIs,
                  UI/UX design and deployment.
                </p>

              </div>

            </div>


            {/* ABOUT CARDS */}

            <div className="about-cards">

              <RevealCard delay="0ms">
                <AboutCard
                  number="01"
                  title="Development"
                  text="React, JavaScript, Node.js, databases, APIs and responsive web applications."
                />
              </RevealCard>

              <RevealCard delay="80ms">
                <AboutCard
                  number="02"
                  title="Design"
                  text="Figma, UI/UX, wireframing, prototyping and reusable design systems."
                />
              </RevealCard>

              <RevealCard delay="160ms">
                <AboutCard
                  number="03"
                  title="Work"
                  text="Remote collaboration, teamwork, problem solving and building real-world software."
                />
              </RevealCard>

            </div>

          </div>

        </section>


        {/* ================= SKILLS ================= */}

        <section
          id="skills"
          className="section-bordered"
        >

          <div className="container section-padding">

            <div className="reveal">

              <SectionLabel
                number="02"
                title="Skills"
              />

            </div>


            <div className="skills-layout">

              <div
                className="reveal"
                style={{
                  transitionDelay: "80ms",
                }}
              >

                <h2 className="section-heading">
                  What I
                  <br />
                  work with
                </h2>

              </div>


              <div className="skills-grid">

                {Object.entries(d.skills).map(
                  ([category, skills], index) => (
                    <div
                      key={category}
                      className="skill-group reveal"
                      style={{
                        transitionDelay: `${
                          index * 70
                        }ms`,
                      }}
                    >

                      <h3>
                        {category}
                      </h3>

                      <div className="skill-list">

                        {skills.map((skill) => (
                          <span key={skill}>
                            {skill}
                          </span>
                        ))}

                      </div>

                    </div>
                  )
                )}

              </div>

            </div>

          </div>

        </section>


        {/* ================= PROJECTS ================= */}

        <section
          id="projects"
          className="projects-section"
        >

          <div className="container section-padding">

            <div className="reveal">

              <SectionLabel
                number="03"
                title="Projects"
              />

            </div>


            <div className="projects-layout">

              <div
                className="reveal"
                style={{
                  transitionDelay: "80ms",
                }}
              >

                <h2 className="section-heading">
                  Selected
                  <br />
                  Work
                </h2>

                <p className="side-description">
                  A selection of software and design
                  projects.
                </p>

              </div>


              <div className="projects-grid">

                {d.projects.map(
                  (project, index) => (
                    <article
                      key={project.title}
                      className="project-card reveal"
                      style={{
                        transitionDelay: `${
                          index * 80
                        }ms`,
                      }}
                    >

                      <div className="project-top">

                        <span className="project-number">
                          {String(
                            index + 1
                          ).padStart(2, "0")}
                        </span>

                        <span className="project-status">
                          {project.status}
                        </span>

                      </div>


                      <div className="project-content">

                        <h3>
                          {project.title}
                        </h3>

                        <p className="project-type">
                          {project.type}
                        </p>

                        <p className="project-description">
                          {project.description}
                        </p>

                      </div>


                      <div className="project-bottom">

                        <strong>
                          {project.stack}
                        </strong>


                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            {project.action}
                            <ExternalLink
                              size={14}
                            />
                          </a>
                        ) : (
                          <span className="project-disabled">
                            {project.action}
                          </span>
                        )}

                      </div>

                    </article>
                  )
                )}

              </div>

            </div>

          </div>

        </section>


        {/* ================= EXPERIENCE ================= */}

        <section
          id="experience"
          className="section-bordered"
        >

          <div className="container experience-grid">

            <div
              className="experience-column reveal"
            >

              <SectionLabel
                number="04"
                title="Experience"
              />

              <div className="experience-content">

                <h2>
                  {d.experience.title}
                </h2>

                <p className="experience-company">
                  {d.experience.company}
                </p>

                <p className="experience-period">
                  {d.experience.period}
                </p>

                <p className="experience-description">
                  {d.experience.description}
                </p>


                <div className="tags">

                  <span>
                    Remote Work
                  </span>

                  <span>
                    Team Collaboration
                  </span>

                </div>

              </div>

            </div>


            <div
              className="experience-column education-column reveal"
              style={{
                transitionDelay: "120ms",
              }}
            >

              <SectionLabel
                number="05"
                title="Education"
              />

              <div className="experience-content">

                <h2>
                  {d.education.school}
                </h2>

                <p className="experience-company">
                  {d.education.program}
                </p>

                <p className="experience-period">
                  {d.education.period}
                </p>

                <p className="experience-description">
                  {d.education.location}
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="contact-section"
        >

          <div className="container section-padding">

            <div className="reveal">

              <SectionLabel
                number="06"
                title="Contact"
                dark
              />

            </div>


            <h2
              className="contact-heading reveal"
              style={{
                transitionDelay: "100ms",
              }}
            >
              Let's build something useful.
            </h2>


            <a
              href={`mailto:${d.email}`}
              className="contact-email reveal"
              style={{
                transitionDelay: "180ms",
              }}
            >

              <Mail size={18} />

              {d.email}

            </a>


            <div
              className="social-links reveal"
              style={{
                transitionDelay: "250ms",
              }}
            >

              <SocialButton
                href={d.github}
                label="GitHub"
              />

              <SocialButton
                href={d.linkedin}
                label="LinkedIn"
              />

            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="container">

          © {new Date().getFullYear()}{" "}
          {d.name}. Built with React.

        </div>

      </footer>


      {/* ================= BACK TO TOP ================= */}

      <button
        className={`back-to-top ${
          showTop ? "back-to-top-show" : ""
        }`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >

        <ArrowUp size={19} />

      </button>

    </div>
  );
}


/* =====================================================
   SECTION LABEL
===================================================== */

function SectionLabel({
  number,
  title,
  dark = false,
}) {
  return (
    <div
      className={`section-label ${
        dark ? "section-label-dark" : ""
      }`}
    >

      <span>{number}</span>

      <p>{title}</p>

    </div>
  );
}


/* =====================================================
   ABOUT CARD
===================================================== */

function AboutCard({
  number,
  title,
  text,
}) {
  return (
    <article className="about-card">

      <span className="card-number">
        {number}
      </span>

      <h3>{title}</h3>

      <p>{text}</p>

    </article>
  );
}


/* =====================================================
   REVEAL CARD
===================================================== */

function RevealCard({
  children,
  delay = "0ms",
}) {
  return (
    <div
      className="reveal"
      style={{
        transitionDelay: delay,
      }}
    >
      {children}
    </div>
  );
}


/* =====================================================
   SOCIAL BUTTON
===================================================== */

function SocialButton({
  href,
  label,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-button"
    >
      {label}

      <ExternalLink size={14} />
    </a>
  );
}