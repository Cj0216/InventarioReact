export const Producto = ({prod,setPrd,eliminatProduct}) => {

  return (
    <div className="m-5 bg-white shadow-md p-5 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: 
                <span className="font-normal normal-case"> {prod.nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Codigo del producto: 
                <span className="font-normal normal-case"> {prod.codigo}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Descripcion del producto: 
                <span className="font-normal normal-case"> {prod.descripcion}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Cantidad registrada: 
                <span className="font-normal normal-case"> {prod.cantidad}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de registro: 
                <span className="font-normal normal-case"> {prod.reg}</span>
            </p>
            <div className="flex justify-between mt-6">
                <button 
                    type="button"
                    className="py-3 px-10 bg-cyan-400 hover:bg-cyan-600 text-white uppercase rounded-lg font-bold "
                    onClick={()=>setPrd(prod)}
                >Editar</button>
                 <button 
                    type="button"
                    className="py-3 px-10 bg-red-500 hover:bg-red-600 text-white uppercase rounded-lg font-bold "
                    onClick={()=>eliminatProduct(prod.id)}
                >Eliminar</button>
            </div>
        </div>
  )
}
