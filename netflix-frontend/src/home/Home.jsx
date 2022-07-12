import Navbar from "../components/navbar/Navbar"
import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
        
        <Navbar/>

        <img 
            width="100%"
            src="https://cdn.wallpapersafari.com/83/48/Uwd4Xu.jpg" 
            alt="wallpaper" 
        />
        
    </div>
  )
}

export default Home