import { useNavigate } from "react-router-dom";
import "../StyledSkills.css";
import HTML from "../../../../../../../components/imgs/html.png"
import CSS from "../../../../../../../components/imgs/css.png"
import JS from "../../../../../../../components/imgs/js.png"
import REACT from "../../../../../../../components/imgs/react.png"
import JEST from "../../../../../../../components/imgs/jest.png"

export default function FrontSkills() {
    let navigate = useNavigate();

    return (
        <div id="FrontSkills">
            <div className="skills-container">
                <img data-aos="fade-left" className="skill-image-front-skills" src={HTML} alt="html-icon" />
                <img data-aos="fade-left" className="skill-image-front-skills" src={CSS} alt="css-icon" />
                <img data-aos="fade-left" className="skill-image-front-skills" src={JS} alt="js-icon" />
                <img data-aos="fade-left" className="skill-image-front-skills" src={REACT} alt="react-icon" />
                <img data-aos="fade-left" className="skill-image-front-skills" src={JEST} alt="jest-icon" />
            </div>
        </div>
    )
}