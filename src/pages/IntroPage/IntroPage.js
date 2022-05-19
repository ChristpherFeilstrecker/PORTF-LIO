import "./StyledIntroPage.css";
import house from "../../components/imgs/house.png"
import zombie from "../../components/imgs/zombie.png"
import frankie from "../../components/imgs/frankenstein.gif"
import eu from "../../components/imgs/eu.jpg"

export default function IntroPage() {

    return (
        <div id="portfolio-intro-page">
            <div className="intropage-body">
                <div className="intropage-container-lefth">
                    <div className="intropage-hi-text-container">
                         <div className="intropage-hi-text">Olá! Me chamo Christopher Feilstrecker</div>
                    </div>
                    <div className="intropage-dev-text-container">
                        <div className="intropage-dev-text-box">
                           <div className="intropage-dev-text">Desenvolvedor Web Fullstack</div> 
                        </div>
                    </div>
                <img className="intropage-frankie" src={frankie} alt="frankie" />
                <div className="img-my-container">
                  <div className="img-my-box">
                  <img className="img-my" src={eu} alt="I" />  
                </div>  
                </div>                                
                </div>
                <div className="intropage-container-rigth">
                    <div className="intropage-light-blink">
                        <img className="intropage-image" src={house} alt="house" />
                    </div>
                    <div className="intropage-box-zombie">
                      <img className="intropage-zombie" src={zombie} alt="zombie" />  
                    </div>
                </div>
            </div>
        </div>
    )
}