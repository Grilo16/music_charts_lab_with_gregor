import SongItem from "./SongItem";

const SongList = function({songs}){
    const songList = songs.map((song) => {
        return (
            <SongItem song={song} />
        )
    })

    // .map((song) => {
    //     console.log(song)
    // })

    return (
        <>
        <h2>This is displayed on songList.jsx</h2>
        {songList}
        </>
    )
};


export default SongList

