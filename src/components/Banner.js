import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    return (
        <div className="lmj-banner">
            <h1 className="lmj-title">La Maison Jungle</h1>
            <img src={logo} alt="Logo de la maison jungle" className="lmj-logo"/>
        </div>
    )
}

export default Banner;