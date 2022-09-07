import DropDownItem from "./DropdownItem";

const DropDownGenre = function ({genres, chooseGenre}){
    const chooseGenres = genres.map((genre) => {
        return (
            <DropDownItem key={genres.indexOf(genre)} genre={genre}/>
        )
    })

    const handleSelectChange = function(e){
        chooseGenre(e.target.value)
    };

    return (
        <select defaultValue={genres[0]}onClick={handleSelectChange} name="genre">
            {chooseGenres}
        </select>
    )
};

export default DropDownGenre