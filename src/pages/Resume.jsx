import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { jsPDF } from "jspdf";
import { portfolioData as d } from "../data/portfolioData";
import "../resume.css";

export default function Resume() {
  const downloadResume = () => {
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = 210;
    const pageHeight = 297;

    const margin = 18;
    const contentWidth = pageWidth - margin * 2;

    let y = 20;

    const black = [17, 17, 17];
    const gray = [80, 80, 80];
    const lightGray = [120, 120, 120];

    // --------------------------------
    // Helper: page check
    // --------------------------------

    const checkPage = (height = 10) => {
      if (y + height > pageHeight - 18) {
        pdf.addPage();
        y = 20;
      }
    };

    // --------------------------------
    // Helper: section heading
    // --------------------------------

    const sectionTitle = (number, title) => {
      checkPage(15);

      pdf.setDrawColor(200, 200, 200);
      pdf.line(margin, y + 3, pageWidth - margin, y + 3);

      y += 9;

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(10);
      pdf.setTextColor(...lightGray);
      pdf.text(number, margin, y);

      pdf.setTextColor(...black);
      pdf.text(title.toUpperCase(), margin + 12, y);

      y += 8;
    };

    // --------------------------------
    // Helper: paragraph
    // --------------------------------

    const paragraph = (
      text,
      fontSize = 9.5,
      color = gray,
      lineHeight = 5
    ) => {
      checkPage(15);

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(fontSize);
      pdf.setTextColor(...color);

      const lines = pdf.splitTextToSize(
        text,
        contentWidth
      );

      for (const line of lines) {
        checkPage(lineHeight);
        pdf.text(line, margin, y);
        y += lineHeight;
      }

      y += 2;
    };

    // --------------------------------
    // HEADER
    // --------------------------------

    pdf.setTextColor(...black);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(25);
    pdf.text(d.name, margin, y);

    y += 8;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);
    pdf.setTextColor(...gray);
    pdf.text(d.title, margin, y);

    // Contact information

    const contactX = 130;
    let contactY = 20;

    pdf.setFontSize(8.5);
    pdf.setTextColor(...gray);

    pdf.text(d.location, contactX, contactY);
    contactY += 5;

    pdf.text(d.email, contactX, contactY);
    contactY += 5;

    pdf.text(d.phone, contactX, contactY);
    contactY += 5;

    pdf.text("github.com/Blackly1", contactX, contactY);
    contactY += 5;

    pdf.text(
      "linkedin.com/in/ugwuna-david-22647841",
      contactX,
      contactY
    );

    y = Math.max(y + 12, contactY + 5);

    // --------------------------------
    // PROFILE
    // --------------------------------

    sectionTitle("01", "Profile");

    paragraph(d.profile, 10, gray, 5.2);

    // --------------------------------
    // SKILLS
    // --------------------------------

    sectionTitle("02", "Technical Skills");

    Object.entries(d.skills).forEach(
      ([category, skills]) => {
        checkPage(12);

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(9);
        pdf.setTextColor(...black);

        pdf.text(category, margin, y);

        y += 5;

        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(8.8);
        pdf.setTextColor(...gray);

        const skillText = skills.join(" · ");

        const lines = pdf.splitTextToSize(
          skillText,
          contentWidth
        );

        lines.forEach((line) => {
          checkPage(5);
          pdf.text(line, margin, y);
          y += 4.8;
        });

        y += 3;
      }
    );

    // --------------------------------
    // PROJECTS
    // --------------------------------

    sectionTitle("03", "Selected Projects");

    d.projects.forEach((project, index) => {
      checkPage(25);

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(10);
      pdf.setTextColor(...black);

      pdf.text(
        `${String(index + 1).padStart(2, "0")} · ${project.title}`,
        margin,
        y
      );

      y += 5;

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8.5);
      pdf.setTextColor(...lightGray);

      pdf.text(
        `${project.type} · ${project.status}`,
        margin,
        y
      );

      y += 5;

      paragraph(
        project.description,
        8.8,
        gray,
        4.7
      );

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(8.5);
      pdf.setTextColor(...black);

      const stackLines = pdf.splitTextToSize(
        project.stack,
        contentWidth
      );

      stackLines.forEach((line) => {
        checkPage(5);
        pdf.text(line, margin, y);
        y += 4.5;
      });

      y += 4;
    });

    // --------------------------------
    // EXPERIENCE
    // --------------------------------

    sectionTitle("04", "Experience");

    checkPage(20);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10);
    pdf.setTextColor(...black);

    pdf.text(d.experience.title, margin, y);

    y += 5;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8.8);
    pdf.setTextColor(...gray);

    pdf.text(
      `${d.experience.company} · ${d.experience.period}`,
      margin,
      y
    );

    y += 6;

    paragraph(
      d.experience.description,
      9,
      gray,
      5
    );

    // --------------------------------
    // EDUCATION
    // --------------------------------

    sectionTitle("05", "Education");

    checkPage(20);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10);
    pdf.setTextColor(...black);

    pdf.text(d.education.school, margin, y);

    y += 5;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8.8);
    pdf.setTextColor(...gray);

    pdf.text(d.education.program, margin, y);

    y += 5;

    pdf.text(
      `${d.education.location} · ${d.education.period}`,
      margin,
      y
    );

    y += 10;

    // --------------------------------
    // FOOTER
    // --------------------------------

    const totalPages = pdf.internal.getNumberOfPages();

    for (let page = 1; page <= totalPages; page++) {
      pdf.setPage(page);

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(7.5);
      pdf.setTextColor(150, 150, 150);

      pdf.text(
        `${d.name} · Resume`,
        margin,
        pageHeight - 10
      );

      pdf.text(
        `${page} / ${totalPages}`,
        pageWidth - margin,
        pageHeight - 10,
        { align: "right" }
      );
    }

    // --------------------------------
    // DOWNLOAD
    // --------------------------------

    pdf.save(
      "Ugwuna-David-Ikechukwu-Resume.pdf"
    );
  };

  return (
    <main className="resume-page">

      {/* TOOLBAR */}

      <div className="resume-toolbar">

        <Link to="/">
          ← Back to Portfolio
        </Link>

        <button
          type="button"
          onClick={downloadResume}
          className="resume-download"
        >
          <Download size={17} />
          Download Resume (PDF)
        </button>

      </div>

      {/* RESUME */}

      <article className="resume">

        {/* HEADER */}

        <header className="resume-header">

          <div>
            <p className="resume-label">
              RESUME
            </p>

            <h1>
              {d.name}
            </h1>

            <p className="resume-job">
              {d.title}
            </p>
          </div>

          <div className="resume-contact">

            <span>
              {d.location}
            </span>

            <a href={`mailto:${d.email}`}>
              {d.email}
            </a>

            <a href={`tel:${d.phone}`}>
              {d.phone}
            </a>

            <a
              href={d.github}
              target="_blank"
              rel="noreferrer"
            >
              github.com/Blackly1
            </a>

            <a
              href={d.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/ugwuna-david-22647841
            </a>

          </div>

        </header>

        {/* PROFILE */}

        <ResumeBlock
          n="01"
          t="Profile"
        >
          <p>
            {d.profile}
          </p>
        </ResumeBlock>

        {/* SKILLS */}

        <ResumeBlock
          n="02"
          t="Technical Skills"
        >

          <div className="resume-skills">

            {Object.entries(d.skills).map(
              ([category, skills]) => (

                <div key={category}>

                  <b>
                    {category}
                  </b>

                  <p>
                    {skills.join(" · ")}
                  </p>

                </div>

              )
            )}

          </div>

        </ResumeBlock>

        {/* PROJECTS */}

        <ResumeBlock
          n="03"
          t="Selected Projects"
        >

          {d.projects.map(
            (project, index) => (

              <div
                className="resume-project"
                key={project.title}
              >

                <b>
                  {String(index + 1).padStart(2, "0")}
                  {" · "}
                  {project.title}
                </b>

                <small>
                  {project.type}
                  {" · "}
                  {project.status}
                </small>

                <p>
                  {project.description}
                </p>

                <strong>
                  {project.stack}
                </strong>

              </div>

            )
          )}

        </ResumeBlock>

        {/* EXPERIENCE + EDUCATION */}

        <div className="resume-two-col">

          <ResumeBlock
            n="04"
            t="Experience"
          >

            <b>
              {d.experience.title}
            </b>

            <p>
              {d.experience.company}
              {" · "}
              {d.experience.period}
            </p>

            <p>
              {d.experience.description}
            </p>

          </ResumeBlock>

          <ResumeBlock
            n="05"
            t="Education"
          >

            <b>
              {d.education.school}
            </b>

            <p>
              {d.education.program}
            </p>

            <p>
              {d.education.location}
              {" · "}
              {d.education.period}
            </p>

          </ResumeBlock>

        </div>

      </article>

    </main>
  );
}


function ResumeBlock({
  n,
  t,
  children,
}) {
  return (
    <section className="resume-section">

      <div className="resume-section-head">

        <span>
          {n}
        </span>

        <h2>
          {t}
        </h2>

      </div>

      {children}

    </section>
  );
}