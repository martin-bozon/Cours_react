import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleBlur(){
		if(!inputValue.includes('@')){
			alert("Attention il n'y à pas d'@, ceci n'est pas une adresse valide")
		}
	}
	function handleChange(e){
		setInputValue(e.target.value)	
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input type="email" value={inputValue} onChange={handleChange} onBlur={handleBlur}/>
		</footer>
	)	
}

export default Footer