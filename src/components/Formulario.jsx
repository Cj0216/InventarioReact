import { useEffect, useState } from "react"
import { Error } from "./Error"


export const Formulario = ( {product,setProduct,prd,setPrd}) => {
    const [nombre, setNombre] = useState('')
    const [codigo, setCodigo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [reg , setReg ] = useState('')

    const [error, setError] = useState(false)

    useEffect(() => {
        if(Object.keys(prd).length>0){
            setNombre(prd.nombre)
            setCodigo(prd.codigo)
            setDescripcion(prd.descripcion)
            setCantidad(prd.cantidad)
            setReg(prd.reg)
        }

    } , [prd])
    

//Metodo para crear id's unicos
    const generarID = ()=>{
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)
            return(fecha+random)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("enviando form")
        //VALIDAR FORMULARIO
        if ([nombre,codigo,descripcion,cantidad,reg].includes("")) {
            setError(true)
            return
        }
        setError(false)
        //Obejeto de productos
        const objProducts ={
            nombre,
            codigo,
            descripcion,
            cantidad,
            reg,
            
        }

        if (prd.id) {
            objProducts.id=prd.id
            console.log(objProducts)
            console.log(prd)
            
            const productUpdate = product.map((productState)=> productState.id===prd.id ? objProducts : productState)
            setProduct(productUpdate)
            setPrd({})
        }
        else{
            objProducts.id=generarID()
            setProduct([...product,objProducts])
        }
        

        //Reiniciar el form
        setNombre('')
        setCodigo('')
        setDescripcion('')
        setCantidad('')
        setReg('')
        
       
    }
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento inventario</h2>
        <p className="text-lg mt-5 text-center mb-10">
            Añade Productos y {''}
            <span className="text-indigo-600 font-bold ">Administralos</span>
         </p>
         <form 
            className="bg-white mb-10 shadow-md rounded-lg p-10"
            onSubmit={handleSubmit}
         >
            <div className="mb-5">
                <label htmlFor="name" className="block text-gray-700 uppercase font-bold">Nombre Producto </label>
                <input type="text" id="name" placeholder="Nombre del producto" 
                className="border-2 w-full p-2 mt-2 rounded-md"
                value={nombre}
                onChange={(e)=>setNombre(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="code" className="block text-gray-700 uppercase font-bold">Codigo del Producto </label>
                <input type="text" id="code" placeholder="Codigo del Producto" 
                className="border-2 w-full p-2 mt-2 rounded-md"
                value={codigo}
                onChange={(e)=>setCodigo(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="des" className="block text-gray-700 uppercase font-bold">Descripcion del producto </label>
                <input type="text" id="des" placeholder="Descripcion del producto" 
                className="border-2 w-full p-2 mt-2 rounded-md"
                value={descripcion}
                onChange={(e)=>setDescripcion(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="cant" className="block text-gray-700 uppercase font-bold">Cantidad </label>
                <input type="number" min={0} id="cant" placeholder="Cantidad" 
                className="border-2 w-full p-2 mt-2 rounded-md"
                value={cantidad}
                onChange={(e)=>setCantidad(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="reg" className="block text-gray-700 uppercase font-bold">Fecha de Resgistro </label>
                <input type="date"  id="reg" placeholder="Fecha de Resgistro" 
                className="border-2 w-full p-2 mt-2 rounded-md"
                value={reg}
                onChange={(e)=>setReg(e.target.value)}
                />
            </div>
            {error && <Error msj={"Todos los campos son obligarios"}/>}
            <input type="submit" 
            className="bg-indigo-600 hover:bg-indigo-800 w-full p-3 text-white rounded-md font-bold uppercase cursor-pointer transition-all"
            value={prd.id ? "editar producto" :"Agregar producto"}
            />
         </form>
    </div>
  )
}
