import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import FacesPage from './pages/FacesPage.jsx'
import FunZonePage from './pages/FunZonePage.jsx'
import GamePage from './pages/GamePage.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
import FeedbackPage from './pages/FeedbackPage.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])

  return (
    <div className="app">
      <Header />
      <main className="page" key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diem-tin-nhan-van" element={<CategoryPage category="diem-tin" />} />
          <Route path="/guong-mat-nhan-van" element={<FacesPage />} />
          <Route path="/ussh-fun-zone" element={<FunZonePage />} />
          <Route path="/ussh-fun-zone/minigame" element={<GamePage />} />
          <Route path="/goc-gop-y" element={<FeedbackPage />} />
          <Route path="/bai-viet/:slug" element={<ArticlePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
