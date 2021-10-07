function Categories({categorie, updateCategorie, categories}){

    return(
        <div>
            <label htmlFor="categories">Choisisez une catégories</label>
            <select name="categories" value={categorie === "" ? "Toutes" : categorie.cat}>
                <option key="" value="toutes" onClick={()=>updateCategorie('')}>Toutes</option>
                {
                    categories.map((cat)=>(
                        <option key={cat} value={cat} onClick={()=>updateCategorie({cat})}>{cat}</option>
                    ))
                }
            </select>
            <button onClick={()=>updateCategorie("")}>Réinitialiser</button>
        </div>      
    )
}

export default Categories