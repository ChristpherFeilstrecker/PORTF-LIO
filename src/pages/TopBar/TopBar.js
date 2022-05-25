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