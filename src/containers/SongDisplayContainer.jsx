import SongList from "../components/SongList";
import {useState, useEffect} from "react"


const SongDisplayContainer = function(){

    const [songs, setSongs] = useState([])

    const getApiResult = function(){
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(res => res.json())
        .then(songList =>  setSongs(songList.feed.entry) )
    }

    useEffect(() => {
       getApiResult()
    },[])


    return (
        <>
        <hr />
        <h2>This is gonna be the song container</h2>
        <SongList songs={songs}/>
        <hr />
        </>
    )
};

export default SongDisplayContainer

