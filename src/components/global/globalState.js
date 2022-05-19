import { useEffect, useState } from "react";
import GlobalContext from "./globalContext";
import caneca from "../../images/fotos/Canecas e Squeezes/Caneca Capuccino_CC10017-ok.jpg"
import botton from "../../images/fotos/Bottons e Pins/Bottons - Diversas Personalizacoes_BT7001-ok.jpg"
import chaveiros from "../../images/fotos/Chaveiros/Chaveiro Couro Costurado_cc5003-ok.jpg"
import cracha from "../../images/fotos/Cordoes para Crachas e Acessorios/Cracha Plastico_cp2003-ok.jpg"
import adesivo from "../../images/fotos/Escritorio/Adesivo Escovado_AE30005-ok.jpg"
import JS from "../../components/imgs/js.png"
import HTML from "../../components/imgs/html.png"
import CSS from "../../components/imgs/css.png"
import JEST from "../../components/imgs/jest.png"
import REACT from "../../components/imgs/react.png"
import NODE from "../../components/imgs/node.png"
import SQL from "../../components/imgs/mysql.png"
import TS from "../../components/imgs/ts.png"
import FIRE from "../../components/imgs/firebase.png"

import match1 from "../../components/imgs/projetos/match1.jpg"
import match2 from "../../components/imgs/projetos/match2.jpg"

import ninja1 from "../../components/imgs/projetos/ninja1.jpg"
import ninja2 from "../../components/imgs/projetos/ninja2.jpg"

import food1 from "../../components/imgs/projetos/food1.jpg"
import food2 from "../../components/imgs/projetos/food2.jpg"

import poke1 from "../../components/imgs/projetos/poke1.jpg"
import poke2 from "../../components/imgs/projetos/poke2.jpg"

import ago1 from "../../components/imgs/projetos/ago1.jpg"
import ago2 from "../../components/imgs/projetos/ago2.jpg"

import super1 from "../../components/imgs/projetos/super1.jpg"
import super2 from "../../components/imgs/projetos/super1.jpg"

import slaca1 from "../../components/imgs/projetos/slaca1.jpg"
import slaca2 from "../../components/imgs/projetos/slaca2.jpg"

import cook1 from "../../components/imgs/projetos/cookenu1.jpg"
import cook2 from "../../components/imgs/projetos/cookenu1.jpg"

import labook1 from "../../components/imgs/projetos/labook1.jpg"
import labook2 from "../../components/imgs/projetos/labook2.jpg"

import lama1 from "../../components/imgs/projetos/lama1.jpg"
import lama2 from "../../components/imgs/projetos/lama2.jpg"

import dog1 from "../../components/imgs/projetos/dog1.jpg"
import dog2 from "../../components/imgs/projetos/dog2.jpg"

import pokeapi1 from "../../components/imgs/projetos/pokeapi1.jpg"
import pokeapi2 from "../../components/imgs/projetos/pokeapi2.jpg"

import system1 from "../../components/imgs/projetos/system1.jpg"
import system2 from "../../components/imgs/projetos/system2.jpg"

export default function GlobalState(props) {
    const [cart, setCart] = useState([])

    const removeFromCart = (item) => {
        const index = cart.findIndex((i) => item.id === i.id)
        const newCart = [...cart]
        newCart.splice(index, 1)
        setCart(newCart)
    }

    const addCountProduct = ((id) => {
        const newCart = [...cart]
        const index = newCart.findIndex((i) => id === i.id)

        const newQtd = Number(newCart[index].quantidade) + 1

        newCart[index].quantidade = newQtd
        setCart(newCart)
    })

    const removeCountProduct = ((id) => {
        const newCart = [...cart]
        const index = newCart.findIndex((i) => id === i.id)

        if (newCart[index].quantidade === 0) {
            return newCart
        } else {
            const newQtd = Number(newCart[index].quantidade) - 1
            newCart[index].quantidade = newQtd

        }
        setCart(newCart)

    })

    let allProducts = {
        products: [
            {
                id: "001",
                nome: "PROJETO ASTROMATCH",
                descricao: "Projeto realizado no segundo módulo do bootcamp da Labenu, para introdução a useState e useEffect, simulando site de relacionamento.",
                imagem: [match1, match2],
                referencia: "FRONTEND",
                tecnologias: [[JS, HTML, REACT], ["Styled-components,JSX"]],
                link: "http://ratty-teeth.surge.sh/",
                github: "https://github.com/future4code/Christopher-Silva/tree/master/modulo3/astro-match-projeto/astro-match-projeto"
            },
            {
                id: "002",
                nome: "PROJETO LABENINJA",
                descricao: "Projeto realizado em grupo no terceiro módulo do bootcamp da Labenu, para introdução a processos ágeis e revisão de React, simulando site de prestação de serviços. ",
                imagem: [ninja1, ninja2],
                referencia: "FRONTEND",
                tecnologias: [[JS, HTML, CSS, JEST, REACT], ["Styled-components, JSX, axios, Ant Design, React Select"]],
                link: "https://wakeful-self.surge.sh/",
                github: "https://github.com/ChristpherFeilstrecker/Labe-ninja"
            },
            {
                id: "003",
                nome: "PROJETO LABE-FOOD",
                descricao: "Projeto final do frontend, realizado em grupo no bootcamp da Labenu, para introdução ao 'Material Ui' e revisão de React, simulando site de encomenda de comida, similar a Ifood. ",
                imagem: [food1, food2],
                referencia: "FRONTEND",
                tecnologias: [[JS, HTML, CSS, JEST, REACT], ["Styled-components,JSX,axios"]],
                link: "https://labe-food7.surge.sh/login",
                github: "https://github.com/ChristpherFeilstrecker/Labe-food"
            },
            {
                id: "004",
                nome: "PROJETO POKEDEX",
                descricao: "Projeto realizado em dupla, simultaneamente pelo LIVE SHARE do VS CODE.",
                imagem: [poke1, poke2],
                referencia: "FRONTEND",
                tecnologias: [[JS, HTML, CSS, JEST, REACT], ["Styled-components,axios"]],
                link: "https://stale-day.surge.sh/",
                github: "https://github.com/ChristpherFeilstrecker/Pokedex"
            },
            {
                id: "005",
                nome: "PROJETO AGGOSTINI",
                descricao: "Projeto criado baseado no site da Aggostini, ainda em desenvolvimento",
                imagem: [ago1, ago2],
                referencia: "FULLSTACK",
                tecnologias: [[JS, HTML, CSS, JEST, REACT, NODE, SQL, TS, FIRE], ["Styled-components,JSX, axios"]],
                link: "https://aggostini-template.herokuapp.com/",
                github: "https://github.com/ChristpherFeilstrecker/Template-Aggostini"
            },
            {
                id: "006",
                nome: "PROJETO SUPER TRUNFO VINGADORES",
                descricao: "Projeto do jogo super trunfo no tema vingadores, ainda em desenvolvimento",
                imagem: [super1, super1],
                referencia: "FULLSTACK",
                tecnologias: [[JS, HTML, CSS, JEST, REACT, NODE, SQL, TS, FIRE], ["Styled-components,JSX, axios"]],
                link: "",
                github: ""
            },
            {
                id: "007",
                nome: "PROJETO SLACA ",
                descricao: "Projeto de uma página a fim de chegar o mais próximo possível do modelo sugerido",
                imagem: [slaca1, slaca2],
                referencia: "FRONTEND",
                tecnologias: [[JS, HTML, CSS, JEST, REACT, NODE, SQL, TS, FIRE], ["Styled-components,JSX, axios"]],
                link: "https://concerned-canvas.surge.sh/",
                github: "https://github.com/ChristpherFeilstrecker/Slaca-Galoa"
            },
            {
                id: "008",
                nome: "PROJETO COOKENU ",
                descricao: "Projeto Cookenu API é uma cópia do banco de dados para BACKEND de sites de compartilhamentos de receitas",
                imagem: [cook1, cook1],
                referencia: "BACKEND",
                tecnologias: [[NODE, SQL, TS, FIRE], ["Express, cors, dotenv, knex, UUID, bcrypt, hash, json, testes unitários"]],
                link: "https://documenter.getpostman.com/view/18386367/UVkjvHpB",
                github: "https://github.com/ChristpherFeilstrecker/Cookenu-API"
            },
            {
                id: "009",
                nome: "PROJETO LABOOK ",
                descricao: "Projeto Labook API é uma cópia do banco de dados baseado no Facebook.",
                imagem: [labook1, labook2],
                referencia: "BACKEND",
                tecnologias: [[NODE, SQL, TS, FIRE], ["Express, cors, dotenv, knex, UUID, bcrypt, hash, json, testes unitários"]],
                link: "https://documenter.getpostman.com/view/18385085/UVsHUnyw",
                github: "https://github.com/ChristpherFeilstrecker/Labook-API"
            },
            {
                id: "010",
                nome: "PROJETO LAMA ",
                descricao: "Projeto Lama API simula o backend para um site de shows para um festival com várias bandas.",
                imagem: [lama1, lama2],
                referencia: "BACKEND",
                tecnologias: [[NODE, SQL, TS, FIRE], ["Express, cors, dotenv, knex, UUID, bcrypt, hash, json, testes unitários"]],
                link: "https://documenter.getpostman.com/view/18385085/UVsPPjpR",
                github: "https://github.com/ChristpherFeilstrecker/Lama-API"
            },
            {
                id: "011",
                nome: "PROJETO DOG HERO ",
                descricao: "Projeto Dog Hero é uma API para agendamento de passeios para cachorros.",
                imagem: [dog1, dog2],
                referencia: "BACKEND",
                tecnologias: [[NODE, SQL, TS, FIRE], ["Express, cors, dotenv, knex, UUID, bcrypt, hash, json, testes unitários"]],
                link: "https://documenter.getpostman.com/view/18385085/UVsTr2vB",
                github: "https://github.com/ChristpherFeilstrecker/Doghero"
            },
            {
                id: "012",
                nome: "PROJETO POKEMON GO ",
                descricao: "- Pokemon Go (API) para consumo do banco de dados referente aos pokemons.",
                imagem: [pokeapi1, pokeapi2],
                referencia: "BACKEND",
                tecnologias: [[NODE, SQL, TS, FIRE], ["Express, cors, dotenv, knex, UUID, bcrypt, hash, json, testes unitários"]],
                link: "https://documenter.getpostman.com/view/18385085/UVyvuuDy",
                github: "https://github.com/ChristpherFeilstrecker/PokemoGo-API-"
            },
            {
                id: "013",
                nome: "PROJETO LABENU SYSTEM ",
                descricao: "- Labenu system (API) para consumo do banco de dados referente a cadastro de professores e alunos em uma classe.",
                imagem: [system1, system2],
                referencia: "BACKEND",
                tecnologias: [[NODE, SQL, TS, FIRE], ["Express, cors, dotenv, knex, UUID, bcrypt, hash, json"]],
                link: "https://documenter.getpostman.com/view/18385085/UVyvuuDy",
                github: "https://github.com/ChristpherFeilstrecker/labenu-system9"
            }
        ]
    }

    useEffect(() => {
        const data = localStorage.getItem('cart')
        if (data) {
            setCart(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])


    const data = {
        cart,
        setCart,
        removeFromCart,
        addCountProduct,
        removeCountProduct,
        allProducts
    }

    return (<GlobalContext.Provider value={data}>
        {props.children}
    </GlobalContext.Provider>
    )
}

