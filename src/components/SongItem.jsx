const SongItem = function({song}){
    console.log(song)
    return (
        <h3>{song.title.label}</h3>
    )
};

export default SongItem