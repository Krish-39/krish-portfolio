import { profile } from "@/src/data/profile";
import { navItems } from "@/src/data/nav";


export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-custom">
        <div className="site-footer__top">
          <div>
            <div className="site-footer__brand">
              <span className="site-footer__brand-bar" aria-hidden="true" />
              <span className="site-footer__name">{profile.name.toUpperCase()}</span>
            </div>
            <p className="site-footer__tagline">{profile.tagline}</p>
          </div>

          <nav aria-label="Footer navigation" className="site-footer__links">
            {navItems.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="site-footer__bottom">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
