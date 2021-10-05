import { plantList } from "../datas/plantList"
import '../styles/ShoppingList.css'
import Plantitem from "./Plantitem"

function ShoppingList({cart, updateCart}){
    const category = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )
    function addToCart(name, price){
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if(currentPlantSaved){
            const cartFilteredCurrentplant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentplant, {name, price, amount: currentPlantSaved.amount +1}
            ])
        }else{
            updateCart([
                ...cart, {name, price, amount: 1}
            ])
        }
    }
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
                    plantList.map(({id, name, cover, light, water, price}) =>(   
                        <div key={id}>
                            <Plantitem 
                                name={name} 
                                cover={cover}                                 
                                light={light} 
                                water={water}
                                price={price}
                            />
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>                            
                        </div>                               
                    ))
                }
           </ul>
       </div>
    )
}

export default ShoppingList