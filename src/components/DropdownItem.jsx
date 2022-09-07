const DropDownItem = function({genre, chooseGenre}){
    return (
        <option value={genre.url}>{genre.name}</option>
        )

};

export default DropDownItem