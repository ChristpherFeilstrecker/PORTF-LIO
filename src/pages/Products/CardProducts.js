import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CardProducts(props) {
    const { id, imagem, nome, descricao, referencia } = props.product
    const [loading, setLoading] = useState(true)
    let navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])
    
    return (
        <div key={id} id="errorpage">
            <div className="product-sector-1">
                {loading ?
                    <div className="loader"></div>
                    : <div className="product-sector-1">
                        <img className="image-product-sector-1" src={imagem[0]} alt="caneca" />
                        <div className="detail-container-product-sector-1">
                            <div className="detail-product-sector-1">{nome}</div>
                            <div className="detail-product-sector-1">{referencia}</div>
                        </div>
                        <div className="container-btn-product-sector-1">
                            <div onClick={() => props.showDetailProduct(id)} className="btn-project-box">
                                <div className="btn-to-contact  efect-btn-1">DETALHES </div>
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    )
}