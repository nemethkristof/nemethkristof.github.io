import FloatingLines from './components/FloatingLines';
import Navbar from './components/Navbar';
import Section from './components/Section';
import ResumeItem from './components/ResumeItem';
import SkillPill from './components/SkillPill';
import './App.css';

function App() {
  return (
    <div className="min-h-screen relative">
      <FloatingLines
        enabledWaves={["top", "middle", "bottom"]}
        lineCount={5}
        lineDistance={5}
        bendRadius={5}
        bendStrength={-0.5}
        interactive={true}
        parallax={true}
      />

      <div className="page-content">
        <Navbar />

        <main className="pt-28">
          <Section id="hero" title="Kristóf Németh — Curriculum Vitae">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
                <p className="text-sm text-white/80 mb-4">MSc Computer Engineering | Cyber-Medical Systems Specialization</p>
                <p className="text-sm text-white/70 mb-4">
                  Software Engineer with an MSc degree and over 2 years of professional experience in critical infrastructure environments. Strong mathematical foundation with expertise in Java (Spring Boot), C#, React, and PostgreSQL. Seeking a Midlevel Software Engineer role in an innovative team.
                </p>
                <div className="flex flex-col gap-2 text-sm text-white/70">
                  <p><span className="font-semibold text-white">Mobile:</span> +36 20 446 2467</p>
                  <p><span className="font-semibold text-white">E-mail:</span> n.kristof99@gmail.com</p>
                  <p><span className="font-semibold text-white">Languages:</span> English B2</p>
                  <p><span className="font-semibold text-white">Hobbies:</span> Basketball, Coffee</p>
                </div>
              </div>
            </div>
          </Section>

          <Section id="experience" title="Experience">
            <ResumeItem
              title="Software Engineer — Hungarian Banknote Printing Company"
              subtitle="Developed backend services and internal tools in critical infrastructure"
              date="Oct 2023 – Present"
              bullets={[
                "Developed and maintained backend services for production support systems within a high-security, critical infrastructure environment",
                "Designed and implemented a company-wide internal directory application (End-to-End) using React, improving internal communication efficiency",
                "Executed system integrations via webMethods for real-time manufacturing process monitoring and order backlog tracking",
                "Developed low-level system components (DLLs) for secure document and microchip personalization",
                "Promoted (Spring 2025) to higher seniority level for outstanding technical performance",
                "Tech Stack: Java, Spring Boot, C#, PostgreSQL, React, Software AG webMethods"
              ]}
            />
          </Section>

          <Section id="education" title="Education">
            <ResumeItem
              title="MSc in Computer Engineering — Óbuda University"
              subtitle="Specialization: Cyber-Medical Systems"
              date="Feb 2024 – Feb 2026"
              bullets={[
                "Degree Classification: Good",
                "Thesis: Correcting tests with machine learning and image processing"
              ]}
            />
            <ResumeItem
              title="BSc in Computer Engineering — Óbuda University"
              subtitle="Specialization: Software Design and Development"
              date="Sept 2018 – June 2023"
              bullets={[
                "Degree Classification: Good",
                "Special Prize at the 56th Scientific Students' Associations Conference (TDK) – Image Processing Section",
                "Thesis: Classifying abstract paintings with machine learning"
              ]}
            />
          </Section>

          <Section id="skills" title="Skills">
            <div className="flex flex-wrap">
              {['Java','Spring Boot','C#','React','PostgreSQL','JavaScript','HTML','CSS','Git','webMethods','Machine Learning','Image Processing'].map(s => (
                <SkillPill key={s}>{s}</SkillPill>
              ))}
            </div>
          </Section>

          <Section id="contact" title="Contact">
            <div className="space-y-2 text-sm text-white/80">
              <p><span className="font-semibold text-white">Mobile:</span> +36 20 446 2467</p>
              <p><span className="font-semibold text-white">E-mail:</span> <a href="mailto:n.kristof99@gmail.com" className="hover:text-white transition">n.kristof99@gmail.com</a></p>
              <p><span className="font-semibold text-white">Location:</span> Budapest, Hungary</p>
            </div>
          </Section>
        </main>
      </div>
    </div>
  );
}

export default App;
