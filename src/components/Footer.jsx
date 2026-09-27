import { Link } from 'react-router-dom'
import { NAV, SITE } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <div className="footer__logo">{SITE.name}</div>
          <p className="footer__text">
            Sản phẩm thực hành của sinh viên Báo chí – Trường Đại học Khoa học Xã hội và Nhân văn.
          </p>
        </div>
        <ul className="footer__nav">
          {NAV.map((item) => (
            <li key={item.to}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="footer__cta">
          <p>Có ý tưởng hay lời nhắn cho chúng mình?</p>
          <Link to="/goc-gop-y" className="btn btn--light">
            Gửi thư góp ý ✉️
          </Link>
        </div>
      </div>
      <div className="footer__bottom">
        © {new Date().getFullYear()} {SITE.name} · {SITE.motto}
      </div>
    </footer>
  )
}
