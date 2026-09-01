import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  ExternalLink,
  Menu,
  X,
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

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#C9D5C1] text-[#111]">

      {/* ================= NAVBAR ================= */}

      <header className="mx-auto w-full max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <nav className="flex h-[82px] items-center justify-between border-b border-black/15">

          <a
            href="#hero"
            onClick={closeMenu}
            className="text-[25px] font-black tracking-[-0.07em] sm:text-[28px]"
          >
            DAVID.
          </a>

          {/* DESKTOP NAV */}

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[14px] font-bold transition-opacity hover:opacity-50"
              >
                {label}
              </a>
            ))}

            <Link
              to="/resume"
              className="inline-flex items-center rounded-full bg-[#111] px-5 py-2.5 text-[14px] font-bold text-white"
            >
              Resume
            </Link>
          </div>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex items-center gap-2 rounded-full bg-[#111] px-4 py-2.5 text-xs font-extrabold text-white lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
        </nav>

        {/* MOBILE MENU */}

        {menuOpen && (
          <div className="border-b border-black/15 py-3 lg:hidden">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className="block border-b border-black/10 py-4 text-lg font-bold last:border-0"
              >
                {label}
              </a>
            ))}

            <Link
              to="/resume"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center rounded-full bg-[#111] px-5 py-3 text-sm font-bold text-white"
            >
              Resume
            </Link>
          </div>
        )}
      </header>

      <main>

        {/* ================= HERO ================= */}

        <section
          id="hero"
          className="mx-auto grid w-full max-w-[1380px] gap-12 px-5 pb-24 pt-20 sm:px-8 sm:pt-24 lg:grid-cols-[1.3fr_.7fr] lg:gap-20 lg:px-12 lg:pb-28"
        >
          <div className="self-center">

            <p className="mb-6 text-[12px] font-black uppercase tracking-[0.17em] sm:text-[14px]">
              Full-Stack Developer · Lagos, Nigeria
            </p>

            <h1 className="max-w-[900px] text-[clamp(58px,9vw,124px)] font-black leading-[.86] tracking-[-0.075em]">
              Building my{" "}
              <em className="not-italic">
                digital future.
              </em>
            </h1>

            <p className="mt-8 max-w-[680px] text-[20px] leading-[1.55] text-[#414940] sm:text-[23px]">
              {d.profile}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111] px-6 py-4 text-sm font-extrabold text-white transition-transform hover:-translate-y-1"
              >
                View My Work
                <ArrowRight size={17} />
              </a>

              <a
                href={`mailto:${d.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#111] bg-white px-6 py-4 text-sm font-extrabold"
              >
                Contact Me
                <Mail size={17} />
              </a>

            </div>
          </div>

          {/* HERO CARD */}

          <div className="flex min-h-[390px] flex-col justify-end border border-black/10 bg-white p-8 sm:p-10">

            <p className="mb-auto text-xs font-black uppercase tracking-[0.12em] text-[#5f774f]">
              ● Currently building
            </p>

            <div>
              <h2 className="text-[clamp(50px,6vw,76px)] font-black leading-[.88] tracking-[-0.065em]">
                Learning.
                <br />
                Building.
                <br />
                Experimenting.
              </h2>

              <div className="my-7 h-px bg-black/10" />

              <p className="max-w-[300px] text-base leading-7 text-[#4b5349]">
                Studying CPISM at APTECH while developing independent software projects.
              </p>
            </div>

          </div>
        </section>


        {/* ================= SKILLS ================= */}

        <section
          id="skills"
          className="border-y border-black/10"
        >
          <div className="mx-auto grid w-full max-w-[1380px] grid-cols-1 lg:grid-cols-[170px_1fr]">

            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#5f774f]">
                Skills
              </p>

              <h2 className="mt-3 text-3xl font-black leading-none tracking-[-0.05em]">
                What I
                <br />
                work with
              </h2>
            </div>

            <div className="grid grid-cols-1 border-black/10 sm:grid-cols-2 lg:grid-cols-3 lg:border-l">
              {Object.entries(d.skills).map(([category, skills]) => (
                <div
                  key={category}
                  className="border-t border-black/10 p-6 sm:p-7 lg:border-r lg:border-t-0"
                >
                  <h3 className="mb-5 text-base font-extrabold leading-tight">
                    {category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-white px-3 py-2 text-[13px] font-medium leading-none"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ================= PROJECTS ================= */}

        <section
          id="projects"
          className="mx-auto w-full max-w-[1380px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24"
        >

          <div className="mb-10 grid gap-6 lg:grid-cols-[170px_1fr]">

            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#5f774f]">
                Projects
              </p>

              <h2 className="mt-3 text-3xl font-black leading-none tracking-[-0.05em]">
                Selected
                <br />
                Work
              </h2>
            </div>

            <p className="max-w-2xl self-end text-lg leading-7 text-[#4b5349]">
              A selection of software and design work. Explore the projects to see what I have been building.
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {d.projects.map((project, index) => (
              <article
                key={project.title}
                className="group flex min-h-[365px] flex-col border border-black/10 bg-white p-5 sm:p-6"
              >

                <div className="flex items-center justify-between">

                  <span className="rounded-md bg-[#C9D5C1] px-2 py-1 text-xs font-black">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[11px] font-bold uppercase tracking-wide text-[#5f774f]">
                    {project.status}
                  </span>

                </div>

                <div className="mt-8">

                  <h3 className="text-[23px] font-black leading-[.98] tracking-[-0.04em]">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs font-bold uppercase tracking-wide text-[#5f774f]">
                    {project.type}
                  </p>

                </div>

                <p className="mt-5 text-[14px] leading-6 text-[#4b5349]">
                  {project.description}
                </p>

                <p className="mt-auto pt-7 text-xs font-bold leading-5">
                  {project.stack}
                </p>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit items-center gap-2 border-b border-[#111] pb-1 text-xs font-black uppercase tracking-[0.08em]"
                  >
                    {project.action || "View Project"}
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="mt-5 inline-flex w-fit items-center gap-2 text-xs font-black uppercase tracking-[0.08em] text-black/40">
                    {project.action || "In Development"}
                  </span>
                )}

              </article>
            ))}

          </div>
        </section>


        {/* ================= EXPERIENCE ================= */}

        <section
          id="experience"
          className="border-t border-black/10"
        >
          <div className="mx-auto grid w-full max-w-[1380px] gap-0 lg:grid-cols-2">

            <div className="p-8 sm:p-10 lg:border-r lg:p-12">

              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#5f774f]">
                Experience
              </p>

              <div className="mt-8">

                <h3 className="text-2xl font-black tracking-[-0.04em]">
                  {d.experience.title}
                </h3>

                <p className="mt-1 font-semibold text-[#4b5349]">
                  {d.experience.company}
                </p>

                <p className="mt-1 text-sm text-[#5f774f]">
                  {d.experience.period}
                </p>

                <p className="mt-6 max-w-xl text-base leading-7 text-[#4b5349]">
                  {d.experience.description}
                </p>

              </div>
            </div>


            {/* EDUCATION */}

            <div className="border-t border-black/10 p-8 sm:p-10 lg:border-t-0 lg:p-12">

              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#5f774f]">
                Education
              </p>

              <div className="mt-8">

                <h3 className="text-2xl font-black tracking-[-0.04em]">
                  {d.education.school}
                </h3>

                <p className="mt-1 font-semibold text-[#4b5349]">
                  {d.education.program}
                </p>

                <p className="mt-1 text-sm text-[#5f774f]">
                  {d.education.period}
                </p>

                <p className="mt-6 text-base leading-7 text-[#4b5349]">
                  {d.education.location}
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* ================= RESUME ================= */}

        <section
          id="resume"
          className="border-t border-black/10"
        >
          <div className="mx-auto flex w-full max-w-[1380px] flex-col gap-6 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">

            <div>

              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#5f774f]">
                Career document
              </p>

              <h2 className="mt-2 text-4xl font-black tracking-[-0.06em]">
                Want the quick version?
              </h2>

              <p className="mt-2 text-[#4b5349]">
                View my resume separately from this portfolio.
              </p>

            </div>

            <Link
              to="/resume"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#111] px-6 py-4 text-sm font-extrabold text-white"
            >
              View Resume
              <ArrowRight size={17} />
            </Link>

          </div>
        </section>


        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="bg-[#111] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
        >
          <div className="mx-auto w-full max-w-[1380px]">

            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#C9D5C1]">
              Let's connect
            </p>

            <h2 className="mt-8 max-w-5xl text-[clamp(55px,8vw,110px)] font-black leading-[.88] tracking-[-0.075em]">
              Let's build something
              <br />
              <em className="not-italic">
                useful.
              </em>
            </h2>

            <a
              href={`mailto:${d.email}`}
              className="mt-10 inline-flex items-center gap-3 text-lg font-bold underline decoration-white/30 underline-offset-8"
            >
              <Mail size={19} />
              {d.email}
            </a>

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href={d.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-bold transition hover:bg-white hover:text-[#111]"
              >
                GitHub
                <ExternalLink size={15} />
              </a>

              <a
                href={d.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-bold transition hover:bg-white hover:text-[#111]"
              >
                LinkedIn
                <ExternalLink size={15} />
              </a>

            </div>

          </div>
        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="bg-[#111] px-5 py-7 text-center text-xs text-white/45">
        © {new Date().getFullYear()} {d.name}. Built with React.
      </footer>

    </div>
  );
}