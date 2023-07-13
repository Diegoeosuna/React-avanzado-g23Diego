import SongList from '@/components/SongList'
import SongDetail from '@/components/SongDetail'
import './home.css'
import { SongProvider } from '@/context/SongContext'
import Header from '@/components/Header'

const Home = () => {
  return (
    <SongProvider>
      <Header />
        <div className="home-container">
          <div className="izquierdo">
            <h2>Izquierdo</h2>
            <SongList />
          </div>
        <div className="derecho">
            <h2>Derecho</h2>
            <SongDetail />
        </div>
      </div>
    </SongProvider>

  )
}

export default Home