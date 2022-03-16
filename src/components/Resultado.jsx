import useLetras from "../hooks/useLetras"
import Alerta from './Alerta'
import Loading from './Loading'

const Resultado = () => {

  const { alerta, letra, cargando } = useLetras();


  return (
    <div className="bg-slate-100 min-w-[300px] w-full md:w-auto h-80 md:grow py-5 px-5 rounded-md md:h-[41.5rem] overflow-y-scroll">
        { alerta 
            ? <Alerta>{ alerta }</Alerta>
            : cargando 
              ? <div className="w-full"><Loading /> </div>
              : ( letra )
                ? <div className="whitespace-pre-wrap text-center my-5">{ letra }</div>
                : <p className="text-center mt-20 text-3xl font-bold text-gray-300 md:w-72 mx-auto">Busca letras de tus Canciones Favoritas</p>
        }
     
    
    </div>
  )
}

export default Resultado