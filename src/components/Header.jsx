import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV, SITE } from '../data/site.js'
import Ticker from './Ticker.jsx'

const today = new Date().toLocaleDateString('vi-VN', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="header">
      <div className="topbar">
        <div className="container topbar__inner">
          <span className="topbar__date">{today}</span>
          <span className="topbar__motto">{SITE.motto}</span>
        </div>
      </div>

      <div className="container masthead">
        <img
          src="/images/logo-ussh.svg"
          alt="Logo Trường Đại học Khoa học Xã hội và Nhân văn, ĐHQG-HCM"
          className="masthead__emblem"
        />
        <Link to="/" className="masthead__logo">
          {SITE.name}
        </Link>
      </div>

      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} aria-label="Điều hướng chính">
        <div className="container nav__inner">
          <button
            className={`nav__toggle ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Mở menu"
          >
            <span />
            <span />
            <span />
          </button>
          <ul className={`nav__list ${open ? 'is-open' : ''}`}>
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} className="nav__link">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <Ticker />
    </header>
  )
}
