import { plantList } from "../datas/plantList"


function Categories({categorie, updateCategorie}){
    const category = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )    

    return(
        <div>
            <label htmlFor="categories">Choisisez une catégories</label>
            <select name="categories" value={categorie === "" ? "Toutes" : categorie.cat}>
                <option key="" value="toutes" onClick={()=>updateCategorie('')}>Toutes</option>
                {
                    category.map((cat)=>(
                        <option key={cat} value={cat} onClick={()=>updateCategorie({cat})}>{cat}</option>
                    ))
                }
            </select>
            <button onClick={()=>updateCategorie("")}>Réinitialiser</button>
        </div>      
    )
}

export default Categories