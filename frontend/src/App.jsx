import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    if (!input) return;
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });
      const data = await res.json();
      setResult(data);
    } catch (error) {
      alert("Error connecting to backend");
    }
    setLoading(false);
  };

  const confidence = result ? Math.round(result.confidence * 100) : 0;
  const confLabel =
    confidence >= 85 ? "High confidence" :
    confidence >= 60 ? "Moderate" : "Low confidence";

  return (
    <>
      {/* HERO */}
      <div className="hero">
        <div className="hero-top">
          <div className="shield-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 3L4 7v5c0 4.42 3.44 8.56 8 9.55C16.56 20.56 20 16.42 20 12V7L12 3z"
                fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M9 12l2.33 2.33L15 9" stroke="white" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div className="hero-title">Legal Grievance Classifier</div>
            <div className="hero-sub">AI-powered complaint analysis & categorization</div>
          </div>
        </div>
        <div className="tags">
          <span className="tag tag-cyber">Cyber Crime</span>
          <span className="tag tag-labour">Labour Issues</span>
          <span className="tag tag-consumer">Consumer Complaints</span>
          <span className="tag tag-property">Property Disputes</span>
          <span className="tag tag-family">Family Law</span>
        </div>
      </div>

      {/* MAIN */}
      <div className="main">
        {/* STEPS */}
        <div className="steps">
          {[
            { n: 1, title: "Describe", desc: "Enter your complaint in any language" },
            { n: 2, title: "Analyze",  desc: "AI translates and classifies your issue" },
            { n: 3, title: "Result",   desc: "Get your legal domain with confidence" },
          ].map(s => (
            <div className="step-card" key={s.n}>
              <div className="step-num">{s.n}</div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* INPUT */}
        <div className="card">
          <div className="card-header">
            <div className="card-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4h12M2 8h8M2 12h5" stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="card-title">Your complaint</div>
              <div className="card-subtitle">Supports English, Hindi, Tamil, Telugu, and more</div>
            </div>
          </div>
          <div className="card-body">
            <textarea
              placeholder="Describe your legal grievance in detail. You may write in your native language..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="input-footer">
              <span className="char-count">{input.trim().length} characters</span>
              <span className="lang-hint">Multilingual supported</span>
            </div>
            <button onClick={handlePredict} disabled={!input.trim() || loading}>
              {loading ? (
                <><div className="spinner" /> Analyzing your complaint...</>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="7" cy="7" r="5" stroke="white" strokeWidth="1.5"/>
                    <path d="M11 11l3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  Analyze complaint
                </>
              )}
            </button>
          </div>
        </div>

        {/* RESULT */}
        {result && (
          <div className="result-card">
            <div className="result-top">
              <span className="result-top-title">Analysis complete</span>
              <span className="success-dot"><span className="dot" />Processed</span>
            </div>
            <div className="result-sections">
              <div className="r-section full">
                <div className="r-label">Translated text</div>
                <div className="r-value">{result.translated}</div>
              </div>
              <div className="r-section">
                <div className="r-label">Legal category</div>
                <div className="category-badge">{result.category}</div>
              </div>
              <div className="r-section">
                <div className="r-label">Confidence score</div>
                <div className="conf-row">
                  <span className="conf-pct">{confidence}%</span>
                  <span className="conf-label">{confLabel}</span>
                </div>
                <div className="bar-bg">
                  <div className="bar-fill" style={{ width: `${confidence}%` }} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;