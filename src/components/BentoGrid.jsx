import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaDatabase, FaDocker, FaAws, FaBolt, FaNetworkWired, FaServer, FaCheck } from 'react-icons/fa';
import { SiPostgresql, SiRedis, SiFastapi, SiApacheairflow, SiApachekafka, SiPython } from 'react-icons/si';

const BentoGrid = () => {
  return (
    <section className="section" id="architecture" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', background: '#faf5ff', border: '1px solid #e9d5ff', borderRadius: '20px', color: '#9333ea', fontWeight: 600, fontSize: '0.85rem', marginBottom: '10px' }}>
          <FaNetworkWired /> System Design
        </div>
        <h2 className="section-title">Engineering Architecture & Highlights</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto', fontSize: '1rem' }}>
          How I architect robust, scalable, and secure production backend applications from day one.
        </p>
      </div>

      <div className="bento-container">
        
        {/* CARD 1: SECURITY & AUTH (WIDE) */}
        <motion.div 
          className="bento-card bento-card-large"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <div className="bento-card-top">
            <div className="bento-icon-wrapper" style={{ background: '#fef2f2', color: '#dc2626' }}>
              <FaShieldAlt size={22} />
            </div>
            <span className="bento-badge" style={{ background: '#fee2e2', color: '#b91c1c' }}>Hardened Security</span>
          </div>
          <h3 className="bento-title">Enterprise Authentication & RBAC</h3>
          <p className="bento-desc">
            Engineered full multi-factor authentication (MFA) with TOTP QR verification, short-lived JWT access tokens with secure refresh token rotation, and granular Role-Based Access Control (RBAC) across multi-tenant enterprise modules.
          </p>
          <div className="bento-feature-list">
            <div className="bento-feature-item"><FaCheck color="#16a34a" size={12} /> JWT Bearer & HttpOnly Cookies</div>
            <div className="bento-feature-item"><FaCheck color="#16a34a" size={12} /> MFA (TOTP Verification)</div>
            <div className="bento-feature-item"><FaCheck color="#16a34a" size={12} /> Strict RBAC Permissions</div>
            <div className="bento-feature-item"><FaCheck color="#16a34a" size={12} /> Rate Limiting & Anti-Brute-Force</div>
          </div>
        </motion.div>

        {/* CARD 2: DATABASE & CACHING */}
        <motion.div 
          className="bento-card"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <div className="bento-card-top">
            <div className="bento-icon-wrapper" style={{ background: '#eff6ff', color: '#2563eb' }}>
              <SiPostgresql size={22} />
            </div>
            <span className="bento-badge" style={{ background: '#dbeafe', color: '#1d4ed8' }}>Sub-50ms Latency</span>
          </div>
          <h3 className="bento-title">Database & In-Memory Caching</h3>
          <p className="bento-desc">
            Designed normalized PostgreSQL relational schemas, B-tree indexes, and integrated Redis key-value caching to deliver lightning fast query retrieval for frequently requested APIs.
          </p>
          <div className="bento-tech-row">
            <span className="skill-tag" style={{ margin: 0 }}>PostgreSQL</span>
            <span className="skill-tag" style={{ margin: 0 }}>Redis</span>
            <span className="skill-tag" style={{ margin: 0 }}>SQLAlchemy ORM</span>
          </div>
        </motion.div>

        {/* CARD 3: DATA ENGINEERING & ETL */}
        <motion.div 
          className="bento-card"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <div className="bento-card-top">
            <div className="bento-icon-wrapper" style={{ background: '#f0fdf4', color: '#16a34a' }}>
              <FaBolt size={20} />
            </div>
            <span className="bento-badge" style={{ background: '#dcfce7', color: '#15803d' }}>50K+ Rows</span>
          </div>
          <h3 className="bento-title">Automated ETL & Event Streaming</h3>
          <p className="bento-desc">
            Orchestrated robust data ingestion pipelines using Apache Airflow DAGs and Apache Kafka message brokers to extract, transform, and load high-volume transactional logs reliably.
          </p>
          <div className="bento-tech-row">
            <span className="skill-tag" style={{ margin: 0 }}>Apache Airflow</span>
            <span className="skill-tag" style={{ margin: 0 }}>Apache Kafka</span>
            <span className="skill-tag" style={{ margin: 0 }}>Pandas</span>
          </div>
        </motion.div>

        {/* CARD 4: CLOUD & CONTAINERIZATION (WIDE) */}
        <motion.div 
          className="bento-card bento-card-large"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <div className="bento-card-top">
            <div className="bento-icon-wrapper" style={{ background: '#f0f9ff', color: '#0284c7' }}>
              <FaDocker size={22} />
            </div>
            <span className="bento-badge" style={{ background: '#e0f2fe', color: '#0369a1' }}>Cloud-Ready</span>
          </div>
          <h3 className="bento-title">Dockerized Containers & AWS Cloud Deployment</h3>
          <p className="bento-desc">
            Packaged backend services into lightweight multi-stage Docker images orchestrated via Docker Compose and deployed seamlessly to AWS EC2, S3 bucket storage, and AWS RDS managed databases.
          </p>
          <div className="bento-feature-list">
            <div className="bento-feature-item"><FaCheck color="#16a34a" size={12} /> AWS EC2 Virtual Machines</div>
            <div className="bento-feature-item"><FaCheck color="#16a34a" size={12} /> AWS S3 Object Storage</div>
            <div className="bento-feature-item"><FaCheck color="#16a34a" size={12} /> AWS RDS Relational DB</div>
            <div className="bento-feature-item"><FaCheck color="#16a34a" size={12} /> Docker Compose Microservices</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BentoGrid;
