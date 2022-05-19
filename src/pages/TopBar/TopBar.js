import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StyledTopBar.css";


export default function TopBar() {
    let navigate = useNavigate();
    let [menu, setMenu] = useState(true)

    const menuOpen = () => {

        if (menu === false) {
            setMenu(true)
        } else {
            setMenu(false)
        }
    }

    const navigateCloseMenu = ((nav) => {
        navigate(nav)
        setMenu(true);
    })

    return (
        <header className="top-bar-container">
            <div className="top-bar">
                <div className="container-logo">
                    <div className="lines" onClick={() => setMenu(!menu)}>
                        <span className={menu?'line1':'line1-active'}></span>
                        <span className='line2'></span>
                        <span className={menu?'line3':'line3-active'}></span>
                    </div>
                </div>
                
                <div id='nav-container' className="nav-container">
                    <div className={menu ? 'hide-nav-menu-container' : 'nav-menu-container'}>
                        <div className="nav-section ">
                            <ul className="nav-buttons">
                                <li className="nav-button" onClick={() => navigateCloseMenu(`/sobre`)}>SOBRE</li>
                                <li className="nav-button" onClick={() => navigateCloseMenu(`/projetos`)}>PROJETOS</li>
                                <li className="nav-button" onClick={() => navigateCloseMenu(`/contato`)}>CONTATO</li>                                                              
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}