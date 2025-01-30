// import './App.css'
import './assets/style.css'
import HomeAbout from './component/Home-About'
import HomeBanner from './component/home-banner'
import HomeBannerBtm from './component/Home-Banner-Btm'
import HomePopularTour from './component/Home-Popula-Tour'


function App() {
  return (
    <>
      <HomeBanner></HomeBanner>
      <HomeBannerBtm></HomeBannerBtm>
      <HomeAbout></HomeAbout>
      <HomePopularTour></HomePopularTour>
    </>
  )
}

export default App
