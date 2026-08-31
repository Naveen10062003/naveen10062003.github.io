import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPlay, FaCheckCircle, FaServer, FaLock, FaDatabase } from 'react-icons/fa';

const ENDPOINTS = [
  {
    id: 'profile',
    name: 'GET /api/v1/developer/profile',
    method: 'GET',
    color: '#0284c7',
    icon: <FaServer />,
    description: 'Fetches developer bio, core technical stack, and availability matrix.',
    codeSnippet: `@app.get("/api/v1/developer/profile", response_model=DeveloperResponse)
async def get_developer_profile(db: AsyncSession = Depends(get_db)):
    profile = await DeveloperService.get_profile(
        name="Naveen Kumar Basapogula",
        role="Full Stack Python Developer | Data Engineer"
    )
    return {
        "status": "success",
        "data": profile,
        "availability": "Immediate Joiner (WFO/Remote)"
    }`,
    response: {
      status: 200,
      statusText: 'OK',
      latency: '12ms',
      data: {
        name: "Naveen Kumar Basapogula",
        role: "Full Stack Python Developer | Data Engineer",
        experience_years: 2.0,
        core_stack: ["Python", "FastAPI", "PostgreSQL", "Docker", "AWS", "Airflow", "Kafka"],
        locations: ["Hyderabad", "Bengaluru", "Pune", "Chennai", "Remote"],
        work_preference: "WFO / Hybrid / Remote",
        shift_flexibility: "Day & Night Shifts Available",
        status: "Open to Full-Time Roles"
      }
    }
  },
  {
    id: 'auth',
    name: 'POST /api/v1/auth/mfa/verify',
    method: 'POST',
    color: '#16a34a',
    icon: <FaLock />,
    description: 'Simulates secure MFA TOTP verification & JWT Bearer token generation.',
    codeSnippet: `@app.post("/api/v1/auth/mfa/verify", response_model=TokenResponse)
async def verify_mfa_token(payload: MFAVerifySchema):
    is_valid = SecurityService.verify_totp(
        secret=payload.mfa_secret,
        code=payload.otp_code
    )
    if not is_valid:
        raise HTTPException(status_code=401, detail="Invalid OTP")
    
    access_token = create_jwt_token(
        subject=payload.user_id,
        roles=["ENGINEER_ADMIN"]
    )
    return {"access_token": access_token, "token_type": "bearer"}`,
    response: {
      status: 200,
      statusText: 'OK',
      latency: '24ms',
      data: {
        authenticated: true,
        user_id: "usr_naveen_kumar_001",
        role: "ENGINEER_ADMIN",
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJuYXZlZW4iLCJyb2xlIjoiYWRtaW4iLCJleHAiOjE3NDEy...",
        token_type: "bearer",
        expires_in_hours: 24,
        mfa_verified: true
      }
    }
  },
  {
    id: 'pipeline',
    name: 'GET /api/v1/analytics/pipeline',
    method: 'GET',
    color: '#9333ea',
    icon: <FaDatabase />,
    description: 'Inspects real-time streaming status from Kafka topics & Airflow DAGs.',
    codeSnippet: `@app.get("/api/v1/analytics/pipeline")
async def get_pipeline_telemetry(kafka: KafkaConsumer = Depends(get_kafka)):
    metrics = await kafka.get_topic_metrics(
        topic="customer_shopping_events",
        consumer_group="analytics_workers"
    )
    return {
        "pipeline_health": "OPTIMAL",
        "records_processed_today": 54200,
        "throughput_eps": 850
    }`,
    response: {
      status: 200,
      statusText: 'OK',
      latency: '18ms',
      data: {
        pipeline_status: "HEALTHY",
        broker: "Apache Kafka v3.6 (Docker Cluster)",
        orchestrator: "Apache Airflow DAG: etl_hourly_batch_v2",
        records_processed: 54200,
        average_latency_ms: 18.4,
        storage_destination: "PostgreSQL RDS (Partitioned Tables)",
        uptime_pct: "99.98%"
      }
    }
  }
];

const ApiPlayground = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasRun, setHasRun] = useState(true);

  const currentEndpoint = ENDPOINTS[activeTab];

  const handleSendRequest = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setHasRun(true);
    }, 400);
  };

  return (
    <section className="section" id="api-explorer" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '20px', color: '#16a34a', fontWeight: 600, fontSize: '0.85rem', marginBottom: '10px' }}>
          <FaCode /> Live Backend Architecture
        </div>
        <h2 className="section-title">Interactive API Explorer</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
          Execute simulated live endpoints to test my FastAPI backend structures and real JSON payload responses.
        </p>
      </div>

      <div className="api-card">
        {/* ENDPOINT SELECTOR TABS */}
        <div className="api-tabs">
          {ENDPOINTS.map((ep, idx) => (
            <button
              key={ep.id}
              onClick={() => {
                setActiveTab(idx);
                setHasRun(true);
              }}
              className={`api-tab ${activeTab === idx ? 'api-tab-active' : ''}`}
            >
              <span className="api-method-badge" style={{ background: ep.method === 'GET' ? '#0284c7' : '#16a34a' }}>
                {ep.method}
              </span>
              <span className="api-tab-name">{ep.name.split(' ')[1]}</span>
            </button>
          ))}
        </div>

        {/* API INTERFACE BODY */}
        <div className="api-body">
          {/* LEFT: CODE VIEW */}
          <div className="api-code-panel">
            <div className="api-panel-header">
              <span>Python (FastAPI) Handler</span>
              <span style={{ fontSize: '0.8rem', color: '#64748b' }}>async/await</span>
            </div>
            <pre className="api-code-content">{currentEndpoint.codeSnippet}</pre>
          </div>

          {/* RIGHT: LIVE TESTER & RESPONSE */}
          <div className="api-response-panel">
            <div className="api-panel-header" style={{ justifyContent: 'space-between' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {currentEndpoint.icon} Live Server Response
              </span>
              <button 
                onClick={handleSendRequest}
                disabled={loading}
                className="api-run-btn"
              >
                {loading ? 'Sending...' : <><FaPlay size={10} /> Send Request</>}
              </button>
            </div>

            <div className="api-response-body">
              <div className="api-status-bar">
                <span className="api-status-tag">
                  <FaCheckCircle color="#16a34a" /> {currentEndpoint.response.status} {currentEndpoint.response.statusText}
                </span>
                <span className="api-latency-tag">⚡ Latency: {currentEndpoint.response.latency}</span>
              </div>

              <pre className="api-json-content">
                {JSON.stringify(currentEndpoint.response.data, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiPlayground;
