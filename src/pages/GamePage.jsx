import { Link } from 'react-router-dom'
import Puzzle from '../components/Puzzle.jsx'

export default function GamePage() {
  return (
    <section className="game-page">
      <div className="container">
        <nav className="breadcrumb breadcrumb--light">
          <Link to="/">Trang chủ</Link>
          <span>/</span>
          <Link to="/ussh-fun-zone">USSH Fun Zone</Link>
          <span>/</span>
          <span>Minigame</span>
        </nav>
        <Puzzle />
      </div>
    </section>
  )
}
