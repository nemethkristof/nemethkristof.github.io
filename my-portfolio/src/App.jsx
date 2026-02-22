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
              <p className="text-sm text-white/80">English CV — please replace with your actual translated content.</p>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">Frontend Developer</h3>
                  <p className="text-sm text-white/70">Budapest, Hungary • nemeth@example.com • +36 70 000 0000</p>
                </div>
                <div className="flex flex-wrap">
                  <SkillPill>React</SkillPill>
                  <SkillPill>TailwindCSS</SkillPill>
                  <SkillPill>Three.js</SkillPill>
                </div>
              </div>
            </div>
          </Section>

          <Section id="experience" title="Experience">
            <ResumeItem
              title="Frontend Engineer — Example Company"
              subtitle="Worked on web interfaces and animations"
              date="2021 - Present"
              bullets={["Built interactive UI with React and Tailwind", "Optimized performance and accessibility"]}
            />
            <ResumeItem
              title="Junior Developer — Another Company"
              subtitle="Contributed to multiple client projects"
              date="2019 - 2021"
              bullets={["Implemented responsive layouts", "Integrated APIs and CI/CD"]}
            />
          </Section>

          <Section id="education" title="Education">
            <ResumeItem
              title="BSc Computer Science"
              subtitle="University Name"
              date="2015 - 2018"
              bullets={["Relevant coursework: Algorithms, Web Development"]}
            />
          </Section>

          <Section id="skills" title="Skills">
            <div className="flex flex-wrap">
              {['JavaScript','React','Tailwind','Three.js','HTML','CSS','Git'].map(s => (
                <SkillPill key={s}>{s}</SkillPill>
              ))}
            </div>
          </Section>

          <Section id="contact" title="Contact">
            <p className="text-sm text-white/80">Feel free to replace this with your translated contact details and links to LinkedIn/GitHub.</p>
          </Section>
        </main>
      </div>
    </div>
  );
}

export default App;
