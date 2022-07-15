import "./ListItem.scss"

import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useEffect } from "react";
import { useState } from "react"

import { Link } from "react-router-dom";


import axios from "axios";

const ListItem = ({index, item}) => {

  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDBmYWQ5NWRlNjE1YjE1NGFjMGU3YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Nzg3NjA2NiwiZXhwIjoxNjU4MzA4MDY2fQ.QpSkzqy2oo9rAVx0uMwkkGoj9Q465Efv9jd-0ItZl8c",
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

 // const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"

  return (

  <Link to="/watch" state={{movie: movie}}>
    <div className="listItem" 
        style={ {left: isHovered && index * 225 -50 + index * 2.5} }
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
    >
        
        <img 
          //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL1sPAldeKHDvBm3WbW3zMnuIH4b-G7nNgW_1R4oACE1vhwui57rw56WDbxuRNMAtFBCw&usqp=CAU" 
          src={movie.img}
          alt="movie-poster" 
        />

        

        {isHovered && (
          <>
        <video src={movie.trailer} autoPlay={true} loop/>
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow className="icon"/>
            <Add className="icon"/>
            <ThumbUpAltOutlined className="icon"/>
            <ThumbDownAltOutlined className="icon"/>
          </div>

          <div className="itemInfoTop">
            <span>{movie.duration}</span>
            <span className="limit">+{movie.limit}</span>
            <span>{movie.year}</span>
          </div>

          <div className="desc">
            {movie.desc}
          </div>

          <div className="genre">{movie.genre}</div>
        </div>
        </>
        )}
        
    </div>

  </Link>
  )
}

export default ListItem