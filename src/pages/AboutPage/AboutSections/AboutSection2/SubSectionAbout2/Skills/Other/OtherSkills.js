import { useNavigate } from "react-router-dom";
import "../StyledSkills.css";

export default function OtherSkills() {

    return (
        <div id="OtherSkills">
            <lu className="skills-container-other">
                <div data-aos="fade-left" className="skills-box-other">
                    <div>
                        <li>SCRUM/KANBAM</li>
                        <li>METODOLOGIAS ÁGEIS</li>
                        <li>LÓGICA DA PROGRAMAÇÃO</li>
                        <li>STYLED-COMPONENTS</li>
                        <li>GIT/GITHUB</li>
                        <li>API RESTFULL</li>
                        <li>HOOKS</li>
                    </div>
                    <div>
                        <li>KNEX</li>
                        <li>AXIOS</li>
                        <li>SCSS</li>
                        <li>VS CODE</li>
                        <li>HEROKU</li>
                        <li>POSTMAN</li>
                    </div>

                </div>


            </lu>
        </div>
    )
}