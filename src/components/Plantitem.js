import CareScale from "./CareScale"
import '../styles/PlantItem.css'
function handleClick(plantName){
    alert(`Vous voulez acheter 1 ${plantName}? Très bon choix`)
}

function Plantitem({light, water, name, cover, price}){        
    return (
        <li className='lmj-plant-item' onClick={() => handleClick(name)}>
            <span className="lmj-plant-item-price">{price}€</span>
            <img src={cover} className="lmj-plant-item-cover" alt={`${name} cover `}/>
            {name}
            <div>                
                <CareScale scaleValue={water} careType="water"/>
                <CareScale scaleValue={light} careType="light"/>
            </div>            
        </li>
    )
}

export default Plantitem