import React from 'react';
import { motion } from 'framer-motion';
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
  X
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Impact', href: '#impact' },
    { name: 'Policy', href: '#policy' },
    { name: 'Strategies', href: '#strategies' },
    { name: 'Partnerships', href: '#partnerships' },
    { name: 'Resources', href: '#resources' },
  ];

  return (
    <>
      <nav className="glass-nav">
        <div style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--primary)' }}>SupportiveRoots</div>
        
        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 600 }}>
          {navLinks.map(link => (
            <a key={link.name} href={link.href} style={{ color: 'var(--text-main)', textDecoration: 'none' }}>{link.name}</a>
          ))}
        </div>

        {/* Hamburger Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <motion.div 
        className="mobile-drawer"
        initial={{ y: '-100%' }}
        animate={{ y: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        <div className="drawer-content">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="drawer-link"
            >
              {link.name}
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
            LATEST ASSESSMENT 2024
          </span>
          <h1>Nurturing Resilience in Early Childhood</h1>
          <p>
            Early childhood services are crucial for supporting children and families during times of crisis. 
            Ensuring safe, consistent environments while meeting emotional needs.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button style={{ 
              background: 'var(--primary)', 
              color: 'white', 
              padding: '1rem 2rem', 
              borderRadius: '3rem', 
              border: 'none', 
              fontWeight: 600, 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              cursor: 'pointer'
            }}>
              Explore Strategies <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  </header>
);

const SectionHeading = ({ title, subtitle }) => (
  <div style={{ marginBottom: '4rem' }}>
    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{title}</h2>
    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px' }}>{subtitle}</p>
  </div>
);

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* 2. Implications Section */}
      <section id="impact" className="section-padding">
        <div className="container">
          <SectionHeading 
            title="Implications for Services" 
            subtitle="Teachers need to ensure children are in safe and consistent environments and meet their emotional needs." 
          />
          <div className="grid-cards">
            <div className="card">
              <div className="card-icon"><ShieldCheck /></div>
              <h3>Safe Environments</h3>
              <p>Ensuring consistency and safety to encourage children's feelings of security during transitions.</p>
            </div>
            <div className="card">
              <div className="card-icon"><Heart /></div>
              <h3>Emotional Support</h3>
              <p>Meeting the deep-seated emotional needs of children through responsive and supportive settings.</p>
            </div>
            <div className="card">
              <div className="card-icon"><Users /></div>
              <h3>Agency Collaboration</h3>
              <p>Working with other agencies to increase support and adapt practices to crisis situations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Social Policy Section */}
      <section id="policy" className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '4rem', 
            alignItems: 'center' 
          }}>
            <div>
              <SectionHeading 
                title="Policy & Frameworks" 
                subtitle="Australia's strategic response to crisis and emergency situations for young children." 
              />
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { name: 'EYLF', desc: 'Early Years Learning Framework - Wellbeing & Resilience' },
                  { name: 'NQF', desc: 'National Quality Framework - Safe Environments' },
                  { name: 'NDRR', desc: 'National Disaster Risk Reduction Framework' },
                  { name: 'Child Protection', desc: 'Frameworks to protect from family violence' }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 10 }}
                    style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                  >
                    <div style={{ color: 'var(--secondary)', paddingTop: '0.2rem' }}><ShieldCheck size={20} /></div>
                    <div>
                      <strong>{item.name}</strong>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="stat-box">
              <LineChart size={48} style={{ marginBottom: '1rem' }} />
              <h2 style={{ color: 'white', fontSize: '3rem' }}>AIHW 2023</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '1rem' }}>
                A documented rise in the need for family and community services following disasters and emergencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategies Section */}
      <section id="strategies" className="section-padding">
        <div className="container">
          <SectionHeading 
            title="Strategies for Practice" 
            subtitle="Actionable approaches for educators to implement trauma-informed care." 
          />
          <div className="grid-cards">
            {[
              { icon: <Lightbulb />, title: 'Trauma-Informed Practice', desc: 'Understanding the effects of crisis and being sensitive to them.' },
              { icon: <ShieldCheck />, title: 'Predictable Environments', desc: 'Consistency to encourage children\'s feelings of safety.' },
              { icon: <Heart />, title: 'Support Expression', desc: 'Encouraging expression through play, art, and verbal communication.' },
              { icon: <Users />, title: 'Family Relationships', desc: 'Building strong relationships and open lines of communication.' },
              { icon: <Globe />, title: 'Emergency Planning', desc: 'Developing plans for effective responses to emergencies.' }
            ].map((strategy, i) => (
              <div key={i} className="card">
                <div className="card-icon">{strategy.icon}</div>
                <h3>{strategy.title}</h3>
                <p>{strategy.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Community Partnerships Section */}
      <section id="partnerships" className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <SectionHeading 
            title="Community & Professional Partnerships" 
            subtitle="Collaborative networks that deliver effective disaster responses and ongoing support." 
          />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {[
              'Emergency Services (Police, Fire, Ambulance)',
              'Child Protection Services',
              'Social Workers & Counsellors',
              'Community Support Organisations',
              'Red Cross Emergency Assistance'
            ].map((partner, i) => (
              <span key={i} style={{ 
                background: '#f8f9fa', 
                border: '1px solid rgba(0,0,0,0.05)', 
                padding: '1rem 2rem', 
                borderRadius: '3rem', 
                fontWeight: 600,
                color: 'var(--primary)'
              }}>
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Resources Section */}
      <section id="resources" className="section-padding" style={{ background: '#f1f8e9' }}>
        <div className="container">
          <SectionHeading 
            title="Resources for Educators" 
            subtitle="Essential programs, websites, and storybooks to support recovery and resilience." 
          />
          
          <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <LinkIcon size={24} /> Websites & Programs
          </h3>
          <div className="resource-grid" style={{ marginBottom: '4rem' }}>
            {[
              { name: 'Red Cross Australia', url: 'https://www.redcross.org.au', desc: 'Disaster support & preparedness' },
              { name: 'Disaster Assist', url: 'https://www.disasterassist.gov.au', desc: 'Recovery support' },
              { name: 'Safe Steps', url: 'https://www.safesteps.org.au', desc: 'Family violence support' },
              { name: 'Kids Helpline', url: 'https://kidshelpline.com.au', desc: 'Crisis counselling' }
            ].map((link, i) => (
              <div key={i} className="resource-item">
                <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{link.desc}</p>
              </div>
            ))}
          </div>

          <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={24} /> Storybooks
          </h3>
          <div className="resource-grid">
            {[
              { title: 'I’m Not Scared, I’m Prepared!', author: 'Julia Cook' },
              { title: 'Come Back, Ben', author: 'Rosemary Wells' },
              { title: 'The Day the Ocean Came to Visit', author: 'Margaret Wild' },
              { title: 'After the Storm', author: 'Nick Butterworth' }
            ].map((book, i) => (
              <div key={i} className="resource-item">
                <strong>{book.title}</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{book.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / References */}
      <footer>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '4rem' 
          }}>
            <div>
              <h3>SupportiveRoots</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontSize: '0.9rem' }}>
                Dedicated to improving early childhood outcomes through informed practice and policy.
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '1.5rem' }}>References</h4>
              <ul className="reference-list">
                <li>Australian Bureau of Statistics (2021). Migration, Australia.</li>
                <li>Australian Government Department of Education (2022). EYLF 2.0.</li>
                <li>Australian Institute of Health and Welfare (2023). Family Violence.</li>
                <li>Woodrow, C., Grace, R. & Cashmore, J. (2022) Approaches to policy.</li>
                <li>... and 15+ more academic sources.</li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.05)', fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            &copy; 2024 Early Childhood Assessment Portal. Built for Resilience.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
