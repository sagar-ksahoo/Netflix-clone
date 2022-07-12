import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./Featured.scss"


const Featured = ({type}) => {
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
            
            src="https://cdn.wallpapersafari.com/83/48/Uwd4Xu.jpg" 
            alt="wallpaper" 
        />

        <div className="info">
            <img 
                src="" 
                alt="info-img" 
            />

            <span className="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum aliquam repellat 
            alias ipsa neque illum voluptates dolor aspernatur et quasi facilis, laborum 
            doloremque maxime tenetur possimus hic ratione delectus explicabo?
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