import { useNavigate } from "react-router-dom";
import "./StyledProductsPage.css";
import CardProducts from "./CardProducts";
import { useContext, useState } from "react";
import GlobalContext from "../../components/global/globalContext";
import zumbi from "../../components/imgs/zumbi.gif";
import cemiterio from "../../components/imgs/cemiterio.jpg"

export default function ProductsPage(props) {
    const data = useContext(GlobalContext);
    const products = data.allProducts.products;
    const cart = data.cart;
    const setCart = data.setCart;
    const [alert, setAlert] = useState(false)
    const [message, setMessage] = useState("")
    let [search, setSearch] = useState("PROJETOS");
    let [qtd, setQtd] = useState("1")
    const navigate = useNavigate();

    const showModal = () => {
        let element = document.getElementById("modal");
        element.classList.add("show-modal");
    }

    const hideModal = () => {
        let element = document.getElementById("modal");
        element.classList.remove("show-modal");
    }

    const showDetailProduct = (id) => {
        props.setProductID(id)
        showModal()
    }

    const listProducts = products
        .filter((product) => {
            if (search === "PROJETOS") {
                return (product)
            } else { return (product.referencia.toUpperCase().includes(search.toUpperCase())); }

        })
        .map((product) => {
            return <CardProducts key={product.id} product={product} showDetailProduct={showDetailProduct} />
        })

    var listProductsDetail = products
        .filter((product) => {
            return (product.id === props.productID)
        })

    const addProductToCart = ((product) => {
        const index = cart.findIndex((i) => product.id === i.id)
        if (index === -1) {
            const newProduct = {
                id: product.id,
                nome: product.nome,
                descricao: product.descricao,
                imagem: product.imagem,
                referencia: product.referencia,
                quantidade: qtd
            }
            const newCart = [...cart, newProduct]
            setCart(newCart)
            setMessage("Produto adicionado no carrinho")
            setAlert(true)
            showAlert()
        } else {
            setMessage("Produto ja consta no carrinho")
            setAlert(true)
            showAlert()
        }

    })

    const listImgs = listProductsDetail[0].tecnologias[0]
        .map((product) => {
            return <img className="tecnologi-image" src={product} alt="tecnologi" />
        })

    const showAlert = () => {
        setTimeout(() => {
            setAlert(false)
            hideModal()
        }, 4000)
    }
    return (
        <div id="productsPage">
 <img className="zumbi" src={zumbi} alt="zumbi" />
            <div className="modal" id="modal">
                <div className="alert-container">
                    <div className={alert ? "alert-add-product-active" : "alert-add-product"}>{message} </div>
                </div>
                <div className="modal-content">
                    <div className="modal-product-container">
                        <div className="modal-title-container-product-title">
                            <div className="modal-title-product">DETALHES DO PROJETO</div>
                        </div>

                        <div className="modal-detail-project">
                            <div className="modal-box-images">
                                <img className="modal-image-product-sector-1" src={listProductsDetail[0].imagem[0]} alt="caneca" />
                                <img className="modal-image-product-sector-1" src={listProductsDetail[0].imagem[1]} alt="caneca" />
                            </div>
                            <div className="modal-box-details">
                              <div className="text-detail-project">NOME: <strong>{listProductsDetail[0].nome}</strong></div>
                              <div className="description-title-detail-project">DESCRIÇÃO:</div>
                            <div className="text-detail-project"><strong>{listProductsDetail[0].descricao}</strong></div>
                            <div className="tecnologi-conteiner-project">
                            <div className="text-detail-project">TECNOLOGIAS:</div>
                            <div className="tecnologi-images-container">
                                {listImgs}
                            </div>  
                            <div className="text-detail-project">{listProductsDetail[0].tecnologias[1]}</div>
                            </div>
                            <div className="modal-btn-container">
                                <a href={listProductsDetail[0].link} target="_blank" className="btn-skills">PROJETO</a>
                                <a href={listProductsDetail[0].github} target="_blank" className="btn-skills">GITHUB</a>
                            </div>  
                            </div>
                        </div>
                    </div>
                    <span onClick={() => hideModal()} className="close-modal">&times;</span>
                </div>
            </div>
            <div className="body-products">
                <div className="menu-products-sector-1">
                    <div className="box-menu-products-sector-1">
                        <div className="tittle-menu-products-sector-1">CATEGORIAS</div>
                        <div className="box-category-menu-products-sector-1">
                            <div onClick={() => setSearch("PROJETOS")} className="category-sector-1 category-efect1" >TODOS PROJETOS</div>
                            <div onClick={() => setSearch("FRONTEND")} className="category-sector-1 category-efect2 " >FRONTEND</div>
                            <div onClick={() => setSearch("BACKEND")} className="category-sector-1 category-efect3">BACKEND</div>
                            <div onClick={() => setSearch("FULLSTACK")} className="category-sector-1 category-efect4">FULLSTACK</div>
                        </div>
                    </div>
                </div>
                <div className="products-sector-1">
                    <div className="box-section-products-sector-1">
                        <div className="tittle-products-sector-1">{search.toUpperCase()}</div>
                        <div className="container-products-sector-1">
                            {listProducts}
                        </div>
                    </div>
                </div>
            </div>
            <img className="cemiterio-background" src={cemiterio} alt="cemiterio" />
        </div>
    )
}