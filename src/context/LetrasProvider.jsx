import { useState, createContext } from "react";
import axios from "axios";


const LetrasContext = createContext();

const LetrasProvider = ({ children }) => {

    const [ alerta, setAlerta ] = useState('');
    const [ letra, setLetra ] = useState('');
    const [ cargando, setCargando ] = useState(false);


    const busquedaLetra = async ( busqueda ) =>{
        setCargando(true)
        setLetra('')
        try {
            const { artista, cancion } = busqueda;
            const url = `https://api.lyrics.ovh/v1/${ artista }/${ cancion }`;

            const { data } = await axios.get( url );


            setLetra( data.lyrics );

        } catch (error) {
            console.log( error );
            setAlerta( 'No se encontraron resultados' );
        }finally{
            setTimeout(() => {
                setCargando(false)
            }, 2000);
        }

    }

  return (
    <LetrasContext.Provider
    value={{
        alerta,
        setAlerta,
        busquedaLetra,
        letra,
        cargando
    }} >
        { children }
    </LetrasContext.Provider>
  )
}


export { 
    LetrasProvider
}
export default LetrasContext;