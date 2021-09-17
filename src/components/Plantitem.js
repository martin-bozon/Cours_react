import CareScale from "./CareScale"
import '../styles/PlantItem.css'

function Plantitem({light, water, id, name, cover}){        
    return (
        <li key={id} className='lmj-plant-item'>
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