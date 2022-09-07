import SongList from "../components/SongList";
import {useState, useEffect} from "react"
import DropDownGenre from "../components/DropDownGenre";


const SongDisplayContainer = function(){

    const [songs, setSongs] = useState([])

    const genres = [
        {name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"},
        {name: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"},
        {name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"},
        {name: "Country", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"}
    ]

    const chooseGenre = function(genreURL){
        getApiResult(genreURL)
    };


    const getApiResult = function(apiURL){
        fetch(apiURL)
        .then(res => res.json())
        .then(songList =>  setSongs(songList.feed.entry) )
    }

    useEffect(() => {
        getApiResult("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    },[])




    return (
        <>
        <hr />
        <h2>This is gonna be the song container</h2>
        <hr />
        <DropDownGenre genres = {genres} chooseGenre={chooseGenre}/>
        <hr />
        <SongList songs={songs}/>
        <hr />
        </>
    )
};

export default SongDisplayContainer

