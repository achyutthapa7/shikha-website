import { useState } from "react";
import { Link, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { contexts } from "./content";
import "./App.css";

const topicImages = {
  economic:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  social:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
  cultural:
    "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80",
  health:
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
  crisis:
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1200&q=80",
};

const subtopicConfig = [
  { id: "understanding", title: "1. Understanding the Context" },
  { id: "impact", title: "2. Impact on Children and Families" },
  { id: "policy", title: "3. Social Policy and Australian Responses" },
  { id: "strategies", title: "4. Strategies for Practice" },
  { id: "partnerships", title: "5. Community and Professional Partnerships" },
  { id: "resources", title: "6. Teacher and Child Resources" },
];

function SiteHeader() {
  return (
    <header className="hero">
      <p className="eyebrow">Digital Portfolio</p>
      <h1>WORKING WITH CHILDREN, FAMILIES, AND COMMUNITIES IN CONTEMPORARY SOCIETY</h1>
      <p className="subtitle">
        Professional academic website for early childhood education in NSW/Australia.
      </p>
    </header>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <Link to="/" className="brand" onClick={() => setMobileOpen(false)}>
          <span className="brand-dot"></span>
          EPRO506 Portfolio
        </Link>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>

        <div className={`nav-links ${mobileOpen ? "open" : ""}`}>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          {contexts.map((ctx) => (
            <Link
              key={ctx.id}
              to={`/topic/${ctx.id}`}
              className={location.pathname.includes(`/topic/${ctx.id}`) ? "active" : ""}
              onClick={() => setMobileOpen(false)}
            >
              {ctx.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <main className="page">
      <SiteHeader />
      <section className="toc-grid">
        {contexts.map((ctx) => (
          <article key={ctx.id} className="card">
            <img src={topicImages[ctx.id]} alt={ctx.title} className="topic-image" />
            <div className="card-body">
              <h2>{ctx.title}</h2>
              <p>{ctx.understanding.description}</p>
              <Link className="link-btn" to={`/topic/${ctx.id}`}>
                Open Main Topic Page
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

function TopicPage() {
  const { topicId } = useParams();
  const topic = contexts.find((ctx) => ctx.id === topicId);

  if (!topic) return <Navigate to="/" replace />;

  return (
    <main className="page">
      <SiteHeader />
      <article className="card topic-detail">
        <img src={topicImages[topic.id]} alt={topic.title} className="topic-image" />
        <div className="card-body">
          <h2>{topic.title}</h2>
          <div className="actions">
            <Link className="link-btn ghost" to="/">
              Back to Home
            </Link>
          </div>
          <h3>Subtopics</h3>
          <nav className="subtopic-list">
            {subtopicConfig.map((subtopic) => (
              <Link
                key={subtopic.id}
                className="subtopic-link"
                to={`/topic/${topic.id}/subtopic/${subtopic.id}`}
              >
                {subtopic.title}
              </Link>
            ))}
          </nav>
        </div>
      </article>
    </main>
  );
}

function renderSubtopic(topic, subtopicId) {
  if (subtopicId === "understanding") {
    return (
      <>
        <h4>Description</h4>
        <p>{topic.understanding.description}</p>
        <h4>Relevance to Early Childhood Education</h4>
        <p>{topic.understanding.relevance}</p>
        <h4>Sociological Theories and Research</h4>
        <ul>
          {topic.understanding.theories.map((theory) => (
            <li key={theory.name}>
              <strong>{theory.name}:</strong> {theory.detail}
            </li>
          ))}
        </ul>
        <h4>Diversity and Contemporary Australian Context</h4>
        <p>{topic.understanding.diversity}</p>
      </>
    );
  }

  if (subtopicId === "impact") {
    return (
      <>
        <h4>Impact on Development and Wellbeing</h4>
        <p>{topic.impact.development}</p>
        <h4>Impact on Learning and Engagement</h4>
        <p>{topic.impact.learning}</p>
        <h4>Impact on Families and Relationships</h4>
        <p>{topic.impact.family}</p>
        <h4>Implications for Early Childhood Services</h4>
        <p>{topic.impact.services}</p>
      </>
    );
  }

  if (subtopicId === "policy") {
    return (
      <>
        <h4>Key Policies and Frameworks</h4>
        <ul>
          {topic.policy.frameworks.map((framework) => (
            <li key={framework}>{framework}</li>
          ))}
        </ul>
        <h4>Statistics and Scope</h4>
        <p>{topic.policy.statistics}</p>
        <h4>Evaluation of Policy Impact on Practice</h4>
        <p>{topic.policy.evaluation}</p>
      </>
    );
  }

  if (subtopicId === "strategies") {
    return (
      <>
        <h4>Practice Strategies</h4>
        <ul>
          {topic.strategies.map((strategy) => (
            <li key={strategy.title}>
              <strong>{strategy.title}:</strong> {strategy.detail}
            </li>
          ))}
        </ul>
      </>
    );
  }

  if (subtopicId === "partnerships") {
    return (
      <>
        <h4>Community and Professional Partnerships</h4>
        <ul>
          {topic.partnerships.map((partnership) => (
            <li key={partnership.name}>
              <strong>{partnership.name}:</strong> {partnership.role}
            </li>
          ))}
        </ul>
      </>
    );
  }

  if (subtopicId === "resources") {
    return (
      <>
        <h4>Websites and Programs</h4>
        <ul>
          {topic.resources.websites.map((website) => (
            <li key={website.name}>
              <a href={website.url} target="_blank" rel="noreferrer">
                {website.name}
              </a>{" "}
              - {website.desc}
            </li>
          ))}
        </ul>
        <h4>Storybooks</h4>
        <ul>
          {topic.resources.books.map((book) => (
            <li key={book.title}>
              <strong>{book.title}</strong> ({book.author}) - {book.impact}
            </li>
          ))}
        </ul>
        <h4>Videos and Media</h4>
        <ul>
          {topic.resources.videos.map((video) => (
            <li key={video.title}>
              <strong>{video.title}</strong> - {video.impact}
            </li>
          ))}
        </ul>
        <h4>Overall Impact</h4>
        <p>{topic.resources.impactSummary}</p>
      </>
    );
  }

  return <p>Subtopic not found.</p>;
}

function SubtopicPage() {
  const { topicId, subtopicId } = useParams();
  const topic = contexts.find((ctx) => ctx.id === topicId);
  const subtopic = subtopicConfig.find((item) => item.id === subtopicId);

  if (!topic || !subtopic) return <Navigate to="/" replace />;

  return (
    <main className="page">
      <SiteHeader />
      <article className="card topic-detail">
        <img src={topicImages[topic.id]} alt={topic.title} className="topic-image" />
        <div className="card-body">
          <h2>{topic.title}</h2>
          <h3>{subtopic.title}</h3>
          <div className="actions">
            <Link className="link-btn ghost" to="/">
              Back to Home
            </Link>
            <Link className="link-btn ghost" to={`/topic/${topic.id}`}>
              Back to Main Page
            </Link>
          </div>
          <div className="academic-content">{renderSubtopic(topic, subtopicId)}</div>
        </div>
      </article>
    </main>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/topic/:topicId" element={<TopicPage />} />
        <Route path="/topic/:topicId/subtopic/:subtopicId" element={<SubtopicPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
