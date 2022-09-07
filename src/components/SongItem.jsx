const SongItem = function({song, listPosition}){
    return (
        <>
        <h3>{listPosition}</h3>
        <h3>{song["im:artist"].label}</h3>
        <h3>{song.title.label}</h3>
        <hr />
        </>
    )
};

export default SongItem