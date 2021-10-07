import { plantList } from "../datas/plantList"
import '../styles/ShoppingList.css'
import Categories from "./Categories"
import Plantitem from "./Plantitem"
import { useState } from 'react/cjs/react.development';

function ShoppingList({cart, updateCart}){

    const [currentCat, updateCurrentCat] = useState("")    
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
       <div className='lmj-shopping-list'>
           <Categories categorie={currentCat} updateCategorie={updateCurrentCat} categories={category}/>                     
           <ul className='lmj-plant-list'>
                {                                                
                    currentCat === "" ? (
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
                    ) : (
                        plantList.filter(plant => plant.category === currentCat.cat).map(({id, name, cover, light, water, price})=>(
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
                    )                   
                }
           </ul>
       </div>
    )
}

export default ShoppingList