import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

function CareScale({scaleValue, careType}){
    const scaleType = careType === 'light' ? (<img src={sun} alt='sun icon' />) : (<img src={water} alt='water icon' />)
    const range = [1,2,3]

    return <div onClick={()=>{handleClick(careType, scaleValue)}}>
        {range.map((rangeElement)=> 
            scaleValue >= rangeElement ? <span key={rangeElement.toString()} >{scaleType}</span> : null
        )}
    </div>
}

function handleClick(careType, scaleValue){    
    const need = careType === 'light' ? 'éclairage' : 'arrossage'
    const range = scaleValue
    var requirement = ""
    switch (range) {
        case 1 : requirement = 'peu'; break;
        case 2 : requirement = 'modérement'; break;
        case 3 : requirement = 'beacoup'; break;
    }
    alert(`Ce composant est de type ${careType} et la plante à besoin de ${requirement} d'${need}`)
}

export default CareScale