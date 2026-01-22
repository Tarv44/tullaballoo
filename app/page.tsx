export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="wrap">
      <header>
        <div className="brand">
          <a className="logo" href="/" aria-label="Tullaballoo home">
            Tullaballoo
          </a>
          <div className="pill">Coming soon</div>
        </div>
      </header>

      <main>
        <div className="container">
          <section className="card" aria-label="Coming soon content">
            <div className="hero">
              <h1>Software the way you need it.</h1>

              <p className="subhead">
                <strong>Tullaballoo</strong> is a software studio building
                custom web and app solutions for clients, and creating our own
                thoughtfully designed products.
              </p>

              <div className="status" aria-label="Launch status">
                <strong>Launching soon.</strong>
                <em>Good software takes a moment.</em>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <div className="footer-inner">
          <div className="left">
            <div>© {currentYear} Tullaballoo LLC</div>
            <div>Portland, Oregon</div>
          </div>
          <div className="tagline">Built with care.</div>
        </div>
      </footer>
    </div>
  );
}
