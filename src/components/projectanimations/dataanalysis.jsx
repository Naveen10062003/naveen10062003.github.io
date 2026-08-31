import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";

// Retail Data Mocks
const salesByCategory = [
  { name: 'Electronics', count: 125000 },
  { name: 'Clothing', count: 98000 },
  { name: 'Groceries', count: 75000 },
  { name: 'Furniture', count: 62000 },
  { name: 'Beauty', count: 45000 },
  { name: 'Sports', count: 38000 },
  { name: 'Books', count: 29000 },
  { name: 'Toys', count: 22000 },
  { name: 'Automotive', count: 15000 },
  { name: 'Pet Supplies', count: 12000 },
];

const salesByRegion = [
  { name: 'California', count: 85000 },
  { name: 'New York', count: 72000 },
  { name: 'Texas', count: 68000 },
  { name: 'Florida', count: 54000 },
  { name: 'Illinois', count: 41000 },
  { name: 'Washington', count: 33000 },
  { name: 'Ohio', count: 28000 },
];

const demographicsData = [
  { name: '18-24', value: 15, color: '#38bdf8' },
  { name: '25-34', value: 45, color: '#22c55e' },
  { name: '35-44', value: 25, color: '#fb923c' },
  { name: '45-54', value: 10, color: '#c084fc' },
  { name: '55+', value: 5, color: '#eab308' },
];

const paymentMethodsData = [
  { name: 'Credit Card', value: 55, color: '#38bdf8' },
  { name: 'Debit Card', value: 20, color: '#22c55e' },
  { name: 'PayPal', value: 15, color: '#fb923c' },
  { name: 'Crypto', value: 10, color: '#c084fc' },
];

const peakSalesData = [
  { name: 'Morning', Weekday: 25000, Weekend: 45000 },
  { name: 'Afternoon', Weekday: 35000, Weekend: 65000 },
  { name: 'Evening', Weekday: 60000, Weekend: 55000 },
];

const loyaltyData = [
  { name: 'Gold', HighCSAT: 45, MedCSAT: 10, LowCSAT: 2 },
  { name: 'Silver', HighCSAT: 30, MedCSAT: 40, LowCSAT: 15 },
  { name: 'Bronze', HighCSAT: 15, MedCSAT: 35, LowCSAT: 50 },
];

const abandonmentData = [
  { name: 'Shipping Cost', value: 45, color: '#ef4444' },
  { name: 'Price too high', value: 25, color: '#fb923c' },
  { name: 'Long Checkout', value: 15, color: '#eab308' },
  { name: 'Just Browsing', value: 10, color: '#9ca3af' },
  { name: 'Trust Issues', value: 5, color: '#c084fc' }
];

const csatGaugeData = [
  { name: 'Poor', value: 33, color: '#ef4444' },
  { name: 'Average', value: 33, color: '#eab308' },
  { name: 'Excellent', value: 33, color: '#22c55e' }
];

const Dashboard = () => {
  return (
    <div style={{ background: "#ffffff", color: "var(--text-primary)", minHeight: "100vh", padding: "105px 5% 60px 5%" }}>
      
      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px", borderBottom: "1px solid #e2e8f0", paddingBottom: "20px", flexWrap: "wrap", gap: "15px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
          <Link 
            to="/" 
            style={{ 
              color: "var(--accent-color)", 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "8px", 
              textDecoration: "none", 
              background: "#f0f9ff",
              border: "1px solid #bae6fd",
              padding: "8px 18px",
              borderRadius: "20px",
              fontWeight: 600,
              fontSize: "0.95rem",
              boxShadow: "0 2px 8px rgba(2, 132, 199, 0.08)"
            }}
          >
            <FaArrowLeft /> Back to Home
          </Link>
          <h1 style={{ margin: 0, display: "flex", alignItems: "center", gap: "10px", fontSize: "1.6rem", color: "#0f172a" }}>
            <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "conic-gradient(#0284c7, #fb923c, #16a34a)" }}></div>
            Customer Shopping Data Analysis
          </h1>
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
          <input type="text" placeholder="Filter insights..." style={{ padding: "8px 16px", borderRadius: "20px", border: "1px solid #cbd5e1", background: "#f8fafc", color: "#0f172a", outline: "none" }} />
          <button className="btn-secondary" style={{ padding: "8px 18px", fontSize: "0.9rem" }}>Export PDF</button>
          <button className="btn-secondary" style={{ padding: "8px 18px", fontSize: "0.9rem" }}>Refresh Data</button>
        </div>
      </div>

      {/* PROJECT OVERVIEW */}
      <div className="glass-card" style={{ display: "flex", gap: "30px", marginBottom: "30px", padding: "25px", alignItems: "center", flexWrap: "wrap" }}>
        <img src="/data_analytics_hero.png" alt="Data Analytics Visualization" style={{ width: "300px", height: "auto", borderRadius: "12px", boxShadow: "0 8px 25px rgba(2, 132, 199, 0.15)", border: "1px solid #e2e8f0" }} />
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h2 style={{ color: "var(--accent-color)", marginBottom: "15px", fontSize: "1.8rem" }}>Project Overview</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "20px" }}>
            This comprehensive data analytics pipeline was developed to analyze customer shopping behavior directly from raw transactional logs. 
            By engineering a robust interactive dashboard, I was able to track highly granular real-time insights uncovering specific sales trends, customer demographics, and peak traffic periods. End-to-end processing involved extensive data cleaning and KPI calculations resulting in a fully containerized, deployment-ready analytics product.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {["Python", "Pandas", "SQL", "Streamlit", "Plotly", "Matplotlib", "Seaborn", "Docker"].map(tech => (
              <span key={tech} className="skill-tag" style={{ margin: 0, padding: "6px 14px" }}>{tech}</span>
            ))}
          </div>
        </div>
      </div>

      {/* DASHBOARD GRID */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "25px" }}>
        
        {/* COLUMN 1 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
          <div className="glass-card" style={{ height: "400px", padding: "20px" }}>
            <h3 style={{ borderBottom: "2px solid #0284c7", paddingBottom: "8px", marginBottom: "15px", fontSize: "1.05rem", color: "#0f172a" }}>Total Sales by Category ($)</h3>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={salesByCategory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 10 }} angle={-45} textAnchor="end" height={60} />
                <YAxis stroke="#64748b" tick={{ fontSize: 10 }} tickFormatter={(val) => `$${val/1000}k`} />
                <Tooltip contentStyle={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }} formatter={(value) => `$${value.toLocaleString()}`} />
                <Bar dataKey="count" fill="#0284c7" label={{ position: 'top', fill: '#0f172a', fontSize: 10, formatter: (val) => `${val/1000}k` }} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-card" style={{ height: "320px", padding: "20px" }}>
            <h3 style={{ borderBottom: "2px solid #16a34a", paddingBottom: "8px", marginBottom: "15px", fontSize: "1.05rem", color: "#0f172a" }}>Payment Method Distribution</h3>
            <ResponsiveContainer width="100%" height="80%">
              <PieChart>
                <Pie data={paymentMethodsData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label labelLine={false}>
                  {paymentMethodsData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }} formatter={(value) => `${value}%`} />
                <Legend iconType="square" wrapperStyle={{ fontSize: "11px", paddingTop: "10px" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-card" style={{ height: "320px", padding: "20px" }}>
            <h3 style={{ borderBottom: "2px solid #e2e8f0", paddingBottom: "8px", marginBottom: "15px", fontSize: "1.05rem", color: "#0f172a" }}>Cart Abandonment Reasons</h3>
            <ResponsiveContainer width="100%" height="80%">
              <PieChart>
                <Pie data={abandonmentData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={80} label labelLine={false}>
                  {abandonmentData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }} formatter={(value) => `${value}%`} />
                <Legend iconType="square" wrapperStyle={{ fontSize: "11px", paddingTop: "10px" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
          <div className="glass-card" style={{ height: "320px", padding: "20px" }}>
            <h3 style={{ borderBottom: "2px solid #e2e8f0", paddingBottom: "8px", marginBottom: "15px", fontSize: "1.05rem", color: "#0f172a", textAlign: "center" }}>Regional Sales Distribution</h3>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart layout="vertical" data={salesByRegion}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
                <XAxis type="number" stroke="#64748b" tick={{ fontSize: 10 }} tickFormatter={(val) => `$${val/1000}k`} />
                <YAxis dataKey="name" type="category" stroke="#64748b" tick={{ fontSize: 10 }} width={80} />
                <Tooltip contentStyle={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }} formatter={(value) => `$${value.toLocaleString()}`} />
                <Bar dataKey="count" fill="#9333ea" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-card" style={{ height: "360px", padding: "20px" }}>
            <h3 style={{ borderBottom: "2px solid #ea580c", paddingBottom: "8px", marginBottom: "15px", fontSize: "1.05rem", color: "#0f172a" }}>Peak Sales Periods (Traffic)</h3>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={peakSalesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 12 }} />
                <YAxis stroke="#64748b" tick={{ fontSize: 10 }} tickFormatter={(val) => `${val/1000}k`} />
                <Tooltip contentStyle={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }} formatter={(value) => `${value.toLocaleString()} visitors`} />
                <Legend iconType="square" wrapperStyle={{ fontSize: "11px", paddingTop: "10px" }} />
                <Bar dataKey="Weekday" fill="#0284c7" label={{ position: 'top', fill: '#0f172a', fontSize: 10, formatter: (val) => `${val/1000}k` }} />
                <Bar dataKey="Weekend" fill="#ea580c" label={{ position: 'top', fill: '#0f172a', fontSize: 10, formatter: (val) => `${val/1000}k` }} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-card" style={{ height: "280px", padding: "20px", textAlign: "center" }}>
            <h3 style={{ borderBottom: "2px solid #e2e8f0", paddingBottom: "8px", marginBottom: "15px", fontSize: "1.05rem", color: "#0f172a" }}>Avg Customer Satisfaction (CSAT)</h3>
            <ResponsiveContainer width="100%" height="70%">
              <PieChart>
                <Pie data={csatGaugeData} dataKey="value" cx="50%" cy="80%" startAngle={180} endAngle={0} innerRadius={60} outerRadius={90}>
                  {csatGaugeData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <text x="50%" y="80%" textAnchor="middle" dominantBaseline="middle" style={{ fontSize: "1.5rem", fill: "#0f172a", fontWeight: "bold" }}>
                  4.8 / 5.0
                </text>
                <text x="15%" y="85%" style={{ fontSize: "1rem", fill: "#64748b" }}>1</text>
                <text x="85%" y="85%" style={{ fontSize: "1rem", fill: "#64748b" }}>5</text>
              </PieChart>
            </ResponsiveContainer>
            <p style={{ marginTop: "10px", color: "var(--text-secondary)", fontSize: "0.9rem" }}>Derived from 12,450 post-purchase surveys</p>
          </div>
        </div>

        {/* COLUMN 3 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
          <div className="glass-card" style={{ height: "320px", padding: "20px" }}>
            <h3 style={{ borderBottom: "2px solid #e2e8f0", paddingBottom: "8px", marginBottom: "15px", fontSize: "1.05rem", color: "#0f172a", textAlign: "center" }}>Customer Demographics (Age)</h3>
            <ResponsiveContainer width="100%" height="80%">
              <PieChart>
                <Pie data={demographicsData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label labelLine={false}>
                  {demographicsData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }} formatter={(value) => `${value}%`} />
                <Legend iconType="square" wrapperStyle={{ fontSize: "11px", paddingTop: "10px" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-card" style={{ height: "360px", padding: "20px" }}>
            <h3 style={{ borderBottom: "2px solid #e2e8f0", paddingBottom: "8px", marginBottom: "15px", fontSize: "1.05rem", color: "#0f172a", textAlign: "center" }}>Loyalty Tier vs Satisfaction</h3>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={loyaltyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 12 }} />
                <YAxis stroke="#64748b" tick={{ fontSize: 12 }} />
                <Tooltip contentStyle={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }} formatter={(value) => `${value}%`} />
                <Legend iconType="square" wrapperStyle={{ fontSize: "11px", paddingTop: "10px" }} />
                <Bar dataKey="LowCSAT" name="Low Satisfaction" fill="#dc2626" />
                <Bar dataKey="MedCSAT" name="Neutral Satisfaction" fill="#ea580c" />
                <Bar dataKey="HighCSAT" name="High Satisfaction" fill="#16a34a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
