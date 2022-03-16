import Formulario from "./Formulario"
import Resultado from "./Resultado"



const AppLetras = () => {
  


  return (
    <>
      <header className="bg-indigo-600 py-7">
        <legend className="text-3xl uppercase font-black text-white text-center">Búsqueda de Letras de Canciones</legend>
      </header>
      <main className="w-[95%] max-w-[1000px] mx-auto bg-white p-5 md:p-8 my-6 rounded-md shadow-lg flex flex-col grow">
        <h2 className="text-center uppercase font-semibold text-2xl mb-10">Busca por artista y canción</h2>
        <div className="flex flex-wrap justify-center gap-5 md:grow h-auto">
          <Formulario/>
          <Resultado/>
        </div>
      </main>
    </>
  )
}

export default AppLetras