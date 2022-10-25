import logo from "./logo.png"
export default function Navbar(){
    return(
        <nav className="nav">
            <div className="nav--left">
            <img src={logo} alt="Logo" className="nav--left-img" />     
            <h2 className="nav--left-h2">MemeGenerator</h2>       
            </div>

            <div className="nav--right">
                <p className="nav--right-p">React Course - Project 3</p>
            </div>
        </nav>
    )
}