import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
// Added missing icons: MapPin, Cpu, Terminal, Code, GraduationCap
import {
  Sun, Moon, Github, Linkedin, Mail, Maximize2, ArrowLeft,
  MapPin, Cpu, Terminal, Code, GraduationCap
} from 'lucide-react';
import profilePic from './assets/profile.jpg';

// --- Full Profile Page Component ---
const ProfilePage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-mono"
      >
        <ArrowLeft size={20} /> Back
      </button>
      <div className="max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-indigo-500/30">
        <img src={profilePic} alt="Abhishek Panwar" className="w-full h-auto" />
      </div>
    </div>
  );
};

// --- Home Portfolio Component ---
const Home = ({ darkMode, setDarkMode }) => {
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500">

        {/* Navbar */}
        <nav className="fixed w-full top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

            {/* Hoverable Profile Logo */}
            <div className="flex items-center gap-4 group relative">
              <div className="relative w-10 h-10 rounded-full border-2 border-indigo-500 overflow-hidden cursor-pointer shadow-lg transition-transform duration-300 group-hover:scale-110">
                <img src={profilePic} alt="AP" className="w-full h-full object-cover" />
                {/* Hover Overlay Option */}
                <Link
                  to="/profile-photo"
                  className="absolute inset-0 bg-indigo-600/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
                  title="View Full Photo"
                >
                  <Maximize2 size={16} className="text-white" />
                </Link>
              </div>
              <span className="font-mono font-bold text-indigo-500">AP</span>
            </div>

            <div className="flex items-center gap-6">

              <a href="#skills" className="hover:text-indigo-500 transition-colors">Skills</a>
              <a href="#experience" className="hover:text-indigo-500 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-indigo-500 transition-colors">Projects</a>
              <a href="#education" className="hover:text-indigo-500 transition-colors">Education</a>

              <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-slate-200 dark:bg-slate-800">
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">Abhishek Panwar</h1>
              <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
                Software Engineer at <span className="text-indigo-500 font-semibold">Societe Generale</span>.
                Specializing in Distributed Systems, Microservices, and Generative AI.
              </p>
              <div className="flex items-center gap-4 mt-4 text-slate-500">
                <span className="flex items-center gap-1"><MapPin size={16} /> Bangalore, India</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="mailto:abhishekpanwar4740@gmail.com" className="p-3 border border-slate-300 dark:border-slate-700 rounded-xl hover:border-indigo-500 transition-all"><Mail size={22} /></a>
              <a href="https://linkedin.com/in/abhishek-panwar-b875a81b4" target="_blank" className="p-3 border border-slate-300 dark:border-slate-700 rounded-xl hover:border-indigo-500 transition-all"><Linkedin size={22} /></a>
              <a href="https://github.com/Abhishekpanwar4740" className="p-3 border border-slate-300 dark:border-slate-700 rounded-xl hover:border-indigo-500 transition-all"><Github size={22} /></a>
            </div>
          </div>
        </header>

        {/* Technical Skills Section */}
        <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3"><Cpu className="text-indigo-500" /> Technical Arsenal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold mb-4 text-indigo-500 uppercase tracking-wider text-xs">Languages & Backend</h3>
              <p className="text-sm leading-loose">Java, Python, C++, SQL, Spring Boot, Microservices, REST API, Hibernate/JPA, RabbitMQ</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold mb-4 text-indigo-500 uppercase tracking-wider text-xs">Cloud & DevOps</h3>
              <p className="text-sm leading-loose">Kubernetes (K8s), Docker, Jenkins CI/CD, Azure, Grafana, Kibana, AWS S3, Redis</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold mb-4 text-indigo-500 uppercase tracking-wider text-xs">AI & Data</h3>
              <p className="text-sm leading-loose">RAG Pipelines, LLMs (Llama/OpenAI), LangChain, Agents, PostgreSQL, MongoDB</p>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3"><Terminal className="text-indigo-500" /> Professional Journey</h2>
          <div className="space-y-16">
            {/* Full-time Role */}
            <div className="relative pl-8 border-l-2 border-indigo-500">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Software Engineer</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">Societe Generale | CreditRisk Monitoring</p>
                </div>
                <span className="text-indigo-500 font-mono text-sm bg-indigo-500/10 px-3 py-1 rounded-full">July 2023 - Present</span>
              </div>
              <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                <li>• Designed and implemented data ingestion pipelines for heterogeneous financial risk drivers (Equities, Bonds, CDS, Ratings) from Bloomberg and S&P.</li>
                <li>• Developed core logic for configurable alerting systems, enabling custom risk workflows and automated notifications.</li>
                <li>• Implemented <span className="text-indigo-400">Circuit Breaker patterns (Resilience4j)</span> to ensure system stability during external API failures.</li>
                <li>• Optimized system scaling with <span className="text-indigo-400">Kubernetes HPA</span> and built interactive ReactJS dashboards for complex KPI visualization.</li>
              </ul>
            </div>

            {/* Internship Role */}
            <div className="relative pl-8 border-l-2 border-slate-300 dark:border-slate-700">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700"></div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Software Engineer Intern</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">Societe Generale | Batch Processing Optimisation</p>
                </div>
                <span className="text-slate-500 font-mono text-sm bg-slate-500/10 px-3 py-1 rounded-full">May 2022 - July 2022</span>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>• Developed a Proof of Concept (POC) for constraint-based batch scheduling on compute grids.</li>
                <li>• Implemented a greedy heuristic algorithm that optimized resource allocation compared to FCFS baselines.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 max-w-6xl mx-auto bg-slate-200/50 dark:bg-slate-900/30 rounded-[3rem]">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 px-6"><Code className="text-indigo-500" /> Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 px-6">
            <div className="group p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 transition-all shadow-sm">
              <h3 className="text-xl font-bold mb-2">High-Performance Rule Engine</h3>
              <p className="text-sm text-indigo-500 mb-4 font-mono">Java, Spring Boot, Strategy Pattern, ReactJS</p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Architected a dynamic engine using Java Reflection to allow runtime rule configuration without service restarts.
              </p>
              <div className="bg-indigo-500/10 p-4 rounded-xl text-indigo-500 font-bold text-center">
                Reduced onboarding time by 80% (2 weeks → 2 days)
              </div>
            </div>

            <div className="group p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 transition-all shadow-sm">
              <h3 className="text-xl font-bold mb-2">GenAI Financial Analysis Agent</h3>
              <p className="text-sm text-indigo-500 mb-4 font-mono">Python, LangChain, RAG, LLMs</p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Built a Retrieval-Augmented Generation (RAG) system to automate Tier-1 support for credit analysts, embedding financial documentation for "Reason for Alert" summaries.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3"><GraduationCap className="text-indigo-500" /> Education</h2>
          <div className="p-8 bg-indigo-500 rounded-[2rem] text-white flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold">Indian Institute of Technology (IIT) Roorkee</h3>
              <p className="text-indigo-100 italic">Bachelor of Technology - Electrical Engineering</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-4xl font-black">8.38 CGPA</p>
              <p className="text-sm text-indigo-100 uppercase tracking-widest mt-1">Class of 2023</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center text-slate-500 text-sm border-t border-slate-200 dark:border-slate-800">
          <p>© 2026 Abhishek Panwar. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
};

// --- Main App Component with Routing ---
export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <Routes>
      <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
      <Route path="/profile-photo" element={<ProfilePage />} />
    </Routes>
  );
}
