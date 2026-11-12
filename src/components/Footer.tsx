import { MessageCircle, Phone, Mail } from 'lucide-react'
import { site } from '../config'
import { waHref, WHATSAPP_CONFIGURED, PHONE_CONFIGURED } from '../lib/whatsapp'

export default function Footer() {
  const year = new Date().getFullYear()
  const wa = waHref()
  const waProps = WHATSAPP_CONFIGURED ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <footer className="site-footer">
      <div className="site-footer__col">
          <h2 className="site-footer__head mono">Contact</h2>
          <ul>
            <li>
              {PHONE_CONFIGURED ? (
                <a href={`tel:${site.company.phoneHref}`}>
                  <Phone size={14} strokeWidth={1.8} aria-hidden="true" /> {site.company.phoneDisplay}
                </a>
              ) : (
                <span>
                  <Phone size={14} strokeWidth={1.8} aria-hidden="true" /> {site.company.phoneDisplay}
                </span>
              )}
            </li>
            <li>
              <a href={wa} {...waProps}>
                <MessageCircle size={14} strokeWidth={1.8} aria-hidden="true" />{' '}
                {WHATSAPP_CONFIGURED ? site.company.phoneDisplay : '[WHATSAPP NUMBER]'}
              </a>
            </li>
            <li>
              <span style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '8px' }}>
                <Mail size={14} strokeWidth={1.8} aria-hidden="true" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>
                  {Array.isArray(site.company.email) ? (
                    site.company.email.map((em) => (
                      <a key={em} href={`mailto:${em}`} style={{ display: 'block', marginBottom: '2px' }}>
                        {em}
                      </a>
                    ))
                  ) : (
                    <a href={`mailto:${site.company.email}`}>{site.company.email}</a>
                  )}
                </span>
              </span>
            </li>
          </ul>
          <p className="site-footer__area mono">{site.company.serviceArea}</p>
        </div>

        <nav className="site-footer__col" aria-label="Footer">
          <h2 className="site-footer__head mono">Navigate</h2>
          <ul>
            {site.nav.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__col">
          <h2 className="site-footer__head mono">Services</h2>
          <ul>
            {site.services.slice(0, 6).map((s) => (
              <li key={s.index}>
                <a href="#services">{s.title}</a>
              </li>
            ))}
            <li>
              <a href="#services">View all 12 categories</a>
            </li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h2 className="site-footer__head mono">Contact</h2>
          <ul>
            <li>
              {PHONE_CONFIGURED ? (
                <a href={`tel:${site.company.phoneHref}`}>
                  <Phone size={14} strokeWidth={1.8} aria-hidden="true" /> {site.company.phoneDisplay}
                </a>
              ) : (
                <span>
                  <Phone size={14} strokeWidth={1.8} aria-hidden="true" /> {site.company.phoneDisplay}
                </span>
              )}
            </li>
            <li>
              <a href={wa} {...waProps}>
                <MessageCircle size={14} strokeWidth={1.8} aria-hidden="true" />{' '}
                {WHATSAPP_CONFIGURED ? site.company.phoneDisplay : '[WHATSAPP NUMBER]'}
              </a>
            </li>
            <li>
              <span style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '8px' }}>
                <Mail size={14} strokeWidth={1.8} aria-hidden="true" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>
                  {Array.isArray(site.company.email) ? (
                    site.company.email.map((em) => (
                      <a key={em} href={`mailto:${em}`} style={{ display: 'block', marginBottom: '2px' }}>
                        {em}
                      </a>
                    ))
                  ) : (
                    <a href={`mailto:${site.company.email}`}>{site.company.email}</a>
                  )}
                </span>
              </span>
            </li>
          </ul>
          <p className="site-footer__area mono">{site.company.serviceArea}</p>
        </div>
      </div>

      <div className="site-footer__bar">
        <p>
          © {year} {site.company.fullName}. All rights reserved.
        </p>
        <p className="mono">{site.company.descriptor}</p>
      </div>
    </footer>
  )
}
