import '../styles/Cart.css'
import { useState } from 'react'
import React from 'react'

function Cart({cart, updateCart}) {    
    const [isOpen, setIsOpen] = useState(false)    
    const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)       
    
    return (isOpen ? (
        <div className="lmj-cart">
            <button className="lmj-cart-toggle-button" onClick={()=>setIsOpen(false)}>Fermer</button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>           
                    <ul>
                        {cart.map(({name, price, amount}, index )=>(
                            <div key={`${name}-${index}`}>                                
                                {name} {price}€ * {amount}
                            </div>
                        ))}
                    </ul>
                    <h3> Total : {total}€</h3>
                    <button className="lmj-cart-toggle-button" onClick={()=>{updateCart([])}}>Vider le panier</button>
                </div>
            ) : (
                <div>Votre panier est vide</div>
            )}            
        </div>
        ) : (
            <div className="lmj-cart-closed">
                <button className="lmj-cart-toggle-button" onClick={()=>setIsOpen(true)}>Ouvri le panier</button>
            </div>
        )        
        )
    }

export default Cart;