import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  X,
  Phone,
  Link as LinkedIn,
  CodeXml as Github,
  Menu,
  FileText,
} from "lucide-react";

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

const assets = {
  photo: "/IdPhoto.jpg",
  resume: "/documents/RESUME.pdf",
};

const initial = {
  headerName: "My Portfolio",
  name: "Kim Alyson De Leon",
  role: "Computer Science Student",
  about:
    "I’m a fourth-year Computer Science student at Holy Angel University seeking an OJT/internship opportunity in software development or Quality Assurance (QA). Familiar with React, Flutter, and Supabase, with an interest in UI/UX design, software testing, and developing user-friendly and reliable applications.",
  email: "kimalysondln23@gmail.com",
  phone: "+63 905 755 8630",
  linkedin: "https://www.linkedin.com/in/kim-alyson-de-leon-6996b0317/",
  github: "https://github.com/rvraly",
  location: "Pampanga, Philippines",
  availability: "Open to OJT/Internship opportunities",
  links: [
    "https://github.com/rvraly/PabloCoffee",
    "https://github.com/fromHELIO/HAUrmony",
    "https://github.com/rvraly/PantryPal",
    "https://github.com/fromHELIO/orangetail-scheduling-system",
  ],
};

const skills = [
  "React.js",
  "JavaScript",
  "HTML & CSS",
  "Python",
  "Java",
  "Supabase",
  "Git & GitHub",
  "VS Code",
  "Figma",
  "Responsive Web Design",
];

const certifications = [
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    provider: "HAU - School of Computing",
    date: "2026-04-03",
    dateLabel: "3 Apr 2026",
    type: "Course completion",
    file: "CCNA-_Introduction_to_Networks_certificate_deleonkimalyson02-gmail-com_520fe542-2d0a-4b47-a2ad-2e9ef03c3af5.pdf",
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    provider: "HAU - School of Computing",
    date: "2026-03-19",
    dateLabel: "19 Mar 2026",
    type: "Course completion",
    file: "Data_Analytics_Essentials_certificate.pdf",
  },
  {
    title: "AI Fundamentals with IBM SkillsBuild",
    issuer: "Cisco Networking Academy / IBM SkillsBuild",
    date: "2026-03-08",
    dateLabel: "8 Mar 2026",
    type: "Course completion",
    file: "AI_Fundamentals_with_IBM_SkillsBuild_certificate_deleonkimalyson02-gmail-com_9224841a-7345-43c2-8ca3-8efeccc12907.pdf",
  },
  {
    title: "Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    provider: "HAU - School of Computing",
    date: "2025-11-20",
    dateLabel: "20 Nov 2025",
    type: "Course completion",
    file: "Cyber_Threat_Management_certificate_deleonkimalyson02-gmail-com_54d03f3f-aece-4c83-bb33-91cf2704a128.pdf",
  },
  {
    title: "Endpoint Security",
    issuer: "Cisco Networking Academy",
    provider: "HAU - School of Computing",
    date: "2025-08-28",
    dateLabel: "28 Aug 2025",
    type: "Course completion",
    file: "Endpoint_Security_certificate_deleonkimalyson02-gmail-com_64b8e154-82cc-43a2-81d6-cb1fabb5cee1.pdf",
  },
  {
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy / JavaScript Institute",
    provider: "HAU - School of Computing",
    date: "2024-10-26",
    dateLabel: "26 Oct 2024",
    type: "Course completion",
    file: "JavaScript_Essentials_1_certificate_deleonkimalyson02-gmail-com_f0436624-43ea-4ebc-9296-ad3797ab08cc.pdf",
  },
  {
    title: "CompTIA IT Fundamentals (ITF+)",
    issuer: "CompTIA",
    date: "2023-11-23",
    dateLabel: "23 Nov 2023",
    type: "Certification",
    file: "comptia-it-fundamentals-itf-plus.pdf",
  },
];

const projects = [
  {
    name: "Pablo Coffee Website",
    category: "WEBSITE DEVELOPMENT",
    description:
      "A final project for our 6WEBCS subject, developed using HTML and CSS. The website allows customers to browse the coffee shop's menu in advance, helping them decide what to order and reducing waiting time in line.",
    tools: ["HTML", "CSS"],
    image: "/projects/pablo.png",
  },
  {
    name: "HAUrmony: A HAU University Days Concert Ticketing System",
    category: "FRONT-END DEVELOPMENT | MOBILE APP DEVELOPMENT",
    description:
      "A ticketing service for Holy Angel University's yearly University Days concert. Designed with the consumer in mind, it employs a sleek and simple user interface to streamline sales. An admin-side dashboard is available to view sales data and analytics for attendance and sales projections.",
    tools: ["Flutter", "Dart", "Supabase"],
    image: "/projects/haurmony.png",
  },
  {
    name: "PantryPal: An Ingredient-Based Recipe Finder",
    category: "FULL-STACK WEB APPLICATION DEVELOPMENT",
    description:
      "A responsive Filipino recipe finder that helps home cooks discover recipes using ingredients they already have. Built with React, Node.js, Express, and PostgreSQL hosted on Supabase.",
    tools: [
      "React.js",
      "JavaScript",
      "Python",
      "FastAPI",
      "Supabase",
      "HTML5",
      "CSS3",
      "Git",
      "GitHub",
      "Visual Studio Code",
    ],
    image: "/projects/pantrypal.png",
  },
  {
    name: "OrangeTail: A Scheduling System for HAU's School of Computing",
    category: "FRONT-END DEVELOPMENT",
    description:
      "A Web-based automated scheduling system for Holy Angel University's School of Computing that utilizes metaheuristic algorithms and machine learning to streamline complex schedule generation and professor loading.",
    tools: ["React.js", "JavaScript", "CSS3"],
    image: "/projects/orangetail.png",
  },
];

export default function Home() {
  const layout = "editorial";
  const profile = initial;
  const photo = publicAsset(assets.photo);
  const resume = publicAsset(assets.resume);
  const [active, setActive] = useState("about");
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-20% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const external = (url) => {
    try {
      const u = new URL(url);
      return ["http:", "https:"].includes(u.protocol) ? u.href : "";
    } catch {
      return "";
    }
  };

  return (
    <div className={`site theme-${layout}`}>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <header className="header">
        <a className="wordmark" href="#about" aria-label="Back to about">
          {profile.headerName}
        </a>
        <nav className={menu ? "nav open" : "nav"} aria-label="Main navigation">
          {["about", "projects", "certifications", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              aria-current={active === section ? "location" : undefined}
              onClick={() => setMenu(false)}
            >
              {section === "about"
                ? "About Me"
                : section[0].toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="mobile-menu"
            onClick={() => setMenu(!menu)}
            aria-expanded={menu}
            aria-label="Toggle navigation"
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="about" className="about-section">
          <div className="hero-topline">
            <span className="eyebrow">About Me</span>
            {profile.availability && (
              <span className="availability">
                <i />
                {profile.availability}
              </span>
            )}
          </div>
          <div className="hero-grid">
            <div className="intro">
              <h1>{profile.name}</h1>
              <p className="role">
                {profile.role}
                <span className="role-separator"> / </span>
                <span>{profile.location}</span>
              </p>
              <p className="bio">{profile.about}</p>
              <div className="hero-buttons">
                <a className="button primary" href="#projects">
                  View projects
                  <ArrowDown size={15} />
                </a>
                <a
                  className="button secondary"
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Opens in a new tab"
                >
                  Preview résumé
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
            <div className="portrait-wrap">
              <div
                className="portrait"
                aria-label="Profile photo"
              >
                <img src={photo} alt={`${profile.name} portrait`} />
              </div>
            </div>
          </div>
          <div className="skills-strip">
            <span>Skills</span>
            <div>
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section">
          <div className="section-top">
            <span className="section-number" aria-hidden="true">
              01
            </span>
            <h2>Projects</h2>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-image">
                  <img
                    src={publicAsset(project.image)}
                    loading="lazy"
                    decoding="async"
                    alt={`${project.name} screenshot`}
                  />
                  <span className="project-index">0{index + 1}</span>
                </div>
                <div className="project-content">
                  <div className="project-category">{project.category}</div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                  {external(profile.links[index]) ? (
                    <a
                      className="project-link"
                      href={external(profile.links[index])}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={15} />
                      View on GitHub
                      <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <span className="project-link">
                      <Github size={15} />
                      GitHub link not added
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="certifications-section">
          <div className="section-top">
            <span className="section-number" aria-hidden="true">
              02
            </span>
            <h2>Certifications</h2>
          </div>
          <div className="certificate-list">
            {certifications.map((certification) => (
              <a
                key={certification.file}
                className="certificate-row"
                href={publicAsset(`documents/Certifications/${encodeURIComponent(certification.file)}`)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Preview ${certification.title} certificate (PDF, opens in a new tab)`}
              >
                <span className="certificate-icon" aria-hidden="true">
                  <FileText size={25} strokeWidth={1} />
                </span>
                <span className="certificate-info">
                  <strong>{certification.title}</strong>
                  <span>
                    {certification.issuer} ·{" "}
                    <time dateTime={certification.date}>
                      {certification.dateLabel}
                    </time>
                  </span>
                  {certification.provider && (
                    <span>{certification.provider}</span>
                  )}
                </span>
                <span className="certificate-status">{certification.type}</span>
                <span className="certificate-preview" aria-hidden="true">
                  Preview PDF
                  <ArrowUpRight size={19} />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-grid">
            <div>
              <span className="section-number" aria-hidden="true">
                03
              </span>
              <h2>Contact</h2>
              <p>Email, phone number, and professional profiles.</p>
            </div>
            <div className="contact-links">
              {profile.email ? (
                <a className="email-link" href={`mailto:${profile.email}`}>
                  {profile.email}
                  <ArrowUpRight />
                </a>
              ) : (
                <span className="email-link">Email not added</span>
              )}
              {profile.phone ? (
                <a
                  className="phone-link"
                  href={`tel:${profile.phone.replace(/[^+0-9]/g, "")}`}
                >
                  <Phone size={16} />
                  {profile.phone}
                  <ArrowUpRight size={15} />
                </a>
              ) : (
                <span className="phone-link">
                  <Phone size={16} />
                  Contact number not added
                </span>
              )}
              <div className="social-links">
                {external(profile.github) && (
                  <a
                    href={external(profile.github)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    GitHub
                    <ArrowUpRight size={14} />
                  </a>
                )}
                {external(profile.linkedin) && (
                  <a
                    href={external(profile.linkedin)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedIn size={16} />
                    LinkedIn
                    <ArrowUpRight size={14} />
                  </a>
                )}
                <a href={resume} target="_blank" rel="noopener noreferrer" title="Opens in a new tab">
                  <FileText size={16} />
                  Résumé
                  <ArrowUpRight size={14} />
                </a>
              </div>
              <span className="contact-location">
                Location: {profile.location}
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a href="#about">Back to top ↑</a>
      </footer>
    </div>
  );
}
