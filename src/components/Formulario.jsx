import { useState } from 'react'
import useLetras from '../hooks/useLetras'


const Formulario = () => {

  const [ busqueda, setBusqueda ] = useState({
    artista: '',
    cancion: ''
  })

  const { setAlerta, busquedaLetra } = useLetras();


  const handleSubmit = ( e ) => {
    e.preventDefault();

    if( Object.values( busqueda ).includes('') ){
      setAlerta('Todos los campos son obligatorios');
      return;
    }

    busquedaLetra( busqueda )

    setAlerta('')
  }

  return (
    <form
      onSubmit={ handleSubmit } 
      className="bg-slate-100 w-full grow md:grow-0 md:w-80 py-5 px-2 rounded-md">
        <div className="mb-8">
          <label htmlFor="artista" className="block uppercase font-bold text-gray-500 pb-2">Artista</label>
          <input 
            type="text"
            name="artista" 
            id="artista" 
            placeholder="Nombre artista"
            className="py-3 px-3 rounded-md w-full"
            value={ busqueda.artista }
            onChange ={ ( e ) => setBusqueda({ 
              ...busqueda,
              [ e.target.name ]: e.target.value
             }) } />
        </div>
        <div className="mb-8">
          <label htmlFor="cancion" className="block uppercase font-bold text-gray-500 pb-2">Canción</label>
          <input 
            type="text"
            name="cancion" 
            id="cancion" 
            placeholder="Nombre Canción"
            className="py-3 px-3 rounded-md w-full"
            value={ busqueda.cancion  }
            onChange={ ( e ) => setBusqueda({
              ...busqueda,
              [ e.target.name ]: e.target.value
            }) } />
        </div>
        <input 
          type="submit" 
          value="Buscar"
          className="border border-indigo-500 text-indigo-500 p-3 rounded-md font-bold w-full text-md cursor-pointer hover:bg-indigo-500 hover:text-white transition-all duration-300 uppercase" />
    </form>
  )
}

export default Formulario