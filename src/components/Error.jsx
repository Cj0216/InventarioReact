export const Error = ({msj ="error"}) => {
    return (
        <div>
            <div className="w-full text-center p-2 mb-4 bg-red-600 text-white rounded-md" >
                <p>{msj}</p>
            </div>
        </div>
    )
}
