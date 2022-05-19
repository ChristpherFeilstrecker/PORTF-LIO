import eu from "../../../../../components/imgs/eu.jpg"
import nota from "../../../../../components/imgs/nota.png"

export default function SubSection1About2() {


    return (
        <div className="left-container-about-section-2">
            <div data-aos="fade-left" className="title-left-about-section-2">Olá! Eu sou Christopher Feilstrecker</div>
            <div className="box-left-about-section-2">
                <div className="container-image-section-2">
                    <div className="halftone">
                        <img className="image-section-2" src={eu} alt="face" />
                    </div>
                </div>
                <div data-aos="fade" className="text-left-about-section-2">Desenvolvedor web, apaixonado pela programação, meu trabalho é meu hobby... O que eu adoro na programação é a chance de dar vida a uma ideia. Você só precisa de uma ideia, algo para comer e um laptop...então..."Can't Stop The Feeling! <img className="nota-section-2" src={nota} alt="nota-musical" />".</div>
            </div>
        </div>
    )
}