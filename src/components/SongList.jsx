import SongItem from "./SongItem";

const SongList = function({songs}){
    console.log(songs.feed.entry)
    const getSongList = songs.feed.entry
    const songsss = getSongList.map((song) => {return song})
    console.log(songsss)
    return (
        <>
        <h2>This is displayed on songList.jsx</h2>
        <SongItem/>
        </>
    )
};


export default SongList

