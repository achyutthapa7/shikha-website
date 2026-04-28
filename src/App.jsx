import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Users, 
  LineChart, 
  Lightbulb, 
  Link as LinkIcon, 
  BookOpen, 
  ArrowRight,
  Heart,
  Globe,
  Menu,
  X,
  Wallet,
  ShieldAlert,
  GraduationCap,
  Scale
} from 'lucide-react';
import { contexts } from './content';

const iconMap = {
  Wallet: <Wallet />,
  Users: <Users />,
  Globe: <Globe />,
  Heart: <Heart />,
  ShieldAlert: <ShieldAlert />
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="glass-nav">
        <div style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--primary)' }}>SupportiveRoots</div>
        
        <div className="desktop-menu" style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', fontWeight: 600 }}>
          {contexts.map(ctx => (
            <a key={ctx.id} href={`#${ctx.id}`} style={{ color: 'var(--text-main)', textDecoration: 'none' }}>{ctx.title}</a>
          ))}
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <motion.div 
        className="mobile-drawer"
        initial={{ y: '-100%' }}
        animate={{ y: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        <div className="drawer-content">
          {contexts.map(ctx => (
            <a 
              key={ctx.id} 
              href={`#${ctx.id}`} 
              onClick={() => setIsOpen(false)}
              className="drawer-link"
              style={{ fontSize: '1.5rem' }}
            >
              {ctx.title}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
};

const Hero = () => (
  <header className="hero">
    <div className="container">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span style={{ 
            background: '#e8f5e9', 
            color: '#2e7d32', 
            padding: '0.5rem 1.2rem', 
            borderRadius: '2rem', 
            fontSize: '0.85rem', 
            fontWeight: 700,
            marginBottom: '1rem',
            display: 'inline-block'
          }}>
            COMPREHENSIVE ASSESSMENT 2024
          </span>
          <h1>Nurturing Resilience in Diverse Contexts</h1>
          <p>
            An evidence-based guide for early childhood educators to support families facing economic, social, cultural, health, and crisis challenges.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="cta-button" onClick={() => document.getElementById('economic').scrollIntoView({ behavior: 'smooth' })}>
              Start Exploring <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  </header>
);

const ContextSection = ({ ctx, index }) => (
  <section id={ctx.id} className="section-padding" style={{ background: index % 2 === 0 ? 'var(--bg-soft)' : 'white' }}>
    <div className="container">
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <div className="card-icon" style={{ width: '5rem', height: '5rem', fontSize: '2.5rem', margin: '0 auto' }}>
          {iconMap[ctx.icon]}
        </div>
        <h2 style={{ fontSize: '3.5rem', margin: '1.5rem 0' }}>{ctx.title}</h2>
        <p style={{ fontSize: '1.3rem', color: 'var(--text-muted)', maxWidth: '900px', margin: '0 auto' }}>{ctx.understanding.description}</p>
      </div>

      {/* 1. Understanding the Context */}
      <div className="content-grid-large" style={{ marginBottom: '6rem' }}>
        <div className="info-card highlight">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--primary)' }}>
            <GraduationCap /> Relevance to ECE
          </h3>
          <p>{ctx.understanding.relevance}</p>
        </div>
        <div className="info-card">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <Lightbulb /> Sociological Research & Theories
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {ctx.understanding.theories.map((t, i) => (
              <div key={i}>
                <strong>{t.name}</strong>
                <p style={{ fontSize: '0.9rem', marginTop: '0.3rem' }}>{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="info-card">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <Globe /> Diversity & Australian Context
          </h3>
          <p>{ctx.understanding.diversity}</p>
        </div>
      </div>

      {/* 2. Impact on Children and Families */}
      <div style={{ marginBottom: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '2rem' }}>Impact Assessment</h3>
          <div style={{ width: '60px', height: '4px', background: 'var(--secondary)', margin: '1rem auto' }}></div>
        </div>
        <div className="grid-cards">
          <div className="card minimal">
            <Heart size={32} color="var(--secondary)" />
            <h4>Development & Wellbeing</h4>
            <p>{ctx.impact.development}</p>
          </div>
          <div className="card minimal">
            <BookOpen size={32} color="var(--secondary)" />
            <h4>Learning & Engagement</h4>
            <p>{ctx.impact.learning}</p>
          </div>
          <div className="card minimal">
            <Users size={32} color="var(--secondary)" />
            <h4>Family & Relationships</h4>
            <p>{ctx.impact.family}</p>
          </div>
          <div className="card minimal">
            <ShieldCheck size={32} color="var(--secondary)" />
            <h4>Service Implications</h4>
            <p>{ctx.impact.services}</p>
          </div>
        </div>
      </div>

      {/* 3. Social Policy & 4. Strategies */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '6rem' }} className="mobile-stack">
        <div className="policy-box-large">
          <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <Scale /> Social Policy & Responses
          </h3>
          <div className="sub-section">
            <strong>Key Frameworks</strong>
            <ul>
              {ctx.policy.frameworks.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
          <div className="sub-section" style={{ marginTop: '2rem' }}>
            <strong>Statistics & Scope</strong>
            <p style={{ fontSize: '0.95rem' }}>{ctx.policy.statistics}</p>
          </div>
          <div className="sub-section" style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(255,255,255,0.5)', borderRadius: '1rem' }}>
            <strong>Policy Evaluation</strong>
            <p style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>{ctx.policy.evaluation}</p>
          </div>
        </div>

        <div className="strategies-box-large">
          <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <ShieldCheck /> Strategies for Practice
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {ctx.strategies.map((s, i) => (
              <div key={i} className="strategy-item">
                <div className="number">{i+1}</div>
                <div>
                  <strong>{s.title}</strong>
                  <p style={{ fontSize: '0.9rem' }}>{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Community Partnerships */}
      <div style={{ marginBottom: '6rem' }}>
        <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>Community & Professional Partnerships</h3>
        <div className="partnerships-grid">
          {ctx.partnerships.map((p, i) => (
            <div key={i} className="partnership-card">
              <Users size={20} />
              <div>
                <strong>{p.name}</strong>
                <p>{p.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Resources for Educators and Children */}
      <div className="resources-section-full">
        <h3 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>Professional & Educational Resources</h3>
        
        <div className="resource-columns">
          <div className="res-col">
            <h4><LinkIcon size={20} /> Websites & Programs</h4>
            {ctx.resources.websites.map((w, i) => (
              <div key={i} className="res-item">
                <a href={w.url} target="_blank" rel="noreferrer">{w.name}</a>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>

          <div className="res-col">
            <h4><BookOpen size={20} /> Storybooks (0-5 Years)</h4>
            {ctx.resources.books.map((b, i) => (
              <div key={i} className="res-item">
                <strong>{b.title}</strong>
                <span className="author">by {b.author}</span>
                <p className="impact-text">{b.impact}</p>
              </div>
            ))}
          </div>

          <div className="res-col">
            <h4><Globe size={20} /> Videos & Media</h4>
            {ctx.resources.videos.map((v, i) => (
              <div key={i} className="res-item">
                <strong>{v.title}</strong>
                <p className="impact-text">{v.impact}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="impact-summary-box">
          <h4>How these promote empathy & resilience</h4>
          <p>{ctx.resources.impactSummary}</p>
        </div>
      </div>
    </div>
  </section>
);

const App = () => {
  return (
    <div className="app-root">
      <Navbar />
      <Hero />
      
      {contexts.map((ctx, index) => (
        <ContextSection key={ctx.id} ctx={ctx} index={index} />
      ))}

      <footer>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: 'var(--primary)' }}>SupportiveRoots</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
              Built for educators to support the diverse needs of Australian families.
            </p>
            <div style={{ marginTop: '3rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              &copy; 2024 Early Childhood Assessment Portal. All content derived from professional assessment documentation.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
