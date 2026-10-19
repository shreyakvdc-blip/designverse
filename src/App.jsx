import "./App.css";

function App() {
  return (
    <main>
      <nav className="navbar">
        <a className="logo" href="#">
          DV<span>®</span>
        </a>
        <span className="nav-label">STUDENT DESIGN & INNOVATION FEST</span>
        <a className="nav-link" href="#about">
          ABOUT ↗
        </a>
      </nav>

      <section className="hero">
        <div className="hero-top">
          <span>AN OPEN CANVAS FOR THE CURIOUS.</span>
          <span>NEW DELHI · INDIA</span>
        </div>

        <h1>
          DESIGN<span className="outline">VERSE</span>
          <span className="asterisk">✳</span>
        </h1>

        <div className="hero-bottom">
          <p>
            Not just a fest.
            <br />
            A collision of ideas,
            <br />
            people & possibilities.
          </p>
          <div className="hero-right">
            <span>CREATE WHAT DOESN'T EXIST YET.</span>
            <a className="register-btn" href="#register">
              CLAIM YOUR SPOT <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="poster">
        <img
          src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1600&q=85"
          alt="Immersive lights at a creative event"
        />
        <div className="poster-tag">IDEAS IN MOTION / 001</div>
        <div className="poster-text">
          MAKE
          <br />
          SOME
          <br />
          <span>NOISE.</span>
        </div>
      </section>

      <section className="about" id="about">
        <span className="section-label">01 / THE EXPERIENCE</span>
        <h2>
          For the ones who
          <br />
          see things <em>differently.</em>
        </h2>
        <p>
          A student-led playground for design, technology and imagination.
          Explore bold ideas, meet your people, and turn what-ifs into something
          real.
        </p>
        <div className="activities">
          <span>01 — CREATIVE WORKSHOPS</span>
          <span>02 — DESIGN CHALLENGES</span>
          <span>03 — LIVE SHOWCASES</span>
          <span>04 — IDEAS & COLLABORATION</span>
        </div>
      </section>

      <section className="register" id="register">
        <span className="section-label">02 / YOUR MOVE</span>
        <h2>
          MAKE YOUR
          <br />
          IDEA <em>MATTER.</em>
        </h2>
        <p>One campus. Many perspectives. Endless possibilities.</p>

        <form
          className="registration-form"
          onSubmit={(event) => {
            event.preventDefault();
            alert(
              "Registration interest submitted! Thank you for joining DesignVerse.",
            );
            event.currentTarget.reset();
          }}
        >
          <label htmlFor="fullName">YOUR NAME</label>
          <input
            id="fullName"
            name="fullName"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">EMAIL ADDRESS</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="interest">WHAT ARE YOU INTO?</label>
          <select id="interest" name="interest" required defaultValue="">
            <option value="" disabled>
              Select your interest
            </option>
            <option>UI/UX Design</option>
            <option>Technology</option>
            <option>Creative Workshops</option>
            <option>Design Challenges</option>
          </select>

          <button className="register-btn" type="submit">
            SUBMIT YOUR INTEREST <span>↗</span>
          </button>
        </form>

        <span className="date-note">
          15 NOVEMBER 2026 · 10 AM ONWARDS
          <br />
          COLLEGE CAMPUS · NEW DELHI
        </span>
      </section>

      <footer>
        <a className="logo" href="#">
          DV<span>®</span>
        </a>
        <span>DESIGNED FOR THE CURIOUS.</span>
        <a
          href="#top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          BACK TO TOP ↑
        </a>
      </footer>
    </main>
  );
}

export default App;
