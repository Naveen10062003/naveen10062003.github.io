import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaPlay, FaTrashAlt } from 'react-icons/fa';

const COMMANDS = {
  help: `Available commands:
  • about        - Summary of my background & focus
  • skills       - Core technologies & programming stack
  • experience   - Current & past engineering roles
  • projects     - Flagship applications & simulations
  • stats        - Key engineering impact metrics
  • contact      - Email, LinkedIn & location
  • hire         - Why you should hire me
  • clear        - Clear the terminal screen`,

  about: `Naveen Kumar Basapogula
Full Stack Python Developer | Data Engineer (2 Years Experience)
Specialized in building high-performance REST APIs (FastAPI), 
database optimization (PostgreSQL/Redis), Docker containerization, 
and resilient ETL data pipelines with AWS cloud deployments.`,

  skills: `CORE ENGINEERING STACK:
  ├── Languages   : Python (Advanced), SQL, JavaScript
  ├── Frameworks  : FastAPI, Flask, React.js
  ├── Databases   : PostgreSQL, Redis, SQLAlchemy ORM
  ├── DevOps/Cloud: Docker, AWS (EC2, S3, RDS), Jenkins CI/CD
  ├── Data Eng    : Apache Airflow, Apache Kafka, Pandas, ETL
  └── Security    : JWT Authentication, RBAC, MFA Hardening`,

  experience: `PROFESSIONAL EXPERIENCE:
  [2024 - Present] Python Developer | Data Engineer @ Coderview Technologies
  • Engineered 2+ production backend modules for Crewzy HR platform.
  • Implemented secure JWT authentication, RBAC, and MFA verification.
  • Designed optimized PostgreSQL schemas & Redis caching for <50ms query latency.
  • Built automated ETL pipelines processing 50K+ transactional records.`,

  projects: `FLAGSHIP PROJECTS:
  1. Crewzy HR Management System  -> FastAPI, PostgreSQL, Docker, Redis
  2. Smart Traffic Enforcement     -> Computer Vision, YOLO, Python, IoT
  3. Hospital Invoice Generator   -> Python, ReportLab/PDFkit, SQLite
  4. Customer Shopping Analytics   -> Pandas, SQL, Streamlit, Plotly`,

  stats: `ENGINEERING IMPACT:
  • 2+ Years Production Experience
  • 50,000+ Records Processed via ETL
  • 5+ Containerized Microservices
  • 95% Security Hardening Benchmark
  • <50ms Average API Response Time`,

  contact: `GET IN TOUCH:
  • Email    : kumarbn37@gmail.com
  • Phone    : +91 9390503505
  • LinkedIn : https://www.linkedin.com/in/naveenbnk10062003/
  • GitHub   : https://github.com/Naveen10062003
  • Location : Hyderabad / Bengaluru / Pune / Chennai / Remote (Flexible)`,

  hire: `WHY HIRE NAVEEN?
  ✓ Full-lifecycle backend experience (Design -> Code -> Docker -> AWS)
  ✓ Strong focus on clean architecture, security (JWT/RBAC), and low latency
  ✓ Highly adaptable, immediate joiner, flexible with WFO/Remote & day/night shifts!`
};

const InteractiveTerminal = () => {
  const [history, setHistory] = useState([
    { type: 'system', text: 'NaveenOS v2.4.0 (x86_64-cloud-linux)' },
    { type: 'system', text: 'Type "help" or click a command below to explore.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);

  const handleCommand = (cmdText) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const output = COMMANDS[cleanCmd] || `Command not found: "${cleanCmd}". Type "help" for a list of valid commands.`;
    
    setHistory((prev) => [
      ...prev,
      { type: 'user', text: `naveen@portfolio:~$ ${cleanCmd}` },
      { type: 'output', text: output }
    ]);
    setInputVal('');
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section className="section" id="terminal" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '20px', color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.85rem', marginBottom: '10px' }}>
          <FaTerminal /> Interactive CLI
        </div>
        <h2 className="section-title">Developer Terminal</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
          Test my portfolio right from the command line. Type commands or click the shortcut pills below.
        </p>
      </div>

      <div className="terminal-window">
        {/* TERMINAL TOP BAR */}
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <div className="terminal-title">bash - naveen@portfolio:~ (Interactive CLI)</div>
          <button 
            onClick={() => setHistory([])}
            className="terminal-clear-btn"
            title="Clear Terminal"
          >
            <FaTrashAlt size={12} /> Clear
          </button>
        </div>

        {/* QUICK COMMAND SHORTCUTS */}
        <div className="terminal-presets">
          <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, marginRight: '4px' }}>Quick Run:</span>
          {['help', 'about', 'skills', 'experience', 'projects', 'stats', 'hire', 'contact'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="terminal-preset-btn"
            >
              <FaPlay size={9} style={{ opacity: 0.7 }} /> {cmd}
            </button>
          ))}
        </div>

        {/* TERMINAL BODY */}
        <div className="terminal-body">
          {history.map((item, idx) => (
            <div key={idx} className={`terminal-line terminal-${item.type}`}>
              <pre>{item.text}</pre>
            </div>
          ))}
          
          {/* ACTIVE INPUT LINE */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(inputVal);
            }} 
            className="terminal-input-row"
          >
            <span className="terminal-prompt">naveen@portfolio:~$</span>
            <input 
              type="text" 
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type a command (e.g. skills, stats, hire)..."
              className="terminal-input"
              autoComplete="off"
              spellCheck="false"
            />
          </form>
          <div ref={terminalEndRef} />
        </div>
      </div>
    </section>
  );
};

export default InteractiveTerminal;
