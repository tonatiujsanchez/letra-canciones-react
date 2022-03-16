
const Alerta = ({ children }) => {
  return (
    <div className="text-center p-3 border-b-2 border-b-red-600">
        <p className="text-xl">{ children }</p>
    </div>
  )
}

export default Alerta