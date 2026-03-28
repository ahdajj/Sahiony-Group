import { LogoMark } from './logo-mark';

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brand">
          <LogoMark src="/SEC LOGO SAHIONY.jpg" alt="Sahiony Group" />
          <div>
            <div className="kicker">Sahiony Group</div>
            <div className="footer-note">Engineering and contracting excellence across Qatar and Syria.</div>
          </div>
        </div>
        <div className="pill-row">
          <a href="/about" className="pill">About</a>
          <a href="/companies/hta" className="pill">HTA Qatar</a>
          <a href="/companies/sec" className="pill">SEC Syria</a>
          <a href="/services" className="pill">Services</a>
          <a href="/projects" className="pill">Projects</a>
          <a href="/contact" className="pill">Contact</a>
        </div>
      </div>
    </footer>
  );
}
