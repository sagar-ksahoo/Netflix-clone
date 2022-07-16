import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./Featured.scss"


const Featured = ({type}) => {

    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
            try{
                const res = await axios.get(`/movies/random?type=${type}`,{
                    headers: {
                        token:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDBmYWQ5NWRlNjE1YjE1NGFjMGU3YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Nzg3NjA2NiwiZXhwIjoxNjU4MzA4MDY2fQ.QpSkzqy2oo9rAVx0uMwkkGoj9Q465Efv9jd-0ItZl8c",
                      },
                })

                setContent(res.data[0])
            }
            catch(err){
                console.log(err) ;
            }
        };
        getRandomContent();
    }, [type])

  return (    
    <div className="featured">
        
        {
            type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>

                    <select name="genre" id="genre">
                        <option >Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )
        }

        <img 
            
            src={content.img}
            alt="wallpaper" 
        />

        <div className="info">
            <img 
                src={content.imgTitle}
                alt="info-img" 
            />

            <span className="desc">
            {content.desc}
            </span>

            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>

                <button className="more">
                    <InfoOutlined />
                    <span>Info</span>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Featured