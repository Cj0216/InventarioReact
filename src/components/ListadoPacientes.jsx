
import { Producto } from "./Producto"


export const ListadoPacientes = ({ product,setPrd,eliminatProduct }) => {

    return (

        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
            {product.length === 0 ? (
                <>
                <h2 className="font-black text-3xl text-center">No hay productos registrados</h2>
           <p className="text-xl mt-5 mb-10 text-center">
               Agrega productos en el 
               <span className="text-indigo-600 font-bold"> Formulario</span>
           </p>
           </>
                
            ) : (
            
            <>
                     <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus
                <span className="text-indigo-600 font-bold"> Productos</span>
            </p>
           {product.map((prod)=>{
            return(
                <Producto
                    prod={prod}
                    key={prod.id}
                    setPrd={setPrd}
                    eliminatProduct={eliminatProduct}
                />
            )
           })}
                </>)}
           
           

        </div>
    )
}
