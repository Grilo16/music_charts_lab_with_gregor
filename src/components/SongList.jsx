import SongItem from "./SongItem";

const SongList = function({songs}){
    const songList = songs.map((song) => {
        return (
            <SongItem song={song} listPosition={songs.indexOf(song)+1} />
        )
    })

    return (
        <>
        <h2>This is displayed on songList.jsx</h2>
        <hr />
        {songList}
        </>
    )
};


export default SongList

