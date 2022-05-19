import { useNavigate } from "react-router-dom";
import "../StyledSkills.css";
import NODE from "../../../../../../../components/imgs/node.png"
import TS from "../../../../../../../components/imgs/ts.png"
import MYSQL from "../../../../../../../components/imgs/mysql.png"
import AWS from "../../../../../../../components/imgs/aws.png"
import FIREBASE from "../../../../../../../components/imgs/firebase.png"


export default function BackSkills() {
    let navigate = useNavigate();
    
    return (
<div id="BackSkills">
<div className="skills-container">
                <img data-aos="fade-left" className="skill-image-front-skills" src={NODE} alt="html-icon" />
                <img data-aos="fade-left" className="skill-image-front-skills" src={TS} alt="css-icon" />
                <img data-aos="fade-left" className="skill-image-front-skills" src={MYSQL} alt="js-icon" />
                <img data-aos="fade-left" className="skill-image-front-skills" src={AWS} alt="react-icon" />
                <img data-aos="fade-left" className="skill-image-front-skills" src={FIREBASE} alt="jest-icon" />
            </div>
</div>
    )
}