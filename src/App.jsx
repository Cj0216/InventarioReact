
import { useState,useEffect } from 'react'
import './App.css'
import { Formulario } from './components/Formulario'
import { Header } from './components/Header'
import { ListadoPacientes } from './components/ListadoPacientes'

function App() {
  const [product, setProduct] = useState(JSON.parse(localStorage.getItem('product')) ?? []
  )
  const [prd, setPrd] = useState({})


  
  useEffect(() => {
      localStorage.setItem('product',JSON.stringify(product))
  }, [product])
  

  const eliminatProduct=(id)=>{
    const productsActualizados = product.filter(prd=>prd.id !== id)
    setProduct(productsActualizados)
  }
  return (
    <>
      <div className='container mx-auto mt-20'>
        <Header />
        <div className='mt-12 md:flex'>
          <Formulario
            product={product}
            setProduct={setProduct}
            prd={prd}
            setPrd={setPrd}

          />
          <ListadoPacientes
          setPrd={setPrd}
          product={product} 
          prd={prd}
          eliminatProduct={eliminatProduct}
          />
        </div>
      </div>
    </>
  )
}

export default App
