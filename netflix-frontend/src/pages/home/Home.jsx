import { useEffect } from "react"
import { useState } from "react"
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
import Navbar from "../../components/navbar/Navbar"
import "./Home.scss"

import axios from "axios"

const Home = ({type}) => {

  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState([null]);

  useEffect(() => {
    const getRandomLists = async () => {
      try{
        const res = await axios.get(`${type ? "?type=" + type : ""}&${genre ? "genre="+genre : ""}`);

        setLists(res.data);

        console.log(res);
      }
      catch(err){
        console.log(err)
      }
    };

    getRandomLists();
  }, [type,genre]);


  return (
    <div className='home'>
        
        <Navbar/>
        
        <Featured type={type}/>

        <List />
        <List />
        <List />
        <List />

    </div>
  )
}

export default Home