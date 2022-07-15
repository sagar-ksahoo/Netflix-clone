import { ArrowBackOutlined } from "@material-ui/icons"
import { Link, useLocation } from "react-router-dom";
import "./Watch.scss"

const Watch = () => {

  const location = useLocation();
  const movie = location.state.movie;
  //console.log(location.state)
  //console.log(movie)
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined />
            Home
        </div>

        <video 
        className="video" 
        autoPlay
        progress
        controls
        //src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
        src={movie.video}
        />
    </div>
  )
}

export default Watch