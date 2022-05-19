import "./StyledContactSection2.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../../../components/imgs/arrow.png";
import useForm from "../../../../components/hooks/useForm";
import moon from "../../../../components/imgs/casabruxa.jpg"
import cat from "../../../../components/imgs/cat.gif"
import vampire from "../../../../components/imgs/vampiro.gif"

import LinkWhite from "../../../../components/imgs/link-white.png"
import LinkBlue from "../../../../components/imgs/link-blue.png"

import GitWhite from "../../../../components/imgs/git-white.png"
import GitBlue from "../../../../components/imgs/git-blue.png"

import iconLetter from "../../../../components/imgs/email.png"
import iconPhone from "../../../../components/imgs/fone.png"


export default function ContactSection2() {
    let navigate = useNavigate();
    const [form, onChange, clear] = useForm({ name: "", email: "", celPhone: "", phone: "", message: "" })

    const [active, setActive] = useState(true)

    return (
        <div id="contact-section-2">
            <img className="moon-image" src={moon} alt="moon" />
            <div className="vampire-container">
            <div className="vampire-text">CLIQUE SOBRE O GATO PRETO!</div>
            <div className="triangulo-para-direita"></div>
            <img className="vampire" src={vampire} alt="vampire" />
            </div>
            <div className="header-container-contact-section-2">
                <div className="header-text-contact-section-2">
                    <div onClick={() => navigate(`/`)} className="nav-word-header-contact-section-2">INÍCIO</div>
                    <img className="arrow-section-2" src={arrow} alt="arrow" /> CONTATO</div>
            </div>
            <div className="body-container-contact-section-2">
                {active ?
                    <div className="left-box-contact-section-2">
<div className="left-box-content"></div>
                    </div>
                    :
                    <div className="left-box-contact-section-2">
                        <form action="https://formsubmit.co/christopher.feilstrecker@gmail.com" method="POST" className="form-container-box-contact-section-2">
                            <div className="title-contact-section-2">
                                <div className="title-word-contact-section-2">Entre em contato</div>
                            </div>
                            <div className="form-container-contact-section-2">
                                <div className="form-personal-data-container-contact-section-2">
                                    <input
                                        placeholder={"Seu nome*"}
                                        type='name'
                                        name="name"
                                        value={form.name}
                                        onChange={onChange}
                                        required
                                    />
                                    <input
                                        placeholder={"Seu e-mail*"}
                                        type='email'
                                        name="email"
                                        value={form.email}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="form-message-container-contact-section-2">
                                    <input

                                        placeholder={"Mensagem*"}
                                        type='text'
                                        name="message"
                                        value={form.message}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="form-btn-container-contact-section-2">
                                    <div className="btns-send-container-contact-section-2">
                                        <input type="hidden" name="_captcha" value="false" />
                                        <button type="submit" className="btn-send-email efect-btn">ENVIAR</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                }

                <div className="rigth-box-contact-section-2">

                    <div className="rigth-first-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">MIDIAS</div>

                        <div className="rigth-box-itens-contact-section-2">
                            <a href={"https://www.linkedin.com/in/christopher-feilstrecker/"} target="_blank" className="rigth-box-icon-contact-section-2">
                                <img className="rigth-icon-contact-section-2" src={LinkWhite} alt="linkedin-icon" />
                                <img className="rigth-sub-icon-contact-section-2" src={LinkBlue} alt="linkedin-icon" />
                            </a>
                            <a href={"https://github.com/ChristpherFeilstrecker"} target="_blank" className="rigth-box-icon-contact-section-2">
                                <img className="rigth-icon-contact-section-2" src={GitWhite} alt="git-icon" />
                                <img className="rigth-sub-icon-contact-section-2" src={GitBlue} alt="git-icon" />
                            </a>
                        </div>
                    </div>

                    <div className="rigth-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">TELEFONE/WHATS</div>
                        <div className="rigth-box-itens-contact-section-2">
                            <img className="rigth-icon-contact-section-2" src={iconPhone} alt="letter-icon" />
                            <div className="rigth-box-text-contact-section-2">51 98947 7910</div>
                        </div>
                    </div>
                    <div className="rigth-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">E-MAIL</div>
                        <div className="rigth-box-itens-contact-section-2">
                            <img className="rigth-icon-contact-section-2" src={iconLetter} alt="letter-icon" />
                            <div className="rigth-box-text-contact-section-2">christopher.feilstrecker@gmail.com</div>
                        </div>
                    </div>
                    <div onClick={()=>setActive(!active)}>
                      <img className="black-cat" src={cat} alt="black-cat" />  
                    </div>
                </div>

            </div>
        </div>
    )
}