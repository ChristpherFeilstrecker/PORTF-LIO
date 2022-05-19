import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import "./StyledRouter.css";
import TopBar from '../TopBar/TopBar'
import IntroPage from '../IntroPage/IntroPage'
import ProductsPage from '../Products/ProductsPage';
import AboutPage from '../AboutPage/AboutPage'
import ContactPage from '../ContactPage/ContactPage'
import ErrorPage from '../ErrorPage/ErrorPage'
import guost1 from "../../components/imgs/guost1.png"

export const Router = () => {
  const [splash, setSplash] = useState(false)
  
  let [productID, setProductID] = useState('001')

useEffect(()=>{
  setSplash(true)
  setTimeout(()=>{
    setSplash(false)
  },4000)
},[])

  return (
<div>
  {splash?
  <div className='splash-screm'>
    <img className="image-splash1" src={guost1} alt="fantasma1" />
    <img className="image-splash2" src="https://images.vexels.com/media/users/3/130767/isolated/preview/03a0085e97ef237b9fd1999ffd2e5182-desenho-de-fantasma-de-halloween-3.png" alt="fantasma1" />
    </div>
    :
    <BrowserRouter className="page">
      <TopBar/>
      <Routes id="routes">
        <Route exact path={"/"} element={<IntroPage />} />
        <Route exact path={"/sobre/*"} element={<AboutPage />} />
        <Route exact path={"/projetos"} element={<ProductsPage productID={productID} setProductID={setProductID} />} />
        <Route exact path={"/contato"} element={<ContactPage />} />
        <Route element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    }
</div>
    


  )

}