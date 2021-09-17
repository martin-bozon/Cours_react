import { plantList } from "../datas/plantList"
import '../styles/ShoppingList.css'
import Plantitem from "./Plantitem"

function ShoppingList(){
    const category = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )
    return(
       <div>
           <ul>
                {
                    category.map((cat)=>(
                        <li key={cat} >{cat}</li>
                    ))
                }
           </ul>
           <ul className='lmj-plant-list'>
                {                    
                    plantList.map(({id, name, cover, light, water}) =>(                                  
                        <Plantitem 
                            name={name} 
                            cover={cover} 
                            id={id} 
                            light={light} 
                            water={water}
                        />
                    ))
                }
           </ul>
       </div>
    )
}

export default ShoppingList