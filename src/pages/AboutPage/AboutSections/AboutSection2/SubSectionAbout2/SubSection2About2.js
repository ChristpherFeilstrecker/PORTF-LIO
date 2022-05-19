import { Route, Routes } from "react-router-dom"
import BackSkills from "./Skills/Back/Back"
import FrontSkills from "./Skills/Front/Front"
import { useNavigate } from "react-router-dom";
import OtherSkills from "./Skills/Other/OtherSkills";

export default function SubSection2About2() {
    let navigate = useNavigate();
    return (
        <div className="left-container-about-section-2">
            <div data-aos="fade-left" className="title-left-about-section-2">Caminho de aprendizado</div>
            <div data-aos="fade" className="text-left-about-section-2">Realizei o bootcamp da Labenu para Desenvolvedor Web Fullstack, com mais de mil horas de duração, onde desenvolvi projetos semanais, individuais e em grupo. Após o curso, iniciei trabalhos freelancer e pessoais em busca de aparfeiçoamento, além da realização de mais cursos para expandir meus conhecimentos.</div>
            <div className="left-container-skills-about-section-2">
              <div className="btns-skills-container-about-section-2">
                  <button className="btn-skills" onClick={() => navigate(`front`)}>Front</button>
                  <button className="btn-skills" onClick={() => navigate(`back`)}>Back</button>
                  <button className="btn-skills" onClick={() => navigate(`outros`)}>outros</button>
              </div>
              <div className="box-skills-container-about-section-2">
              <Routes id="routes" className="routes-container-about-section-2">
                        <Route exact path={"front"} element={<FrontSkills />} />
                        <Route exact path={"back"} element={<BackSkills />} />
                        <Route exact path={"outros"} element={<OtherSkills />} />
                    </Routes>
              </div>
            </div>
        </div>
    )
}