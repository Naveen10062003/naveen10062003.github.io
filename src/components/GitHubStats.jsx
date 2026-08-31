import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaStar, FaHistory, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { SiPython, SiPostgresql, SiDocker, SiFastapi } from 'react-icons/si';

const statsData = [
  { label: 'Public Repositories', value: '12+', icon: <FaCodeBranch color="#0284c7" /> },
  { label: 'Total Commits', value: '450+', icon: <FaHistory color="#16a34a" /> },
  { label: 'Primary Language', value: 'Python (90%)', icon: <SiPython color="#3776AB" /> },
  { label: 'Active Development', value: 'Every Week', icon: <FaStar color="#f59e0b" /> }
];

const languageShare = [
  { name: 'Python', pct: 52, color: '#3776AB' },
  { name: 'SQL / PostgreSQL', pct: 22, color: '#336791' },
  { name: 'React / JavaScript', pct: 14, color: '#f7df1e' },
  { name: 'Docker / DevOps', pct: 12, color: '#2496ED' }
];

const GitHubStats = () => {
  return (
    <section className="section" id="github-activity" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '20px', color: '#0f172a', fontWeight: 600, fontSize: '0.85rem', marginBottom: '10px' }}>
          <FaGithub /> Open Source & Activity
        </div>
        <h2 className="section-title">GitHub Activity & Code Velocity</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
          Real engineering volume, consistent commits, and production-tested code.
        </p>
      </div>

      <div className="github-card">
        {/* TOP ROW: PROFILE LINK & BADGE */}
        <div className="github-card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="github-avatar-icon">
              <FaGithub size={28} />
            </div>
            <div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>Naveen10062003</div>
              <div style={{ fontSize: '0.82rem', color: '#64748b' }}>Full Stack Python Developer & Data Engineer</div>
            </div>
          </div>

          <a 
            href="https://github.com/Naveen10062003" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary"
            style={{ padding: '6px 14px', fontSize: '0.85rem', gap: '6px' }}
          >
            Visit GitHub <FaExternalLinkAlt size={11} />
          </a>
        </div>

        {/* METRICS ROW */}
        <div className="github-stats-row">
          {statsData.map((st, i) => (
            <div key={i} className="github-stat-box">
              <div className="github-stat-icon">{st.icon}</div>
              <div>
                <div className="github-stat-num">{st.value}</div>
                <div className="github-stat-name">{st.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* LANGUAGE DISTRIBUTION PROGRESS BAR */}
        <div className="github-lang-section">
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '10px' }}>
            Codebase Language Distribution
          </div>
          <div className="github-progress-bar">
            {languageShare.map((lang, idx) => (
              <div 
                key={idx} 
                style={{ width: `${lang.pct}%`, background: lang.color }}
                title={`${lang.name}: ${lang.pct}%`}
                className="github-progress-segment"
              />
            ))}
          </div>
          <div className="github-lang-legend">
            {languageShare.map((lang, idx) => (
              <div key={idx} className="github-legend-item">
                <span className="legend-dot" style={{ background: lang.color }}></span>
                <span>{lang.name} <strong style={{ color: '#0f172a' }}>{lang.pct}%</strong></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
