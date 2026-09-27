import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container not-found">
      <span className="not-found__code">404</span>
      <h1>Tin này chưa lên khuôn!</h1>
      <p>Trang bạn tìm không tồn tại hoặc đã được Ban biên tập rút bài.</p>
      <Link to="/" className="btn btn--primary">
        Về Trang chủ
      </Link>
    </section>
  )
}
