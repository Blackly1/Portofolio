import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
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

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#C9D5C1] text-[#111]">

      {/* NAVBAR */}
      <header className="mx-auto w-full max-w-[1380px] px-3 sm:px-8 lg:px-12">
        <nav className="flex h-[72px] items-center justify-between border-b border-black/10 sm:h-[82px]">

          <a
            href="#hero"
            onClick={closeMenu}
            className="text-[22px] font-black tracking-[-0.07em] sm:text-[28px]"
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
              className="inline-flex items-center gap-2 rounded-full bg-[#111] px-5 py-2.5 text-[14px] font-bold text-white"
            >
              Resume
              <Download size={15} />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex items-center gap-2 rounded-full bg-[#111] px-4 py-2.5 text-xs font-extrabold text-white lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="border-b border-black/10 py-3 lg:hidden">
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
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#111] px-5 py-3 text-sm font-bold text-white"
            >
              Resume
              <Download size={15} />
            </Link>
          </div>
        )}
      </header>

      <main>

        {/* HERO */}
        <section
          id="hero"
          className="mx-auto grid w-full max-w-[1380px] gap-10 px-3 pb-20 pt-8 sm:px-8 sm:pt-12 lg:grid-cols-[1.3fr_.7fr] lg:gap-20 lg:px-12 lg:pb-28 lg:pt-16"
        >

          {/* HERO TEXT */}
          <div className="min-w-0 self-center">

            <p className="mb-5 text-[9px] font-black uppercase tracking-[0.12em] sm:mb-6 sm:text-[14px] sm:tracking-[0.17em]">
              Full-Stack Developer · Lagos, Nigeria
            </p>

            <h1 className="max-w-[900px] break-words text-[48px] font-black leading-[0.86] tracking-[-0.075em] sm:text-7xl lg:text-[clamp(72px,9vw,124px)]">
              Building my{" "}
              <em className="not-italic">
                digital future.
              </em>
            </h1>

            <p className="mt-7 max-w-[680px] break-words text-[17px] leading-[1.55] text-[#414940] sm:mt-8 sm:text-[23px]">
              {d.profile}
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">

              <a
                href="#projects"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#111] px-6 py-4 text-sm font-extrabold text-white transition-transform hover:-translate-y-1 sm:w-auto"
              >
                View My Work
                <ArrowRight size={17} />
              </a>

              <a
                href={`mailto:${d.email}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#111] bg-white px-6 py-4 text-sm font-extrabold transition-transform hover:-translate-y-1 sm:w-auto"
              >
                Contact Me
                <Mail size={17} />
              </a>

            </div>
          </div>

          {/* CURRENTLY BUILDING */}
          <div className="flex min-h-[390px] w-full min-w-0 flex-col justify-end overflow-hidden border border-black/10 bg-white p-6 sm:min-h-[430px] sm:p-10">

            <p className="mb-auto text-[10px] font-black uppercase tracking-[0.12em] text-[#5f774f] sm:text-xs">
              ● Currently building
            </p>

            <div className="min-w-0">

              <h2 className="break-words text-[48px] font-black leading-[0.88] tracking-[-0.065em] sm:text-7xl">
                Learning.
              </h2>

              <h2 className="break-words text-[48px] font-black leading-[0.88] tracking-[-0.065em] sm:text-7xl">
                Building.
              </h2>

              <h2 className="break-words text-[48px] font-black leading-[0.88] tracking-[-0.065em] sm:text-7xl">
                Experimenting.
              </h2>

              <div className="my-6 h-px bg-black/10 sm:my-7" />

              <p className="max-w-[320px] break-words text-sm leading-6 text-[#4b5349] sm:text-base sm:leading-7">
                Studying CPISM at APTECH while developing independent
                software projects.
              </p>

            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-y border-black/10">
          <div className="mx-auto grid w-full max-w-[1380px] lg:grid-cols-[170px_1fr]">

            <div className="p-6 sm:p-8 lg:p-10">
              <SectionLabel number="01" title="About" />

              <h2 className="mt-4 text-3xl font-black leading-none tracking-[-0.05em]">
                Who I am
              </h2>
            </div>

            <div className="border-t border-black/10 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <p className="max-w-5xl text-xl leading-[1.5] sm:text-2xl lg:text-3xl">
                {d.profile}
              </p>
            </div>

          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="border-b border-black/10">
          <div className="mx-auto grid w-full max-w-[1380px] lg:grid-cols-[170px_1fr]">

            <div className="p-6 sm:p-8 lg:p-10">
              <SectionLabel number="02" title="Skills" />

              <h2 className="mt-4 text-3xl font-black leading-none tracking-[-0.05em]">
                What I
                <br />
                work with
              </h2>
            </div>

            <div className="grid min-w-0 grid-cols-1 border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3 lg:border-l lg:border-t-0">

              {Object.entries(d.skills).map(([category, skills]) => (
                <div
                  key={category}
                  className="min-w-0 border-b border-black/10 p-6 sm:p-7 lg:border-r"
                >
                  <h3 className="mb-5 break-words text-base font-extrabold leading-tight">
                    {category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="max-w-full break-words rounded-full bg-white px-3 py-2 text-[13px] font-medium leading-none"
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

        {/* PROJECTS */}
        <section
          id="projects"
          className="mx-auto w-full max-w-[1380px] overflow-hidden px-3 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
        >

          <div className="mb-10 grid gap-6 lg:grid-cols-[170px_1fr]">

            <div>
              <SectionLabel number="03" title="Projects" />

              <h2 className="mt-4 text-3xl font-black leading-none tracking-[-0.05em]">
                Selected
                <br />
                Work
              </h2>
            </div>

            <p className="max-w-2xl self-end text-base leading-7 text-[#4b5349] sm:text-lg">
              A selection of software and design work, including full-stack
              applications, UI/UX projects, data analysis tools and AI-powered
              interfaces.
            </p>

          </div>

          <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {d.projects.map((project, index) => (
              <article
                key={project.title}
                className="group flex min-h-[365px] min-w-0 flex-col overflow-hidden border border-black/10 bg-white p-5 sm:p-6"
              >

                <div className="flex items-center justify-between gap-3">

                  <span className="rounded-md bg-[#C9D5C1] px-2 py-1 text-xs font-black">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="max-w-[60%] break-words text-right text-[10px] font-bold uppercase tracking-wide text-[#5f774f]">
                    {project.status}
                  </span>

                </div>

                <div className="mt-8 min-w-0">

                  <h3 className="break-words text-[23px] font-black leading-[0.98] tracking-[-0.04em]">
                    {project.title}
                  </h3>

                  <p className="mt-2 break-words text-xs font-bold uppercase tracking-wide text-[#5f774f]">
                    {project.type}
                  </p>

                </div>

                <p className="mt-5 break-words text-[14px] leading-6 text-[#4b5349]">
                  {project.description}
                </p>

                <p className="mt-auto break-words pt-7 text-xs font-bold leading-5">
                  {project.stack}
                </p>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit max-w-full items-center gap-2 border-b border-[#111] pb-1 text-xs font-black uppercase tracking-[0.08em]"
                  >
                    {project.action}
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="mt-5 inline-flex w-fit items-center gap-2 text-xs font-black uppercase tracking-[0.08em] text-black/40">
                    {project.action}
                  </span>
                )}

              </article>
            ))}

          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="border-t border-black/10">

          <div className="mx-auto grid w-full max-w-[1380px] lg:grid-cols-2">

            <div className="min-w-0 p-6 sm:p-10 lg:border-r lg:p-12">

              <SectionLabel number="04" title="Experience" />

              <div className="mt-8">

                <h3 className="break-words text-2xl font-black tracking-[-0.04em]">
                  {d.experience.title}
                </h3>

                <p className="mt-1 font-semibold text-[#4b5349]">
                  {d.experience.company}
                </p>

                <p className="mt-1 text-sm text-[#5f774f]">
                  {d.experience.period}
                </p>

                <p className="mt-6 max-w-xl break-words text-base leading-7 text-[#4b5349]">
                  {d.experience.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">

                  <span className="rounded-full bg-white px-4 py-2 text-sm font-bold">
                    Remote
                  </span>

                  <span className="rounded-full bg-white px-4 py-2 text-sm font-bold">
                    Team Collaboration
                  </span>

                </div>

              </div>
            </div>

            {/* EDUCATION */}
            <div className="min-w-0 border-t border-black/10 p-6 sm:p-10 lg:border-t-0 lg:p-12">

              <SectionLabel number="05" title="Education" />

              <div className="mt-8">

                <h3 className="break-words text-2xl font-black tracking-[-0.04em]">
                  {d.education.school}
                </h3>

                <p className="mt-1 font-semibold text-[#4b5349]">
                  {d.education.program}
                </p>

                <p className="mt-1 text-sm text-[#5f774f]">
                  {d.education.period}
                </p>

                <p className="mt-6 break-words text-base leading-7 text-[#4b5349]">
                  {d.education.location}
                </p>

              </div>
            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="overflow-hidden bg-[#111] px-3 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
        >

          <div className="mx-auto w-full max-w-[1380px]">

            <div className="flex items-center gap-3">

              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-xs font-black text-[#111]">
                06
              </span>

              <p className="text-xs font-black uppercase tracking-[0.14em]">
                Contact
              </p>

            </div>

            <h2 className="mt-10 max-w-5xl break-words text-[52px] font-black leading-[0.88] tracking-[-0.075em] sm:text-7xl lg:text-[clamp(60px,8vw,110px)]">
              Let's build
              <br />
              something useful.
            </h2>

            <a
              href={`mailto:${d.email}`}
              className="mt-10 inline-flex max-w-full items-center gap-3 break-all text-base font-bold underline decoration-white/30 underline-offset-8 sm:text-lg"
            >
              <Mail size={19} />
              {d.email}
            </a>

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href={d.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-bold transition-colors hover:bg-white hover:text-[#111]"
              >
                GitHub
                <ExternalLink size={15} />
              </a>

              <a
                href={d.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-bold transition-colors hover:bg-white hover:text-[#111]"
              >
                LinkedIn
                <ExternalLink size={15} />
              </a>

            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#111] px-5 py-7 text-center text-xs text-white/45">
        © {new Date().getFullYear()} {d.name}. Built with React.
      </footer>

    </div>
  );
}

function SectionLabel({ number, title }) {
  return (
    <div className="flex items-center gap-3">

      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#111] text-xs font-black text-white">
        {number}
      </span>

      <p className="text-xs font-black uppercase tracking-[0.14em]">
        {title}
      </p>

    </div>
  );
}