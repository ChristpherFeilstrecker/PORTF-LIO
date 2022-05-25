import { Route, Routes } from "react-router-dom";
import "./StyledAboutSection2.css";
import SubSection1About2 from "./SubSectionAbout2/SubSection1About2";
import { useNavigate } from "react-router-dom";
import SubSection2About2 from "./SubSectionAbout2/SubSection2About2";
import SubSection3About2 from "./SubSectionAbout2/SubSection3About2";
import arrow from "../../../../components/imgs/arrow.png"
import house from "../../../../components/imgs/casabruxa.jpg"
import whitcher1 from "../../../../components/imgs/bruxa1.gif"
import whitcher2 from "../../../../components/imgs/bruxa2.png"


export default function AboutSection2() {
    let navigate = useNavigate();
    return (
        <div id="about-section-2">
            <div className="header-container-about-section-2">
                <div className="header-text-about-section-2"><div onClick={() => navigate(`/`)} className="nav-word-header-about-section-2">INÍCIO</div> <img className="arrow-section-2" src={arrow} alt="arrow" /> SOBRE MIM</div>
            </div>
            <img className="whitcher1-section-2" src={whitcher1} alt="whitcher1" />
            <img className="whitcher2-section-2" src={whitcher2} alt="whitcher2" />
            <img className="house-section-2" src={house} alt="house" />
            <div className="body-container-about-section-2">
                <div className="routes-container-about-section-2">
                    <Routes id="routes" className="routes-container-about-section-2">
                        <Route exact path={""} element={<SubSection1About2 />} />
                        <Route exact path={"2/*"} element={<SubSection2About2 />} />
                        <Route exact path={"3"} element={<SubSection3About2 />} />
                    </Routes>
                </div>

                <div className="rigth-container-about-section-2">
                    
                    <ul data-aos="fade" className="nav-container-rigth-about-section-2">
                        <li onClick={() => navigate(``)} className="nav-button-container-about-section-2 efeito1" href="">
                            <div className="nav-button-about-section-2">SOBRE MIM</div>
                        </li>
                        <li onClick={() => navigate(`2/front`)} className="nav-button-container-about-section-2">
                            <div className="nav-button-about-section-2">CONHECIMENTOS</div>
                        </li>
                        <li onClick={() => navigate(`3`)} className="nav-button-container-about-section-2">
                            <div className="nav-button-about-section-2">MINHA HISTÓRIA</div>
                        </li>
                    </ul>
                    <div data-aos="fade" className="button-container-rigth-about-section-2">
                        <div onClick={() => navigate(`/contato`)} className="btn-to-contact  efect-btn-1">CONTATO</div>
                    </div>
                </div>
            </div>
        </div>
    )
}